import re
import json

def parse_notes(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by author lines, but look backwards to find the title.
    # Actually, a better way is to split by double blank lines before a book title,
    # or just use regex to find all "ஆசிரியர்:" and extract backwards.

    lines = content.split('\n')
    
    books = []
    current_book = None
    
    for line in lines:
        stripped = line.strip()
        
        # New book detection
        if stripped.startswith('ஆசிரியர்:'):
            # The title is usually 1, 2, or 3 lines above
            title = books[-1]['_raw_title'] if books and current_book is None else None
            if not current_book:
                continue
            current_book['author'] = stripped.replace('ஆசிரியர்:', '').strip()
        elif stripped.startswith('எழுதப்பட்ட காலம்:'):
            if current_book:
                current_book['date'] = stripped.replace('எழுதப்பட்ட காலம்:', '').strip()
        elif stripped.startswith('மையக்கருத்து:'):
            if current_book:
                current_book['theme'] = stripped.replace('மையக்கருத்து:', '').strip()
        elif stripped.startswith('மையக்கருத்து '):
            if current_book:
                current_book['theme'] = stripped.replace('மையக்கருத்து ', '').strip()
        elif stripped.startswith('மையகருத்து:'):
            if current_book:
                current_book['theme'] = stripped.replace('மையகருத்து:', '').strip()
        else:
            # Check if this line looks like a title
            # A title is usually followed by some blank lines then "ஆசிரியர்"
            # But let's just collect text
            if current_book and 'theme' in current_book:
                current_book['detail_lines'].append(stripped)
            elif not current_book or ('author' not in current_book):
                # Potential title?
                if stripped and ord(stripped[0]) > 127: # Contains Non-ASCII (Tamil)
                    # It might be a title
                    if current_book and not current_book.get('author'):
                        # False start, just update title
                        current_book['title'] = stripped
                    else:
                        current_book = {'title': stripped, 'detail_lines': [], 'author': '', 'date': '', 'theme': ''}
                        books.append(current_book)

    # Clean up detail lines into paragraphs
    for b in books:
        # Join lines, replacing single newlines with spaces and double newlines with <p>
        # First, group by blank lines
        paragraphs = []
        curr_p = []
        for dline in b['detail_lines']:
            if dline == '':
                if curr_p:
                    paragraphs.append(' '.join(curr_p))
                    curr_p = []
            else:
                curr_p.append(dline)
        if curr_p:
            paragraphs.append(' '.join(curr_p))
        
        # Build HTML
        html_details = []
        for p in paragraphs:
            if re.match(r'^\d+\.', p) or ' - ' in p or p.startswith('*'):
                # Looks like a list item or sub-head
                html_details.append(f"<p><strong>{p}</strong></p>")
            else:
                html_details.append(f"<p>{p}</p>")
            
        b['html'] = "".join(html_details)

    return books

books = parse_notes('/Users/jebathottamministries/Desktop/bc/notes.txt')
for b in books:
    if b['author']:
        print(f"[{b['title']}] Author: {b.get('author')}")

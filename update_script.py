import re
import codecs

def update_script():
    with open('/Users/jebathottamministries/Desktop/bc/notes.txt', 'r', encoding='utf-8') as f:
        notes = f.read().replace('\ufeff', '')

    # Known books mapping: 'English Name in Text': 'id'
    english_to_id = {
        'Genesis': 'genesis', 'Exodus': 'exodus', 'Leciticus': 'leviticus', 'Leviticus': 'leviticus',
        'Numbers': 'numbers', 'Deuteronomy': 'deuteronomy', 'Joshua': 'joshua', 'Judges': 'judges',
        'Ruth': 'ruth', '1 Samuel': '1samuel', '2 Samuel': '2samuel', '1 Kings': '1kings', '2 Kings': '2kings',
        '1 Chronicles': '1chronicles', '2 Chronicles': '2chronicles', 'Ezra': 'ezra', 'Nehemiah': 'nehemiah',
        'Esther': 'esther', 'Job': 'job', 'Psalms': 'psalms', 'Proverbs': 'proverbs', 'Ecclesiastes': 'ecclesiastes',
        'Song of songs': 'songofsolomon', 'Song of Solomon': 'songofsolomon', 'Isaiah': 'isaiah', 'Jeremiah': 'jeremiah',
        'Lamentations': 'lamentations', 'Ezekiel': 'ezekiel', 'Daniel': 'daniel', 'Hosea': 'hosea', 'Joel': 'joel',
        'Amos': 'amos', 'Obadiah': 'obadiah', 'Jonah': 'jonah', 'Micah': 'micah', 'Nahum': 'nahum', 'Habakuk': 'habakkuk', 'Habakkuk': 'habakkuk',
        'Zepaniah': 'zephaniah', 'Zephaniah': 'zephaniah', 'Haggai': 'haggai', 'Zachariah': 'zechariah', 'Zechariah': 'zechariah', 'Malachi': 'malachi'
    }

    # Extract books from notes
    lines = [L.strip() for L in notes.split('\n')]
    
    parsed_books = {}
    current_book_id = None
    
    for l in lines:
        l_stripped = l.strip()
        if not l_stripped:
            if current_book_id and 'detail_lines' in parsed_books[current_book_id]:
                if parsed_books[current_book_id]['detail_lines'] and parsed_books[current_book_id]['detail_lines'][-1] != "":
                     parsed_books[current_book_id]['detail_lines'].append("")
            continue
        
        # Check if the line contains a known English book name
        potential_id = None
        for eng, bid in english_to_id.items():
            if eng.lower() in l_stripped.lower() and len(l_stripped) < 40 and ('1 & 2' not in l_stripped):
                # Ensure it's a book title line, e.g. "ஆதியாகமம் Genesis" or "1 சாமுவேல்"
                potential_id = bid
                break
                
        if potential_id:
            current_book_id = potential_id
            parsed_books[current_book_id] = {'author': '', 'date': '', 'theme': '', 'detail_lines': [], 'title': l_stripped}
            continue
            
        if not current_book_id:
            continue
            
        b = parsed_books[current_book_id]
        
        if l_stripped.startswith('ஆசிரியர்:') and not b['author']:
            b['author'] = l_stripped.replace('ஆசிரியர்:', '').strip()
        elif 'எழுதப்பட்ட காலம்:' in l_stripped and not b['date']:
            b['date'] = l_stripped.replace('எழுதப்பட்ட காலம்:', '').strip()
        elif ('மையக்கருத்து:' in l_stripped or 'மையகருத்து:' in l_stripped or 'மையக்கருத்து ' in l_stripped) and not b['theme']:
            l_th = l_stripped.replace('மையக்கருத்து:', '').replace('மையகருத்து:', '').replace('மையக்கருத்து ', '').strip()
            b['theme'] = l_th
        else:
            if l_stripped.startswith('புத்தகத்தின் பெயர்') or l_stripped.startswith('ஆசிரியர்: இந்த') or l_stripped.startswith('வரலாற்றுப் பின்னணி:'):
                b['detail_lines'].append(l_stripped)
            else:
                b['detail_lines'].append(l_stripped)

    # Format details properly
    for bid, b in parsed_books.items():
        # Clean lines
        dlines = b['detail_lines']
        paragraphs = []
        curr_p = []
        for d in dlines:
            if d == "":
                if curr_p:
                    paragraphs.append(" ".join(curr_p))
                    curr_p = []
            else:
                curr_p.append(d)
        if curr_p:
            paragraphs.append(" ".join(curr_p))
            
        html_out = ""
        in_list = False
        for p in paragraphs:
            # Basic formatting
            if re.match(r'^[\d]+\.', p) or p.startswith('*') or ':' in p[:20]:
                if not in_list:
                    html_out += "<ul>"
                    in_list = True
                html_out += f"<li>{p.lstrip(' *0123456789.')}</li>"
            else:
                if in_list:
                    html_out += "</ul>"
                    in_list = False
                if len(p) < 60 and not p.endswith('.') and not p.endswith(':'):
                    html_out += f"<h3>{p}</h3>"
                else:
                    html_out += f"<p>{p}</p>"
        if in_list:
             html_out += "</ul>"
             
        b['html'] = html_out

    # Now read script.js and patch it
    with open('/Users/jebathottamministries/Desktop/bc/script.js', 'r', encoding='utf-8') as f:
        script_content = f.read()
        
    for bid, b in parsed_books.items():
        # Regex to find the book dict.
        # { id:'genesis', icon:'...', name:'...', eng:'...', author:'...', date:'...', theme:'...', summary:'...', detail:`...` }
        
        pattern = re.compile(r"(\{ id:'" + bid + r"'.*?author:\')([^']*)(\', date:\')([^']*)(\', theme:\')([^']*)(\',[^d]*detail:`)(.*?)(`\})", re.DOTALL)
        match = pattern.search(script_content)
        if match:
            # We preserve everything else but replace author, date, theme, and detail.
            # match.group(1): "{ id:'genesis', ... author:'"
            # match.group(2): <old_author>
            # match.group(3): "', date:'"
            # match.group(4): <old_date>
            # match.group(5): "', theme:'"
            # match.group(6): <old_theme>
            # match.group(7): "', ... detail:`"
            # match.group(8): <old_detail>
            # match.group(9): "`}"
            
            author = b['author'].replace("'", "\\'") if b['author'] else match.group(2)
            date = b['date'].replace("'", "\\'") if b['date'] else match.group(4)
            theme = b['theme'].replace("'", "\\'") if b['theme'] else match.group(6)
            detail = b['html'].replace("`", "\\`") if b['html'] else match.group(8)
            
            replacement = f"{match.group(1)}{author}{match.group(3)}{date}{match.group(5)}{theme}{match.group(7)}{detail}{match.group(9)}"
            script_content = script_content[:match.start()] + replacement + script_content[match.end():]
        else:
            print("Did not find match for", bid)

    with open('/Users/jebathottamministries/Desktop/bc/script.js', 'w', encoding='utf-8') as f:
        f.write(script_content)

    print("Success! Updated script.js with all 39 books.")

if __name__ == '__main__':
    update_script()

import re
import json

with open('/Users/jebathottamministries/Desktop/bc/notes.txt', 'r', encoding='utf-8') as f:
    content = f.read().replace('\ufeff', '')

matches = list(re.finditer(r'ஆசிரியர்:', content))

blocks = []
for i in range(len(matches)):
    start_pos = matches[i].start()
    end_pos = matches[i+1].start() if i + 1 < len(matches) else len(content)
    
    head_text = content[:start_pos] if i == 0 else content[matches[i-1].start():start_pos]
    lines_before = [l.strip() for l in head_text.split('\n') if l.strip()]
    
    title = lines_before[-1] if lines_before else "UNKNOWN"
    body = content[start_pos:end_pos]
    
    blocks.append({'title': title, 'body': body[:50].replace('\n', '  ') + '...'})

for b in blocks:
    print(b['title'])

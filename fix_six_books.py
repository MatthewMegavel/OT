import re

with open('/Users/jebathottamministries/Desktop/bc/notes.txt', 'r', encoding='utf-8') as f:
    text = f.read().replace('\ufeff', '')

# We know the specific texts
# Find 1 Samuel part
samuel_block = re.search(r'1 சாமுவேல்\n(.*?)(?=2 சாமுவேல்\n)', text, re.DOTALL).group(1)
samuel2_block = re.search(r'2 சாமுவேல்\n(.*?)(?=1 & 2 ராஜாக்கள் Kings\n)', text, re.DOTALL).group(1)
kings1_block = re.search(r'1 ராஜாக்கள்\n(.*?)(?=1 ராஜாக்கள் - சுருக்கம்)', text, re.DOTALL).group(1) + "1 ராஜாக்கள் - சுருக்கம் (Outline):\n 1. சாலொமோனின் ஆட்சி (1:1 – 11:43)\n 2. ரெகொபெயாம் மற்றும் யெரோபெயாம் (12:1 – 14:31)\n 3. பிரிந்த ராஜ்யத்தின் வரலாறு (15:1 – 22:53)"
kings2_block = re.search(r'2 ராஜாக்கள்\n(.*?)(?=2ராஜாக்கள் - சுருக்கம்)', text, re.DOTALL).group(1) + "2ராஜாக்கள் - சுருக்கம் (Outline):\n 1. இஸ்ரவேல் மற்றும் யூதாவின் கூட்டுறவு (1:1 – 9:37)\n 2. இஸ்ரவேலின் வளமும் வீழ்ச்சியும் (10:1 – 17:41)\n 3. அசீரியரின் ஆட்சியின்கீழ் யூதா (18:1 – 23:30)\n 4. பாபிலோனால் யூதாவின் வீழ்ச்சி (23:31 – 25:30)"

chr1_block = re.search(r'1 நாளாகமம்\n(.*?)(?=1 நாளாகமம்  - சுருக்கம்)', text, re.DOTALL).group(1) + "1 நாளாகமம்  - சுருக்கம் (Outline):\n 1. வம்சவரிசைகள் (1:1 – 9:44)\n 2. சவுலின் மரணம் முதல் தாவீதின் எழுச்சி வரை (10:1 – 12:24)\n 3. தாவீதின் ஆட்சி (13:1 – 29:30)"
chr2_block = re.search(r'2 நாளாகமம்\n(.*?)(?=2 நாளாகமம்  - சுருக்கம்)', text, re.DOTALL).group(1) + "2 நாளாகமம்  - சுருக்கம் (Outline):\n 1. சாலொமோனின் ஆட்சி (1:1 – 9:31)\n 2. யூதா ராஜாக்களின் வரலாறு (10:1 – 36:23)"

def format_html(txt):
    lines = txt.strip().split('\n')
    paragraphs = []
    curr_p = []
    for d in lines:
        if d.strip() == "":
            if curr_p:
                paragraphs.append(" ".join(curr_p))
                curr_p = []
        else:
            curr_p.append(d.strip())
    if curr_p:
        paragraphs.append(" ".join(curr_p))
        
    html_out = ""
    in_list = False
    for p in paragraphs:
        if re.match(r'^[\d]+\.', p) or p.startswith('*') or ':' in p[:30]:
            if not in_list:
                html_out += "<ul>"
                in_list = True
            html_out += f"<li>{p.lstrip(' *0123456789.')}</li>"
        else:
            if in_list:
                html_out += "</ul>"
                in_list = False
            html_out += f"<p>{p}</p>"
    if in_list:
         html_out += "</ul>"
    return html_out

updates = {
    '1samuel': format_html(samuel_block),
    '2samuel': format_html(samuel2_block),
    '1kings': format_html(kings1_block),
    '2kings': format_html(kings2_block),
    '1chronicles': format_html(chr1_block),
    '2chronicles': format_html(chr2_block)
}

with open('/Users/jebathottamministries/Desktop/bc/script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()
    
for bid, html in updates.items():
    pattern = re.compile(r"(\{ id:'" + bid + r"'.*?detail:`)(.*?)(`\})", re.DOTALL)
    match = pattern.search(script_content)
    if match:
        detail = html.replace("`", "\\`")
        replacement = f"{match.group(1)}{detail}{match.group(3)}"
        script_content = script_content[:match.start()] + replacement + script_content[match.end():]
        print("Patched", bid)
    else:
        print("Failed to patch", bid)

with open('/Users/jebathottamministries/Desktop/bc/script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

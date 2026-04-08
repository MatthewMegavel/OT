// ========== BOOK DATA ==========
const booksData = {
  law: [
    { id:'genesis', icon:'📜', name:'ஆதியாகமம்', eng:'Genesis', author:'மோசே', date:'கி.மு.1450–1410', theme:'ஆரம்பங்கள்',
      summary:'ஆதியாகமம் என்பது துவக்கங்களின் புத்தகம். இது வானமும் பூமியும் தோன்றிய வரலாற்றை மட்டுமல்லாமல், தாவரங்கள், மிருகங்கள், மனித வாழ்க்கை மற்றும் அனைத்து மனித உறவுகளின் தோற்றத்தையும் பதிவு செய்கிறது.',
      detail:`<h3>பெயரின் பொருள்</h3><p>"Genesis" என்பது "ஆரம்பம்" அல்லது "தோற்றம்" என்று பொருள்படும் ஒரு கிரேக்க சொல். எபிரேயத் தலைப்பு "பெரேஷித்" (Bereshith) – "ஆரம்பத்தில்" என்பதாகும்.</p>
<h3>தேவனுடைய நாமங்கள்</h3><ul><li>ஏலோகீம் – சிருஷ்டிப்பின் தேவன்</li><li>யெகோவா (யாவே) – உடன்படிக்கையை காத்து நிறைவேற்றும் கர்த்தர்</li><li>அதோனை – ஆண்டவரும் எஜமானரும்</li></ul>
<h3>நான்கு உடன்படிக்கைகள்</h3><ol><li>ஏதேன் உடன்படிக்கை</li><li>ஆதாம் உடன்படிக்கை</li><li>நோவா உடன்படிக்கை</li><li>ஆபிரகாம் உடன்படிக்கை</li></ol>
<h3>இரண்டு முக்கிய பிரிவுகள்</h3><p><strong>ஆதியாகமம் 1–11:</strong> ஆதிகால வரலாறு – சிருஷ்டிப்பு, வீழ்ச்சி, பெருவெள்ளம், பாபேல் கோபுரம்</p><p><strong>ஆதியாகமம் 12–50:</strong> முற்பிதாக்களின் வரலாறு – ஆபிரகாம், ஈசாக்கு, யாக்கோபு, யோசேப்பு</p>
<h3>சுருக்கம்</h3><ol><li>சிருஷ்டிப்பு (1:1–2:25)</li><li>வீழ்ச்சியும் அதன் விளைவுகளும் (3:1–5:32)</li><li>நோவாவிலிருந்து பாபேல் வரை (6:1–11:32)</li><li>ஆபிரகாமின் வாழ்க்கை (12:1–25:18)</li><li>ஈசாக்கும் அவரது குடும்பமும் (25:19–26:35)</li><li>யாக்கோபும் அவரது மகன்களும் (27:1–37:1)</li><li>யோசேப்பின் வாழ்க்கை (37:2–50:26)</li></ol>`},
    { id:'exodus', icon:'🌊', name:'யாத்திராகமம்', eng:'Exodus', author:'மோசே', date:'கி.மு.1450–1410', theme:'மீட்புப் பயணம்',
      summary:'"Exodus" என்ற சொல்லுக்கு "வெளியேறுதல்" என்று பொருள். இது இஸ்ரவேலர் எகிப்திலிருந்து புறப்பட்ட நிகழ்வைக் குறிக்கிறது.',
      detail:`<h3>முக்கிய கருப்பொருட்கள்</h3><ul><li>மீட்பு (Redemption)</li><li>உடன்படிக்கை (Covenant)</li><li>தேவனுடைய பிரசன்னம் (Divine Presence)</li></ul>
<h3>முக்கிய பிரிவுகள்</h3><ol><li>அடிமைத்தனத்திலிருந்து விடுதலை (1–15)</li><li>வனாந்தரப் பயணம் (16–18)</li><li>சீனாயில் உடன்படிக்கை (19–24)</li><li>ஆசரிப்புக்கூடாரமும் பொன் கன்றுக்குட்டியும் (25–40)</li></ol>`},
    { id:'leviticus', icon:'🔥', name:'லேவியராகமம்', eng:'Leviticus', author:'மோசே', date:'கி.மு.1450–1410', theme:'பரிசுத்த வாழ்வு',
      summary:'லேவியின் சந்ததியினரான ஆசாரியர்களால் செய்யப்படும் பலிகள், சடங்குகள் மற்றும் சட்டங்களை மையமாகக் கொண்டுள்ளது.',
      detail:`<h3>மைய வசனம்</h3><p>"நான் பரிசுத்தர், ஆகையால் நீங்களும் பரிசுத்தராயிருப்பீர்களாக" (லேவி. 11:45)</p>
<h3>ஐந்து பலிகள்</h3><ol><li>சர்வாங்க தகனபலி – முழுமையான அர்ப்பணிப்பு</li><li>போஜன பலி – நன்றி செலுத்தும் பலி</li><li>சமாதான பலி – உறவுமுறையைக் கொண்டாடும் பலி</li><li>பாவநிவாரண பலி – பரிகாரம் செய்யும் பலி</li><li>குற்றநிவாரண பலி – நஷ்டஈடு செலுத்தும் பலி</li></ol>`},
    { id:'numbers', icon:'⛺', name:'எண்ணாகமம்', eng:'Numbers', author:'மோசே', date:'கி.மு.1450–1410', theme:'வனாந்தர அலைச்சல்',
      summary:'சீனாய் மலையிலிருந்து வாக்குத்தத்த தேசத்தை நோக்கிச் செல்லும் இஸ்ரவேல் ஜனங்களின் பயணத்தை பதிவு செய்கிறது.',
      detail:`<h3>முக்கிய நிகழ்வுகள்</h3><ul><li>பன்னிரண்டு வேவுக்காரர்கள் அனுப்பப்படுதல்</li><li>ஜனங்களின் கிளர்ச்சி மற்றும் நாற்பது ஆண்டுகால அலைச்சல்</li><li>பாலாக் மற்றும் பிலேயாம் சம்பவம்</li><li>புதிய தலைமுறை கானானுக்குள் செல்லத் தயாராகுதல்</li></ul>`},
    { id:'deuteronomy', icon:'📖', name:'உபாகமம்', eng:'Deuteronomy', author:'மோசே', date:'கி.மு.1450–1410', theme:'மோசேயின் இறுதி உரைகள்',
      summary:'மோவாபின் சமவெளியில், வாக்குத்தத்த தேசத்துக்குள் செல்லும் முன், மோசே வழங்கிய இறுதி உரைகளை உபாகமம் பதிவு செய்கிறது.',
      detail:`<h3>மூன்று உரைகள்</h3><ol><li>முதல் உரை (1–11): வனாந்தர வரலாற்றின் மறுஆய்வு</li><li>இரண்டாம் உரை (12–26): நியாயப்பிரமாணத்தின் சாரம்</li><li>மூன்றாம் உரை (27–30): ஆசீர்வாதங்களும் சாபங்களும்</li></ol>
<h3>இறுதி நிகழ்வுகள் (31–34)</h3><ul><li>யோசுவா தலைவராக நியமிக்கப்படுகிறார்</li><li>மோசேயின் பாடல்</li><li>நேபோ மலையில் மோசேயின் மரணம்</li></ul>`}
  ],
  history: [
    { id:'joshua', icon:'⚔️', name:'யோசுவா', eng:'Joshua', author:'யோசுவா', date:'கி.மு.1400–1370', theme:'தேசத்தை சுதந்தரித்தல்',
      summary:'வனாந்தர அலைச்சலிலிருந்து, வாக்குத்தத்த தேசத்தில் குடியேறுதல் வரையுள்ள மாற்றத்தைப் பதிவுசெய்கிறது.',
      detail:`<h3>முக்கியப் பிரிவுகள்</h3><ol><li>அழைப்பு மற்றும் பிரவேசித்தல் (1–5)</li><li>கானானை கைப்பற்றுதல் (6–12)</li><li>தேசப் பங்கீடு (13–22)</li><li>உடன்படிக்கை புதுப்பித்தல் (23–24)</li></ol>`},
    { id:'judges', icon:'🛡️', name:'நியாயாதிபதிகள்', eng:'Judges', author:'சாமுவேல்', date:'கி.மு.1050–1000', theme:'பெரிய தலைவர்கள் – பெரிய தோல்விகள்',
      summary:'யோசுவாவின் மரணத்திற்குப் பிறகு சாமுவேலின் ஊழிய காலம் வரையிலான காலத்தை பதிவு செய்கிறது.',
      detail:`<h3>ஆவிக்குரிய மறுசுழற்சி</h3><p>பாவம் → அடிமைத்தனம் → மனந்திரும்புதல் → விடுதலை → சமாதானம் → மீண்டும் பாவம்</p>
<h3>12 நியாயாதிபதிகள்</h3><p>ஒத்னியேல், ஏகூத், சம்கார், தெபோராள், கிதியோன், தோலா, யாவீர், யெப்தா, இப்சான், ஏலோன், அப்தோன், சிம்சோன்</p>`},
    { id:'ruth', icon:'🌾', name:'ரூத்', eng:'Ruth', author:'தெரியாது', date:'கி.மு.1000', theme:'அன்பான கிருபை',
      summary:'மோவாபிய பெண் ரூத்தின் விசுவாசமும், போவாஸ் மூலம் மீட்பும், தாவீதின் வம்சவரிசையும் இடம்பெறுகிறது.',
      detail:`<h3>சுருக்கம்</h3><ol><li>ரூத் தீர்மானிக்கிறாள் (அதி. 1)</li><li>ரூத் சேவை செய்கிறாள் (அதி. 2)</li><li>ரூத் இளைப்பாறுதலை நாடுகிறாள் (அதி. 3)</li><li>ரூத் பலன் பெறுகிறாள் (அதி. 4)</li></ol>`},
    { id:'1samuel', icon:'👑', name:'1 சாமுவேல்', eng:'1 Samuel', author:'சாமுவேல்', date:'கி.மு.930', theme:'அரசாட்சியின் நிறுவல்',
      summary:'நியாயாதிபதிகளின் காலத்திலிருந்து அரசாட்சிக்கு மாறிய மாற்றத்தைக் காட்டுகிறது. சாமுவேல், சவுல், தாவீது.',
      detail:`<h3>மூன்று முக்கிய நபர்கள்</h3><ul><li>சாமுவேல் – தீர்க்கதரிசி, கடைசி நியாயாதிபதி</li><li>சவுல் – முதல் அரசன், கீழ்ப்படியாமையால் நிராகரிக்கப்பட்டார்</li><li>தாவீது – தேவனால் தேர்ந்தெடுக்கப்பட்ட அரசன்</li></ul>`},
    { id:'2samuel', icon:'🏰', name:'2 சாமுவேல்', eng:'2 Samuel', author:'சாமுவேல்', date:'கி.மு.930', theme:'தாவீதின் ஆட்சி',
      summary:'தாவீது அரசனின் 40 ஆண்டுகால ஆட்சியை விவரிக்கிறது. தாவீதின் உடன்படிக்கை முக்கியமான நிகழ்வு.',
      detail:`<h3>முக்கியப் பிரிவுகள்</h3><ol><li>தாவீதின் எழுச்சியும் வெற்றிகளும் (1–10)</li><li>தாவீதின் பாவமும் விளைவுகளும் (11–20)</li><li>இறுதி பதிவுகள் (21–24)</li></ol>`},
    { id:'1kings', icon:'🏛️', name:'1 ராஜாக்கள்', eng:'1 Kings', author:'எரேமியா', date:'கி.மு.600–550', theme:'உடன்படிக்கை உண்மைத்தன்மை',
      summary:'சாலொமோன் அரசனின் ஆட்சியிலிருந்து தொடங்கி, பிரிந்த ராஜ்யத்தின் ஆரம்ப கால வரலாற்றை விவரிக்கிறது.',
      detail:`<h3>சாலொமோனின் ஆட்சி</h3><p>எருசலேமில் ஆலயத்தை கட்டியது அவரது முக்கிய சாதனை. ஆனால் விக்கிரகாராதனைக்கு சாய்ந்ததால் ராஜ்யம் பிரிந்தது.</p>
<h3>ராஜ்யத்தின் பிரிவு</h3><ul><li>இஸ்ரவேல் (வடக்கு) – சமாரியா</li><li>யூதா (தெற்கு) – எருசலேம்</li></ul>`},
    { id:'2kings', icon:'⚡', name:'2 ராஜாக்கள்', eng:'2 Kings', author:'எரேமியா', date:'கி.மு.600–550', theme:'ராஜ்யங்களின் வீழ்ச்சி',
      summary:'இரு ராஜ்யங்களின் வீழ்ச்சியைப் பதிவு செய்கிறது. இஸ்ரவேல் அசீரியரால், யூதா பாபிலோனியரால் வீழ்ந்தது.',
      detail:`<h3>வீழ்ச்சிகள்</h3><ul><li>இஸ்ரவேல் வீழ்ச்சி – கி.மு. 722/721 (அசீரியர்)</li><li>யூதா வீழ்ச்சி – கி.மு. 586 (பாபிலோனியர்)</li></ul>`},
    { id:'1chronicles', icon:'📋', name:'1 நாளாகமம்', eng:'1 Chronicles', author:'எஸ்றா', date:'கி.மு.450–425', theme:'தாவீதின் விசுவாசம்',
      summary:'ஆதாமிலிருந்து தாவீதின் வம்ச வரிசை மற்றும் தாவீது அரசனின் ஆட்சியை விவரிக்கிறது.',
      detail:`<h3>சுருக்கம்</h3><ol><li>வம்சவரிசைகள் (1:1–9:44)</li><li>சவுலின் மரணம் முதல் தாவீதின் எழுச்சி (10:1–12:24)</li><li>தாவீதின் ஆட்சி (13:1–29:30)</li></ol>`},
    { id:'2chronicles', icon:'🕍', name:'2 நாளாகமம்', eng:'2 Chronicles', author:'எஸ்றா', date:'கி.மு.450–425', theme:'யூதா ராஜாக்கள்',
      summary:'சாலொமோனின் ஆட்சியுடன் தொடங்கி யூதாவின் வரலாற்றை கோரேஸ் அரசன் கட்டளை வரை பதிவு செய்கிறது.',
      detail:`<h3>சுருக்கம்</h3><ol><li>சாலொமோனின் ஆட்சி (1:1–9:31)</li><li>யூதா ராஜாக்களின் வரலாறு (10:1–36:23)</li></ol>`},
    { id:'ezra', icon:'🏗️', name:'எஸ்றா', eng:'Ezra', author:'எஸ்றா', date:'கி.மு.450–444', theme:'ஆலயம் மீண்டும் கட்டப்படுதல்',
      summary:'பாபிலோன் சிறைவாசத்திலிருந்து திரும்பியவர்கள் எருசலேம் ஆலயத்தை மீண்டும் கட்டினார்கள்.',
      detail:`<h3>சுருக்கம்</h3><ol><li>நாட்டிற்கு முதல் திரும்புதல் (1:1–2:70)</li><li>ஆலயம் மீண்டும் கட்டப்பட்டது (3:1–6:22)</li><li>எஸ்றாவின் திரும்புதல் மற்றும் ஊழியம் (7:1–10:44)</li></ol>`},
    { id:'nehemiah', icon:'🧱', name:'நெகேமியா', eng:'Nehemiah', author:'எஸ்றா', date:'கி.மு.450–444', theme:'மதில்களை மீண்டும் கட்டுதல்',
      summary:'நெகேமியா எருசலேமின் மதில்களை மறுபடியும் கட்டி, மக்களுக்கு வலுவான தலைமையை வழங்கினார்.',
      detail:`<h3>சுருக்கம்</h3><ol><li>மதில்கள் மீண்டும் கட்டப்படுதல் (1:1–6:19)</li><li>ஆன்மீக சீர்திருத்தம் (7:1–10:39)</li><li>நெகேமியாவின் நடவடிக்கைகள் (11:1–13:31)</li></ol>`},
    { id:'esther', icon:'👸', name:'எஸ்தர்', eng:'Esther', author:'தெரியவில்லை', date:'கி.மு.465', theme:'தேவன் ஜனங்களை பாதுகாக்கிறார்',
      summary:'பெர்சிய அரண்மனையில் எஸ்தர் மூலம் யூதர்கள் அற்புதமாக விடுவிக்கப்பட்டதை பதிவு செய்கிறது.',
      detail:`<h3>சுருக்கம்</h3><ol><li>பெர்சிய அரண்மனையில் யூதர்கள் (1:1–2:23)</li><li>யூதர்களுக்கு ஏற்பட்ட அச்சுறுத்தல் (3:1–5:14)</li><li>யூதர்களின் வெற்றி (6:1–10:3)</li></ol>`}
  ],
  poetry: [
    { id:'job', icon:'🕊️', name:'யோபு', eng:'Job', author:'தெரியவில்லை', date:'தெரியவில்லை', theme:'நீதிமான்களின் துன்பம்',
      summary:'நீதிமான்கள் ஏன் துன்பப்படுகிறார்கள்? என்ற கேள்வியை ஆராய்கிறது. தேவனுடைய அதிகாரமும் மனிதரின் வரம்புகளும் வெளிப்படுகின்றன.',
      detail:`<h3>முக்கிய பாத்திரங்கள்</h3><ul><li>யோபு – நீதிமான், துன்பத்திலும் விசுவாசமானவர்</li><li>எலிப்பாஸ், பில்தாத், சோப்பார் – நண்பர்கள்</li><li>எலிகூ – புதிய பார்வை முன்வைப்பவர்</li></ul>`},
    { id:'psalms', icon:'🎵', name:'சங்கீதங்கள்', eng:'Psalms', author:'தாவீது மற்றும் சிலர்', date:'தெரியவில்லை', theme:'துதி பாடல்கள்',
      summary:'150 பாடல்கள், ஜெபங்கள் மற்றும் கவிதைகளைக் கொண்ட எபிரேயக் கவிதைத் தொகுப்பு.',
      detail:`<h3>ஐந்து பகுதிகள்</h3><ol><li>புத்தகம் I – சங்கீதங்கள் 1–41</li><li>புத்தகம் II – 42–72</li><li>புத்தகம் III – 73–89</li><li>புத்தகம் IV – 90–106</li><li>புத்தகம் V – 107–150</li></ol>`},
    { id:'proverbs', icon:'💡', name:'நீதிமொழிகள்', eng:'Proverbs', author:'சாலொமோன்', date:'கி.மு.950–700', theme:'கர்த்தருக்கு பயப்படுதலே ஞானம்',
      summary:'தேவபக்திக்கான நடைமுறை வாழ்க்கையை கற்பிக்கிறது. நீதி, ஒழுக்கம் மற்றும் ஞானமான முடிவுகள் எடுக்க உதவுகிறது.',
      detail:`<h3>மையக் கருத்து</h3><p>"கர்த்தருக்குப் பயப்படுதலே ஞானத்தின் ஆரம்பம்." (நீதிமொழிகள் 1:7)</p>`},
    { id:'ecclesiastes', icon:'🌅', name:'பிரசங்கி', eng:'Ecclesiastes', author:'சாலொமோன்', date:'கி.மு.935', theme:'சூரியனுக்குக் கீழே எல்லாம் மாயை',
      summary:'வாழ்க்கையின் அர்த்தத்தை ஆராய்கிறது. தேவனில்லாத வாழ்க்கை மாயையானது என்பதை காட்டுகிறது.',
      detail:`<h3>இறுதி முடிவு</h3><p>"தேவனுக்குப் பயந்து, அவருடைய கட்டளைகளைக் கைக்கொள்; இதுவே மனுஷன் செய்ய வேண்டிய முழுக்கடமை." (12:13)</p>`},
    { id:'songofsolomon', icon:'🌹', name:'உன்னதப்பாட்டு', eng:'Song of Songs', author:'சாலொமோன்', date:'கி.மு.965', theme:'அன்பு தெய்வீகமானது',
      summary:'அன்பு, காதல், திருமண உறவு மற்றும் நெருக்கம் ஆகியவற்றை கவிதை வடிவில் அழகாக வெளிப்படுத்துகிறது.',
      detail:`<h3>மூன்றுவித விளக்கங்கள்</h3><ol><li>உருவக விளக்கம் – தேவன் & இஸ்ரவேல்</li><li>சொற்பொருள் விளக்கம் – மனித அன்பு & திருமணம்</li><li>முன்மாதிரி விளக்கம் – கிறிஸ்து & சபை</li></ol>`}
  ],
  prophets: [
    { id:'isaiah', icon:'🔮', name:'ஏசாயா', eng:'Isaiah', author:'ஏசாயா', date:'கி.மு.740–650', theme:'நியாயத்தீர்ப்பு & மெசியா இரட்சிப்பு',
      summary:'ஏசாயா "மேசியா தீர்க்கதரிசி" என அழைக்கப்படுகிறார். கன்னியினால் பிறப்பு, துன்பத்தின் மூலம் இரட்சிப்பு - இயேசுவில் நிறைவேறுகின்றன.',
      detail:`<h3>இரண்டு பிரிவுகள்</h3><p><strong>1–39:</strong> நியாயத்தீர்ப்பு மற்றும் எச்சரிக்கை</p><p><strong>40–66:</strong> ஆறுதல் மற்றும் மீட்பு</p>
<h3>மேசியா தீர்க்கதரிசனங்கள்</h3><ul><li>கன்னியினால் பிறப்பு (7:14)</li><li>சமாதானத்தின் ராஜா (9:6–7)</li><li>துன்பப்படுகிற சேவகர் (அதி. 53)</li></ul>`},
    { id:'jeremiah', icon:'💧', name:'எரேமியா', eng:'Jeremiah', author:'எரேமியா / பாரூக்', date:'கி.மு.627–585', theme:'நியாயத்தீர்ப்பு & எதிர்கால மீட்பு',
      summary:'"அழுகை தீர்க்கதரிசி" என்று அழைக்கப்படுகிறார். எருசலேம் அழிவிற்கு முன்பான நாற்பது ஆண்டுகளின் ஆன்மீக நிலையை வெளிப்படுத்துகிறது.',
      detail:`<h3>முக்கிய பிரிவுகள்</h3><ol><li>நியாயத்தீர்ப்பு தீர்க்கதரிசனங்கள் (1–29)</li><li>ஆறுதல் பகுதி (30–33)</li><li>எருசலேம் வீழ்ச்சி (34–45)</li><li>ஜாதிகளுக்கு எதிரான தீர்க்கதரிசனங்கள் (46–51)</li></ol>`},
    { id:'lamentations', icon:'😢', name:'புலம்பல்', eng:'Lamentations', author:'எரேமியா', date:'கி.மு.585', theme:'புலம்பல் கவிதை',
      summary:'எருசலேம் அழிக்கப்பட்டதைக் குறித்து எழுதப்பட்ட ஐந்து கவிதை புலம்பல்கள். முழுவதும் துக்கம், வேதனை, மனந்திரும்புதல் நிறைந்தது.',
      detail:`<h3>இரண்டு உண்மைகள்</h3><ul><li>தேவனுடைய நீதியான நியாயத்தீர்ப்பு</li><li>தேவனுடைய மாறாத இரக்கம்</li></ul>`},
    { id:'ezekiel', icon:'👁️', name:'எசேக்கியேல்', eng:'Ezekiel', author:'எசேக்கியேல்', date:'கி.மு.593–571', theme:'தேவனுடைய மகிமை',
      summary:'பாபிலோனில் சிறைவாசியாக இருந்த எசேக்கியேல் தீர்க்கதரிசியின் தரிசனங்களும் தீர்க்கதரிசனங்களும்.',
      detail:`<h3>முக்கிய தரிசனங்கள்</h3><ul><li>தேவனுடைய சிங்காசன ரதம் (அதி. 1)</li><li>எலும்புகளின் பள்ளத்தாக்கு (அதி. 37)</li><li>புதிய ஆலயம் (அதி. 40–48)</li></ul>`},
    { id:'daniel', icon:'🦁', name:'தானியேல்', eng:'Daniel', author:'தானியேல்', date:'கி.மு.536', theme:'தேவனுடைய இறையாண்மை',
      summary:'பாபிலோனில் சிறைவாசியாக இருந்த தானியேல் விசுவாசத்துடன் நிலைத்திருந்ததையும் எதிர்கால தீர்க்கதரிசனங்களையும் பதிவு செய்கிறது.',
      detail:`<h3>முக்கிய நிகழ்வுகள்</h3><ul><li>சிங்கக்குகை (அதி. 6)</li><li>எரிகிற சூளை (அதி. 3)</li><li>நான்கு ராஜ்யங்களின் தரிசனம் (அதி. 2, 7)</li></ul>`},
    { id:'hosea', icon:'💔', name:'ஓசியா', eng:'Hosea', author:'ஓசியா', date:'கி.மு.750–715', theme:'தேவனுடைய விசுவாசமான அன்பு',
      summary:'ஓசியா தனது அன்பற்ற மனைவி மீதான அன்பின் மூலம் தேவனுடைய இஸ்ரவேல் மீதான அன்பை சித்தரிக்கிறார்.',
      detail:``},
    { id:'joel', icon:'🌪️', name:'யோவேல்', eng:'Joel', author:'யோவேல்', date:'கி.மு.835', theme:'கர்த்தருடைய நாள்',
      summary:'வெட்டுக்கிளி படையெடுப்பை விவரித்து, கர்த்தருடைய நாள் பற்றி தீர்க்கதரிசனம் சொல்கிறது.',
      detail:``},
    { id:'amos', icon:'⚖️', name:'ஆமோஸ்', eng:'Amos', author:'ஆமோஸ்', date:'கி.மு.760–750', theme:'சமூக நீதி',
      summary:'ஒரு மேய்ப்பன் சமூக அநீதிக்கு எதிராகவும் உண்மையான ஆராதனைக்காகவும் குரல் கொடுக்கிறார்.',
      detail:``},
    { id:'obadiah', icon:'🏔️', name:'ஒபதியா', eng:'Obadiah', author:'ஒபதியா', date:'கி.மு.586', theme:'ஏதோமின் நியாயத்தீர்ப்பு',
      summary:'ஏதோம் மீதான நியாயத்தீர்ப்பையும் இஸ்ரவேலின் மீட்பையும் அறிவிக்கிறது.',
      detail:``},
    { id:'jonah', icon:'🐋', name:'யோனா', eng:'Jonah', author:'யோனா', date:'கி.மு.760', theme:'தேவனுடைய இரக்கம்',
      summary:'நினிவேக்கு போக மறுத்த யோனா மீனின் வயிற்றில் இருந்து மனந்திரும்பி நினிவேக்கு போகிறார்.',
      detail:``},
    { id:'micah', icon:'✨', name:'மீகா', eng:'Micah', author:'மீகா', date:'கி.மு.735–700', theme:'நீதியும் இரக்கமும்',
      summary:'சமாரியா மற்றும் எருசலேமின் பாவங்களுக்கு எதிராக பேசி, வரவிருக்கும் மீட்பரைப் பற்றி தீர்க்கதரிசனம் சொல்கிறார்.',
      detail:``},
    { id:'nahum', icon:'🌩️', name:'நாகூம்', eng:'Nahum', author:'நாகூம்', date:'கி.மு.660–630', theme:'நினிவேயின் வீழ்ச்சி',
      summary:'அசீரிய தலைநகரமான நினிவேயின் அழிவை அறிவிக்கிறது.', detail:``},
    { id:'habakkuk', icon:'🙏', name:'ஆபகூக்', eng:'Habakkuk', author:'ஆபகூக்', date:'கி.மு.609–605', theme:'விசுவாசத்தினால் ஜீவிப்பான்',
      summary:'தேவனிடம் "ஏன்?" என்று கேள்வி எழுப்பி, விசுவாசத்தில் நடப்பதே நீதி என்று கற்றுக்கொள்கிறார்.', detail:``},
    { id:'zephaniah', icon:'🔥', name:'செப்பனியா', eng:'Zephaniah', author:'செப்பனியா', date:'கி.மு.640–621', theme:'கர்த்தருடைய நாள்',
      summary:'கர்த்தருடைய மகா நாளின் நியாயத்தீர்ப்பையும் மீதியுள்ளோருக்கான நம்பிக்கையையும் அறிவிக்கிறது.', detail:``},
    { id:'haggai', icon:'🏛️', name:'ஆகாய்', eng:'Haggai', author:'ஆகாய்', date:'கி.மு.520', theme:'ஆலயத்தை கட்டுங்கள்',
      summary:'சிறைவாசத்திலிருந்து திரும்பிய மக்களை ஆலயத்தை கட்டி முடிக்க ஊக்குவிக்கிறார்.', detail:``},
    { id:'zechariah', icon:'🌟', name:'சகரியா', eng:'Zechariah', author:'சகரியா', date:'கி.மு.520–480', theme:'மேசியாவின் வருகை',
      summary:'ஆலய கட்டுமானத்தை ஊக்குவிக்கிறார். மேசியாவின் வருகை பற்றிய தீர்க்கதரிசனங்களை வழங்குகிறார்.', detail:``},
    { id:'malachi', icon:'📬', name:'மல்கியா', eng:'Malachi', author:'மல்கியா', date:'கி.மு.433–425', theme:'உடன்படிக்கையின் தூதர்',
      summary:'பழைய ஏற்பாட்டின் கடைசி புத்தகம். உண்மையான ஆராதனை மற்றும் உடன்படிக்கைக்கு விசுவாசமாக இருக்க அழைக்கிறது.', detail:``}
  ]
};

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initNavbar();
  initTimeline();
  initTabs();
  renderBooks('law');
  initRevealAnimations();
  initModal();
});

// ========== PARTICLES ==========
function createParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    hamburger.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}

// ========== TIMELINE ==========
function initTimeline() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
}

// ========== TABS ==========
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderBooks(cat);
    });
  });
}

// ========== RENDER BOOKS ==========
function renderBooks(category) {
  const grid = document.getElementById('books-grid');
  if (!grid) return;
  const books = booksData[category] || [];
  grid.innerHTML = books.map(b => `
    <div class="book-card" data-id="${b.id}" onclick="openBookModal('${category}','${b.id}')">
      <div class="book-card-header">
        <div class="book-icon">${b.icon}</div>
        <h3>${b.name}<small>${b.eng}</small></h3>
      </div>
      <div class="book-meta">
        <span>✍️ ${b.author}</span>
        <span>📅 ${b.date}</span>
      </div>
      <div class="book-card-body">
        <p class="book-summary">${b.summary}</p>
      </div>
    </div>
  `).join('');
  // Re-init reveal for new cards
  grid.querySelectorAll('.book-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 80);
  });
}

// ========== MODAL ==========
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openBookModal(category, id) {
  const books = booksData[category] || [];
  const book = books.find(b => b.id === id);
  if (!book) return;
  document.getElementById('modal-title').innerHTML = `${book.name}<small>${book.eng}</small>`;
  document.getElementById('modal-meta').innerHTML = `
    <div class="modal-meta-item"><strong>✍️ ஆசிரியர்:</strong> ${book.author}</div>
    <div class="modal-meta-item"><strong>📅 காலம்:</strong> ${book.date}</div>
    <div class="modal-meta-item"><strong>🎯 கருத்து:</strong> ${book.theme}</div>
  `;
  document.getElementById('modal-summary').textContent = book.summary;
  document.getElementById('modal-detail').innerHTML = book.detail || '';
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== SCROLL REVEAL ==========
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));
}

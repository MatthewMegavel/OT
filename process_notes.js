const fs = require('fs');

const notesText = fs.readFileSync('notes.txt', 'utf8');
const scriptText = fs.readFileSync('script.js', 'utf8');

// Parse notes.txt
const lines = notesText.split('\n');
let books = [];
let currentBook = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  // Checking if this line is a book title. Usually it's like "ஆதியாகமம் Genesis"
  // It has some english text at the end.
  const titleMatch = line.match(/^([^\sA-Za-z]+(?:\s+[^\sA-Za-z]+)*)\s+([A-Za-z0-9\s]+)$/);
  
  if (titleMatch || line === '1 & 2 சாமுவேல் Samuel' || line === '1 & 2 ராஜாக்கள் Kings' || line === '1 & 2 நாளாகமம் Chronicles' || line === '1 சாமுவேல்' || line === '2 சாமுவேல்' || line === '1 ராஜாக்கள்' || line === '2 ராஜாக்கள்' || line === '1 நாளாகமம்' || line === '2 நாளாகமம்') {
    // If it's one of the grouped ones, we might need special handling
    // Actually, in the notes, it says:
    // "1 & 2 சாமுவேல் Samuel"
    // Then later it has "1 சாமுவேல்" on its own line followed by its content.
    // Let's just create a new book object whenever we see "ஆசிரியர்:"
  }
}

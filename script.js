const targetWords = ['Thank', 'you', 'for','being','mine','philtatos']; // Replace with your words for each day
const clues = ['Be grateful', 'The man with the hottest body ever', '4','human-_____','you are?','my beloved']; // Replace with your clues for each day
const loveLetterImages = [
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png'
]; // Replace with the paths to your love letter images for each day

let currentDay = 0;

function showClue() {
  const letterContainer = document.getElementById('letter-container');
  clueContainer.innerHTML = `Clue: ${clues[currentDay]}`;
}

function showLetter() {
  const letterContainer = document.getElementById('letter-container');
  letterContainer.innerHTML = `<img src="${loveLetterImages[currentDay]}" alt="Love Letter">`;
}

function submitForm() {
  const inputWord = document.getElementById('word').value.toUpperCase();
  
  if (inputWord === targetWords[currentDay]) {
    showLetter();
    currentDay++;
    if (currentDay < targetWords.length) {
      alert(`Congratulations! You revealed letter ${currentDay + 1}`);
      showClue(); // Show the clue for the next day
    } else {
      alert('All letters revealed!');
    }
  } else {
    alert('Incorrect word. Try again!');
  }
}

document.addEventListener('DOMContentLoaded', showClue);




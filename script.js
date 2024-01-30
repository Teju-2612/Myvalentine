const words = ['thank','you','for','being','mine','philtatos']; // Replace with your words for each day
const loveLetterImages = [
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',
  'loveletter1.png',

]; // Replace with your image paths
let currentDay = 0;

function showLetter() {
    if (currentDay < words.length) {
        const loveLetterImage = document.getElementById('love-letter-image');
        loveLetterImage.src = loveLetterImages[currentDay];
        loveLetterImage.style.display = 'block'; // Display the love letter image
    } else {
        alert('All love letters revealed!');
    }
}

function submitForm() {
    const inputWord = document.getElementById('word').value;
    const targetWord = words[currentDay];

    if (inputWord.toUpperCase() === targetWord) {
        currentDay++;
        showLetter();
    } else {
        alert('Incorrect word. Try again!');
    }
}

document.addEventListener('DOMContentLoaded', showLetter);

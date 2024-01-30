const words = ['LOVE', 'IS', 'IN', 'THE', 'AIR']; // Replace with your words for each day
let currentDay = 0;

function showLetter() {
    if (currentDay < words.length) {
        const letterContainer = document.getElementById('letter-container');
        letterContainer.innerHTML = words[currentDay];
    } else {
        alert('All letters revealed!');
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

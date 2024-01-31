const targetWords = ['Thank', 'you', 'for', 'being', 'mine', 'philtatos'];
const clues = ['Be grateful', 'The man with the hottest body ever', '4', 'human-_____', 'you are?', 'my beloved'];
const images = [
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png'
];

let currentDay = 0;
let canGuess = false;

function showImage() {
    const imageElement = document.querySelector('.image');
    const currentImageIndex = targetWords.indexOf(clues[currentDay].toLowerCase());

    imageElement.src = images[currentImageIndex];
    imageElement.style.display = 'block';

    const timerDuration = 24 * 60 * 60 * 1000;
    let startTime = Date.now();
    const timerElement = document.querySelector('.timer');

    function updateTimer() {
        const remainingTime = timerDuration - (Date.now() - startTime);

        if (remainingTime < 0) {
            startTime = Date.now();
            canGuess = true; // Enable guessing when the timer reaches 0
            return;
        }

        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        timerElement.textContent = timeString;
    }
    setInterval(updateTimer, 1000);
}

function checkAnswer() {
    if (!canGuess) {
        alert('You can only guess the second word after the timer reaches 0.');
        return;
    }

    const answerInput = document.querySelector('#answer');
    const answer = answerInput.value.trim().toLowerCase();

    if (answer === clues[currentDay].toLowerCase()) {
        showImage();
        currentDay++;

        if (currentDay < targetWords.length) {
            alert(`Congratulations! You revealed letter ${currentDay + 1}`);
            canGuess = false; // Disable guessing until the timer reaches 0 again
        } else {
            alert('All letters revealed!');
        }
    } else {
        alert('Incorrect answer. Try again.');
    }

    // Clear the input field
    answerInput.value = '';
    answerInput.focus();
}

// Rest of your existing code...

// Add an event listener to the submit button
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', checkAnswer);

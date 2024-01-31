const clues = [
    { clue: 'Be grateful', answer: 'Thank' },
    { clue: 'The man with the hottest body ever', answer: 'you' },
    { clue: '4', answer: 'for' },
    { clue: 'human-_____', answer: 'being' },
    { clue: 'you are?', answer: 'mine' },
    { clue: 'my beloved', answer: 'philtatos' },
    // Add more clues as needed
];

const images = [
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    // Add more image paths as needed
];

const clueElement = document.querySelector('.clue');
const imageElement = document.querySelector('.image');
const timerElement = document.querySelector('.timer');

let currentClueIndex = 0;

function showImage() {
    imageElement.src = images[currentClueIndex];
    imageElement.style.display = 'block';
}

function updateTimer() {
    const timerDuration = 24 * 60 * 60 * 1000;
    let startTime = Date.now();

    function calculateRemainingTime() {
        const remainingTime = timerDuration - (Date.now() - startTime);

        if (remainingTime < 0) {
            startTime = Date.now();
            return 0;
        }

        return remainingTime;
    }

    function formatTime(milliseconds) {
        const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function update() {
        const remainingTime = calculateRemainingTime();
        const formattedTime = formatTime(remainingTime);

        timerElement.textContent = formattedTime;

        if (remainingTime === 0) {
            clearInterval(timerInterval);
        }
    }

    update(); // Initial update

    const timerInterval = setInterval(update, 1000);
}

function checkAnswer() {
    const answerInput = document.querySelector('#answer');
    const answer = answerInput.value.trim().toLowerCase();
    const currentClue = clues[currentClueIndex];

    if (answer === currentClue.answer.toLowerCase()) {
        showImage();

        // Clear the input field
        answerInput.value = '';

        // Increment the clue index
        currentClueIndex++;

        if (currentClueIndex < clues.length) {
            // Show the next clue and start the timer
            clueElement.textContent = clues[currentClueIndex].clue;
            updateTimer();
        } else {
            alert('All clues revealed!');
        }

        // Reset the input field
        answerInput.focus();
    } else {
        alert('Incorrect answer. Try again.');
        answerInput.focus();
    }
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', checkAnswer);

// Initialize the first clue and start the timer
clueElement.textContent = clues[currentClueIndex].clue;
updateTimer();

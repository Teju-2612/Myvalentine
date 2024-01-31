const targetWords = ['Thank', 'you', 'for', 'being', 'mine', 'philtatos'];
const clues = ['Be grateful', 'The man with the hottest body ever', '4', 'human-_____', 'you are?', 'my beloved'];
// Sample clues and images
const clues = [
    { clue: 'Be grateful', answer: 'Thank' },
    { clue: 'The man with the hottest body ever', answer: 'you' },
    { clue: '4', answer: 'for' },
    { clue: 'human-_____', answer: 'being' },
    { clue: 'you are?', answer: 'mine' },
    { clue: 'my beloved', answer: 'philtatos' },
    // ...
];

const images = [
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    'loveletter1.png',
    // ...
];

// Set the initial clue and image
const clueElement = document.querySelector('.clue');
const imageElement = document.querySelector('.image');
clueElement.textContent = clues[0].clue;
imageElement.src = images[0];
imageElement.style.display = 'block';

// Function to show the image and start the timer
function showImage(index) {
    imageElement.src = images[index];
    imageElement.style.display = 'block';

    const timerDuration = 24 * 60 * 60 * 1000;
    let startTime = Date.now();
    const timerElement = document.querySelector('.timer');

    function updateTimer() {
        const remainingTime = timerDuration - (Date.now() - startTime);

        if (remainingTime < 0) {
            startTime = Date.now();
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

// Function to check the answer
function checkAnswer() {
    const answerInput = document.querySelector('#answer');
    const answer = answerInput.value.trim().toLowerCase();
    const clue = clues[0];

    if (answer === clue.answer) {
        showImage(0);

        // Clear the input field
        answerInput.value = '';

        // Remove the first clue from the array
        clues.shift();

        // Remove the first image from the array
        images.shift();

        // Update the clue and image
        clueElement.textContent = clues[0].clue;
        imageElement.src = images[0];

        // Reset the input field
        answerInput.focus();
    } else {
        alert('Incorrect answer. Try again.');
        answerInput.focus();
    }
}

// Add an event listener to the submit button
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', checkAnswer);

// Start the timer here

const questionData = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
    tags: "Geography",
    category: "Countries",
    hint: "It's also known as the City of Lights.",
    explanation: "Paris is the capital and most populous city of France.",
    difficulty: "Easy"
};

let timer = 300; // 5-minute timer
let isTimeUp = false;

const timerElement = document.getElementById('timer');
const questionPreviewElement = document.getElementById('question-preview');
const timeUpAlert = document.getElementById('time-up-alert');

document.getElementById('back-btn').onclick = () => {
    window.history.back();
};

document.getElementById('submit-btn').onclick = () => {
    alert('Submitted!');
};

// Function to format time
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// Function to render question and options
const renderQuestion = () => {
    questionPreviewElement.innerHTML = `
        <h3>${questionData.question}</h3>
        <ul>
            ${questionData.options.map((opt, index) => `
                <li>Option ${index + 1}: ${opt}</li>
            `).join('')}
        </ul>
        <p><strong>Correct Answer:</strong> ${questionData.correctAnswer}</p>
        <p><strong>Hint:</strong> ${questionData.hint}</p>
        <p><strong>Explanation:</strong> ${questionData.explanation}</p>
        <p><strong>Difficulty:</strong> ${questionData.difficulty}</p>
        <p><strong>Tags:</strong> ${questionData.tags}</p>
        <p><strong>Category:</strong> ${questionData.category}</p>
    `;
};

// Timer function
const startTimer = () => {
    const interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval);
            isTimeUp = true;
            timeUpAlert.style.display = 'block';
        } else {
            timer--;
            timerElement.innerText = formatTime(timer);
        }
    }, 1000);
};

// Initialize the page
renderQuestion();
startTimer();

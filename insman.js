function saveQuestion() {
    const question = document.getElementById('question').value;
    const correctAnswer = document.getElementById('correct-answer').value;
    const options = Array.from(document.querySelectorAll('.option-input')).map(input => input.value);
    const tags = document.getElementById('tags').value;
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const hint = document.getElementById('hint').value;
    const explanation = document.getElementById('explanation').value;
    
    if (!question || !correctAnswer || options.includes('')) {
        document.getElementById('error-message').innerText = 'All fields must be filled!';
        return;
    }

    console.log('Question saved!', {
        question, correctAnswer, options, tags, category, difficulty, hint, explanation
    });
    document.getElementById('error-message').innerText = '';
}

function previewQuestion() {
    const question = document.getElementById('question').value;
    const options = Array.from(document.querySelectorAll('.option-input')).map(input => input.value);
    const hint = document.getElementById('hint').value;
    const explanation = document.getElementById('explanation').value;

    const previewOutput = `
        <h3>${question}</h3>
        <ul>
            ${options.map((opt, index) => `<li>Option ${index + 1}: ${opt}</li>`).join('')}
        </ul>
        ${hint ? `<p><strong>Hint:</strong> ${hint}</p>` : ''}
        ${explanation ? `<p><strong>Explanation:</strong> ${explanation}</p>` : ''}
    `;
    
    document.getElementById('preview-output').innerHTML = previewOutput;
}

function bulkAddOptions() {
    // Implement bulk add functionality as needed
    alert('Bulk add options functionality to be implemented!');
}

function goBack() {
    window.history.back();
}

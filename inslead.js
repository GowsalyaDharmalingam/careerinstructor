const students = [
    { name: 'Student A', score: 95 },
    { name: 'Student B', score: 88 },
    { name: 'Student C', score: 92 },
];

let showNames = true;

// Initial render of the leaderboard
renderLeaderboard();

// Function to render the leaderboard
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = ''; // Clear existing rows

    const sortedStudents = students.sort((a, b) => b.score - a.score);
    
    sortedStudents.forEach((student, index) => {
        const tr = document.createElement('tr');
        if (index === 0) tr.classList.add('top-performer'); // Highlight top performer
        
        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;

        const nameCell = document.createElement('td');
        nameCell.textContent = showNames ? student.name : '';

        const scoreCell = document.createElement('td');
        scoreCell.textContent = student.score;

        tr.appendChild(rankCell);
        if (showNames) tr.appendChild(nameCell);
        tr.appendChild(scoreCell);
        tbody.appendChild(tr);
    });
}

// Function to filter leaderboard
function filterLeaderboard(threshold) {
    const filteredStudents = students.filter(s => s.score >= threshold);
    renderCustomLeaderboard(filteredStudents);
}

// Function to reset filters
function resetFilters() {
    renderLeaderboard();
}

// Function to export leaderboard
function exportLeaderboard() {
    const sortedStudents = students.sort((a, b) => b.score - a.score);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Rank,Name,Score\n"; // Header

    sortedStudents.forEach((student, index) => {
        const rank = index + 1;
        const name = showNames ? student.name : 'Hidden';
        const score = student.score;
        csvContent += `${rank},${name},${score}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'leaderboard.csv');
    document.body.appendChild(link); // Required for Firefox

    link.click(); // This will download the CSV file
    document.body.removeChild(link); // Clean up
}

// Function to customize appearance
let customSettings = {
    backgroundColor: '#fff',
    textColor: '#333',
    fontSize: '16px'
};

function customizeAppearance() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <h2>Customize Appearance</h2>
                <label>
                    Background Color:
                    <input type="color" id="bgColor" value="${customSettings.backgroundColor}">
                </label>
                <br>
                <label>
                    Text Color:
                    <input type="color" id="textColor" value="${customSettings.textColor}">
                </label>
                <br>
                <label>
                    Font Size:
                    <input type="number" id="fontSize" value="${parseInt(customSettings.fontSize)}" min="12" max="36"> px
                </label>
                <br>
                <button id="saveButton">Save</button>
                <button id="cancelButton">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Save button event
    document.getElementById('saveButton').onclick = () => {
        customSettings.backgroundColor = document.getElementById('bgColor').value;
        customSettings.textColor = document.getElementById('textColor').value;
        customSettings.fontSize = document.getElementById('fontSize').value + 'px';
        updateAppearance();
        document.body.removeChild(modal);
    };

    // Cancel button event
    document.getElementById('cancelButton').onclick = () => {
        document.body.removeChild(modal);
    };
}

function updateAppearance() {
    document.body.style.backgroundColor = customSettings.backgroundColor;
    document.body.style.color = customSettings.textColor;
    document.body.style.fontSize = customSettings.fontSize;
}


// Function to share leaderboard with students
function shareWithStudents() {
    const leaderboardData = students
        .map((student, index) => `${index + 1}. ${student.name || 'Hidden'} - Score: ${student.score}`)
        .join('\n');

    const shareText = `Check out the leaderboard:\n\n${leaderboardData}`;

    if (navigator.share) {
        navigator.share({
            title: 'Leaderboard',
            text: shareText,
            url: window.location.href // Share the current page URL
        })
        .then(() => {
            console.log('Share successful');
        })
        .catch((error) => {
            console.error('Error sharing:', error);
            alert('Failed to share the leaderboard. Please try copying the text manually.');
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Sharing not supported on this browser. Here’s the leaderboard data:\n\n' + shareText);
    }
}


// Function to toggle display of names
function toggleNames() {
    showNames = !showNames;
    document.getElementById('name-header').style.display = showNames ? '' : 'none';
    document.getElementById('eye-icon').classList.toggle('fa-eye', !showNames);
    document.getElementById('eye-icon').classList.toggle('fa-eye-slash', showNames);
    document.getElementById('eye-text').textContent = showNames ? 'Hide Names' : 'Show Names';
    renderLeaderboard();
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Function to render a custom leaderboard based on filtering
function renderCustomLeaderboard(filteredStudents) {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = ''; // Clear existing rows

    filteredStudents.forEach((student, index) => {
        const tr = document.createElement('tr');
        if (index === 0) tr.classList.add('top-performer');

        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;

        const nameCell = document.createElement('td');
        nameCell.textContent = showNames ? student.name : '';

        const scoreCell = document.createElement('td');
        scoreCell.textContent = student.score;

        tr.appendChild(rankCell);
        if (showNames) tr.appendChild(nameCell);
        tr.appendChild(scoreCell);
        tbody.appendChild(tr);
    });
}

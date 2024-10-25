const videoGridElement = document.getElementById('video-grid');
const alertsListElement = document.getElementById('alerts-list');

// Sample alerts
const alerts = [
    "Alert: Unusual behavior detected on Test-Taker 1",
    "Alert: Test-Taker 2 has paused the exam"
];

// Function to handle actions
function handleAction(action) {
    alert(`Action: ${action}`);
}

// Function to render video feeds
function renderVideoFeeds() {
    for (let i = 1; i <= 4; i++) {
        const videoFeed = document.createElement('div');
        videoFeed.className = 'video-feed';
        videoFeed.innerHTML = `
            <video controls autoplay></video>
            <p>Test-Taker ${i}</p>
        `;
        videoGridElement.appendChild(videoFeed);
    }
}

// Function to render alerts
function renderAlerts() {
    alerts.forEach(alert => {
        const alertItem = document.createElement('li');
        alertItem.textContent = alert;
        alertsListElement.appendChild(alertItem);
    });
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Initialize the dashboard
renderVideoFeeds();
renderAlerts();

document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});

function loadDashboard() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="alerts-reminders">
            <h2>Alerts & Reminders 🔔</h2>
            <div class="alert-item">New system update available</div>
            <div class="alert-item">Reminder: Prepare Questions for Technical Quiz</div>
        </section>
        <section class="overview">
            <h2>Performance Overview</h2>
            <div class="charts-container">
                <div class="chart-item">
                    <h3>Average Scores 📅</h3>
                    <canvas id="averageScoresChart"></canvas>
                </div>
                <div class="chart-item">
                    <h3>Activity Trend</h3>
                    <canvas id="activityTrendChart"></canvas>
                </div>
            </div>
            <div class="metrics">
                <div class="metric-card">Total Assessments: 12</div>
                <div class="metric-card">Completed Assessments: 9</div>
                <div class="metric-card">Upcoming Assessments: 2</div>
            </div>
        </section>
        <section class="quick-links">
            <h2>Quick Actions</h2>
            <a href="inscreassess.html" class="quick-link">Create New Assessment</a>
            <a href="insman.html" class="quick-link">Manage Question Bank</a>
            <a href="insmesg.html" class="quick-link">Message Students</a>
        </section>
    `;

    renderCharts();
}

function renderCharts() {
    const averageScoresCtx = document.getElementById('averageScoresChart').getContext('2d');
    const activityTrendCtx = document.getElementById('activityTrendChart').getContext('2d');

    const averageScoresChart = new Chart(averageScoresCtx, {
        type: 'pie',
        data: {
            labels: ['Math', 'Physics', 'Chemistry'],
            datasets: [{
                data: [85, 78, 92],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
        },
    });

    const activityTrendChart = new Chart(activityTrendCtx, {
        type: 'bar',
        data: {
            labels: ['Last Week', 'This Week'],
            datasets: [{
                label: 'New Assessments Created',
                data: [5, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
        },
    });
}

function loadSection(section) {
    // Logic to load other sections can be added here
    console.log(`Loading section: ${section}`);
}

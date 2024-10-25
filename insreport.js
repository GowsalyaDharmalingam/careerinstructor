// Sample data for demonstration
const mathScores = [
    { student: "Student 1", score: 78 },
    { student: "Student 2", score: 85 },
    { student: "Student 3", score: 92 },
    { student: "Student 4", score: 88 },
    { student: "Student 5", score: 75 },
];

const physicsScores = [
    { question: "Question 1", score: 80 },
    { question: "Question 2", score: 90 },
    { question: "Question 3", score: 70 },
];

// Function to render Math Chart
const renderMathChart = () => {
    const ctx = document.getElementById('mathChart').getContext('2d');
    const labels = mathScores.map(s => s.student);
    const scores = mathScores.map(s => s.score);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: 'rgba(82, 10, 137, 0.6)',
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

// Function to render Physics Chart
const renderPhysicsChart = () => {
    const ctx = document.getElementById('physicsChart').getContext('2d');
    const labels = physicsScores.map(q => q.question);
    const scores = physicsScores.map(q => q.score);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

// Function to populate the tables
const populateTables = () => {
    const mathTableBody = document.getElementById('math-table-body');
    const physicsTableBody = document.getElementById('physics-table-body');

    mathScores.forEach(score => {
        const row = `<tr><td>${score.student}</td><td>${score.score}</td></tr>`;
        mathTableBody.innerHTML += row;
    });

    physicsScores.forEach(score => {
        const row = `<tr><td>${score.question}</td><td>${score.score}</td></tr>`;
        physicsTableBody.innerHTML += row;
    });
};

// Functions for modal operations
const goBack = () => {
    window.history.back();
};

const closePreview = () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

// Event listeners for export buttons (basic alert for demonstration)
document.getElementById('export-pdf-button').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get assessment details
    const totalAssessments = document.getElementById('total-assessments').textContent;
    const averageScore = document.getElementById('average-score').textContent;
    const topPerformer = document.getElementById('top-performer').textContent;

    // Add details to the PDF
    doc.text("Assessment Summary", 10, 10);
    doc.text(`Total Assessments: ${totalAssessments}`, 10, 30);
    doc.text(`Average Score: ${averageScore}`, 10, 50);
    doc.text(`Top Performer: ${topPerformer}`, 10, 70);

    // Generate and download the PDF file
    doc.save("assessment-summary.pdf");
    alert('Exported as PDF!');
});

document.getElementById('export-excel-button').addEventListener('click', () => {
    // Get assessment details
    const totalAssessments = document.getElementById('total-assessments').textContent;
    const averageScore = document.getElementById('average-score').textContent;
    const topPerformer = document.getElementById('top-performer').textContent;

    // Data for Excel file
    const data = [
        ["Total Assessments", "Average Score", "Top Performer"],
        [totalAssessments, averageScore, topPerformer]
    ];

    // Create a new workbook
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Assessment Summary");

    // Generate and download the Excel file
    XLSX.writeFile(wb, "assessment-summary.xlsx");
    alert('Exported as Excel!');
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderMathChart();
    renderPhysicsChart();
    populateTables();
});

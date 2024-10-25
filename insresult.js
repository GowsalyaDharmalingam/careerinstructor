// Filter results based on the search input
function filterResults() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#resultTableBody tr");
    
    rows.forEach(row => {
        const username = row.cells[0].innerText.toLowerCase();
        row.style.display = username.includes(searchValue) ? "" : "none";
    });
}

// Sort the table by column
function sortTable(columnIndex) {
    const table = document.querySelector(".result-table");
    let switching = true;
    let shouldSwitch, i, x, y;
    let direction = "asc";  // Default to ascending
    let switchCount = 0;
    
    while (switching) {
        switching = false;
        const rows = table.rows;
        
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            
            if (direction === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (direction === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else if (switchCount === 0 && direction === "asc") {
            direction = "desc";
            switching = true;
        }
    }
}

// View result details
function viewDetails(button) {
    const row = button.closest('tr');
    const username = row.cells[0].innerText;
    const assessment = row.cells[1].innerText;
    const score = row.cells[2].innerText;
    const status = row.cells[3].innerText;
    const timeTaken = row.cells[4].innerText;

    alert(`Details:\nUsername: ${username}\nAssessment: ${assessment}\nScore: ${score}\nStatus: ${status}\nTime Taken: ${timeTaken}`);
}

// Delete result
function deleteResult(button) {
    const row = button.closest('tr');
    const username = row.cells[0].innerText;

    if (confirm(`Are you sure you want to delete the result for ${username}?`)) {
        row.remove();
        alert(`Result for ${username} has been deleted.`);
    }
}
function viewDetails(button) {
    // Get the row of the clicked button
    const row = button.closest('tr');

    // Extract details from the row
    const assessmentTitle = row.cells[0].innerText; // Adjust the index based on your table structure
    const totalParticipants = row.cells[1].innerText;
    const averageScore = row.cells[2].innerText;
    const proctoringIssues = row.cells[3].innerText;

    // Create the report details message
    const reportDetails = `
        Assessment Title: ${assessmentTitle}\n
        Total Participants: ${totalParticipants}\n
        Average Score: ${averageScore}\n
        Proctoring Issues: ${proctoringIssues}
    `;

    // Show the report details in an alert
    alert(reportDetails);
}

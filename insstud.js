document.addEventListener('DOMContentLoaded', function () {
    const studentData = [
      { name: 'Student A', score: 85 },
      { name: 'Student B', score: 92 },
      { name: 'Student C', score: 78 },
    ];
  
    // Populate the table with student data
    const tableBody = document.getElementById('table-body');
    renderTable(studentData);
  
    function renderTable(data) {
      tableBody.innerHTML = ''; // Clear existing rows
      data.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.score}</td>
          <td><button onclick="generateStudentReport(${index})">Download Report</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    // Generate chart
    window.generateChart = function () {
      const ctx = document.getElementById('performanceChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: studentData.map(s => s.name),
          datasets: [{
            label: 'Scores',
            data: studentData.map(s => s.score),
            backgroundColor: 'rgba(82, 10, 137, 0.6)',
          }],
        },
      });
    };
  
    // Filter data based on a score threshold
    window.filterData = function (threshold) {
      const filteredData = studentData.filter(s => s.score >= threshold);
      renderTable(filteredData);
    };
  
    // Sort data by score
    window.sortData = function (order) {
      const sortedData = [...studentData].sort((a, b) => order === 'asc' ? a.score - b.score : b.score - a.score);
      renderTable(sortedData);
    };
  
    // Generate individual student report using jsPDF
    window.generateStudentReport = function (index) {
      const student = studentData[index];
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text(`Student Report for ${student.name}`, 10, 10);
      doc.text(`Score: ${student.score}`, 10, 20);
      doc.save(`${student.name}_report.pdf`);
    };
  
    // Export overall report
    window.exportReport = function () {
      alert('Report exported.');
    };
  
    // Go back button functionality
    window.goBack = function () {
      window.history.back();
    };
  });
  
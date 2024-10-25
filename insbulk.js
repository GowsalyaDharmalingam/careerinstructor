document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      // Handle file load event
      reader.onload = function(e) {
        const content = e.target.result;
        const parsedData = parseCSV(content);
        populateTable(parsedData);
      };
  
      // Read the file as text
      reader.readAsText(file);
    } else {
      alert('Please select a CSV file.');
    }
  });
  
  // Function to parse CSV content
  function parseCSV(csv) {
    const lines = csv.split('\n');
    const result = [];
  
    // Split each line by commas
    for (let i = 1; i < lines.length; i++) { // Start from 1 to skip headers
      const row = lines[i].split(',');
  
      if (row.length === 6) { // Assuming CSV format: question, option1, option2, option3, option4, correct_answer
        result.push({
          question: row[0],
          option1: row[1],
          option2: row[2],
          option3: row[3],
          option4: row[4],
          correctAnswer: row[5]
        });
      }
    }
  
    return result;
  }
  
  // Function to populate the table
  function populateTable(questions) {
    const tableBody = document.querySelector('#questionsTable tbody');
    tableBody.innerHTML = ''; // Clear the table before adding new rows
  
    questions.forEach(question => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${question.question}</td>
        <td>${question.option1}</td>
        <td>${question.option2}</td>
        <td>${question.option3}</td>
        <td>${question.option4}</td>
        <td>${question.correctAnswer}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
document.addEventListener('DOMContentLoaded', () => {
    const addUserBtn = document.getElementById('add-user-btn');
    const uploadBtn = document.getElementById('upload-btn');
    const importBtn = document.getElementById('import-btn');
    const userPreviewTable = document.querySelector('#user-preview tbody');
    const fileInput = document.getElementById('file-upload');
    
    // Handle Manual User Addition
    addUserBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        if (name && email) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${role}</td>
            `;
            userPreviewTable.appendChild(newRow);

            // Clear input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
        } else {
            alert('Please enter both name and email.');
        }
    });

    // Handle Bulk Upload
    uploadBtn.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                // Assuming CSV format: "Name,Email,Role"
                const rows = data.split('\n');
                rows.forEach(row => {
                    const [name, email, role] = row.split(',');
                    if (name && email) {
                        const newRow = document.createElement('tr');
                        newRow.innerHTML = `
                            <td>${name}</td>
                            <td>${email}</td>
                            <td>${role ? role.trim() : 'student'}</td>
                        `;
                        userPreviewTable.appendChild(newRow);
                    }
                });
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a file.');
        }
    });

    // Handle Import Users
    importBtn.addEventListener('click', () => {
        const rows = userPreviewTable.querySelectorAll('tr');
        if (rows.length > 0) {
            alert(`${rows.length} users imported successfully!`);
            // Here, you'd typically send the data to the backend via API
        } else {
            alert('No users to import.');
        }
    });
});

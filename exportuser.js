document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filter-btn');
    const exportCsvBtn = document.getElementById('export-csv-btn');
    const exportExcelBtn = document.getElementById('export-excel-btn');
    const userListTable = document.querySelector('#user-list tbody');

    // Sample user data
    const users = [
        { name: "User name 1", email: "Username1@gmail.com", role: "student", status: "active" },
        { name: "User name 2", email: "Username2@gmail.com", role: "instructor", status: "inactive" },
        { name: "User name 3", email: "Username3@gmail.com", role: "admin", status: "active" }
    ];

    // Function to display users
    function displayUsers(filteredUsers) {
        userListTable.innerHTML = '';
        filteredUsers.forEach(user => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.status}</td>
            `;
            userListTable.appendChild(newRow);
        });
    }

    // Initial display of users
    displayUsers(users);

    // Filter users based on role and status
    filterBtn.addEventListener('click', () => {
        const roleFilter = document.getElementById('role-filter').value;
        const statusFilter = document.getElementById('status-filter').value;

        const filteredUsers = users.filter(user => {
            return (roleFilter === 'all' || user.role === roleFilter) &&
                   (statusFilter === 'all' || user.status === statusFilter);
        });

        displayUsers(filteredUsers);
    });

    // Export to CSV
    exportCsvBtn.addEventListener('click', () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + users.map(user => `${user.name},${user.email},${user.role},${user.status}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "users.csv");
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    });

    // Export to Excel (simple CSV-like format)
    exportExcelBtn.addEventListener('click', () => {
        const excelContent = "data:text/csv;charset=utf-8,"
            + users.map(user => `${user.name},${user.email},${user.role},${user.status}`).join("\n");

        const encodedUri = encodeURI(excelContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "users.xlsx");
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    });
});

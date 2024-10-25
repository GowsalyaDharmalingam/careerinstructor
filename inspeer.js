let groups = [];

function createGroup() {
    const groupName = prompt('Enter group name:');
    if (groupName) {
        groups.push({ name: groupName, members: [] });
        renderGroups();
    }
}

function assignStudents(group) {
    const studentName = prompt('Enter student name:');
    if (studentName) {
        const updatedGroups = groups.map(g => {
            if (g.name === group.name) {
                return { ...g, members: [...g.members, studentName] };
            }
            return g;
        });
        groups = updatedGroups;
        renderGroups();
    }
}

function setupCriteria() {
    const criteria = prompt('Enter peer assessment criteria:');
    if (criteria) {
        alert(`Peer assessment criteria set up: ${criteria}`);
    }
}

function collectReviews() {
    if (groups.length === 0) {
        alert('No groups available to collect reviews.');
        return;
    }

    const reviews = {};
    groups.forEach(group => {
        group.members.forEach(member => {
            const review = prompt(`Enter review for ${member} in group ${group.name}:`);
            if (review) {
                reviews[member] = reviews[member] || [];
                reviews[member].push(review);
            }
        });
    });

    alert('Peer reviews collected. Check the console for details.');
    console.log(reviews);
}

function analyzeFeedback() {
    alert('Peer feedback analyzed.');
}

function provideFeedback() {
    alert('Feedback provided to students.');
}

function exportData() {
    alert('Peer assessment data exported.');
}

function viewGroupPerformance(group) {
    alert(`Viewing performance for group ${group.name}`);
}

function editGroup(group) {
    const newName = prompt('Enter new group name:', group.name);
    if (newName) {
        groups = groups.map(g => g.name === group.name ? { ...g, name: newName } : g);
        renderGroups();
    }
}

function deleteGroup(group) {
    groups = groups.filter(g => g.name !== group.name);
    renderGroups();
}

function renderGroups() {
    const groupListElement = document.getElementById('groups-list');
    groupListElement.innerHTML = '';

    groups.forEach(group => {
        const groupItem = document.createElement('li');
        groupItem.innerHTML = `
            <i class="fas fa-users"></i> ${group.name}
            <button onclick="assignStudents(${JSON.stringify(group)})"><i class="fas fa-plus"></i> Add Student</button>
            <button onclick="viewGroupPerformance(${JSON.stringify(group)})"><i class="fas fa-chart-bar"></i> View Performance</button>
            <button onclick="editGroup(${JSON.stringify(group)})"><i class="fas fa-edit"></i> Edit</button>
            <button onclick="deleteGroup(${JSON.stringify(group)})"><i class="fas fa-trash"></i> Delete</button>
            <ul>
                ${group.members.map(member => `<li>${member}</li>`).join('')}
            </ul>
        `;
        groupListElement.appendChild(groupItem);
    });
}

function goBack() {
    window.history.back();
}

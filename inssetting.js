document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const saveProfileButton = document.getElementById('save-profile');
    const saveNotificationButton = document.getElementById('save-notification');
    const saveApiKeysButton = document.getElementById('save-api-keys');

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        const settingsPage = document.querySelector('.settings-page');
        settingsPage.classList.toggle('dark-mode');
        darkModeToggle.textContent = settingsPage.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Save Profile
    saveProfileButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const twoFactorEnabled = document.getElementById('two-factor').checked;

        console.log('Profile saved:', { name, email, password, twoFactorEnabled });
    });

    // Save Notification Preferences
    saveNotificationButton.addEventListener('click', () => {
        const notificationMethod = document.getElementById('notification-method').value;
        console.log('Notification preferences saved:', notificationMethod);
    });

    // Save API Keys
    saveApiKeysButton.addEventListener('click', () => {
        const apiKeys = Array.from(document.querySelectorAll('#api-keys-list li')).map(li => li.textContent);
        console.log('API keys saved:', apiKeys);
    });
});

// Back Button Functionality
function goBack() {
    window.history.back();
}

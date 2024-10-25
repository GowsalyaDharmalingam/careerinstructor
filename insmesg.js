document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageArea = document.getElementById('message-area');
    
    const message = messageInput.value.trim();

    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'educator');
        messageDiv.innerHTML = message;

        messageArea.appendChild(messageDiv);
        messageInput.value = '';
        messageArea.scrollTop = messageArea.scrollHeight;

        // Simulating student response after educator sends a message
        setTimeout(function() {
            const studentResponse = document.createElement('div');
            studentResponse.classList.add('message', 'student');
            studentResponse.innerHTML = "Student has received the message.";
            messageArea.appendChild(studentResponse);
            messageArea.scrollTop = messageArea.scrollHeight;
        }, 1000);
    }
});

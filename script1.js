document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.querySelector('.chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Function to add a new message to the chat box
    function addMessage(message, sender) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;

        if (sender === 'user') {
            newMessage.classList.add('user');
        }

        chatBox.appendChild(newMessage);
    }

    // Event listener for send button click
    sendBtn.addEventListener('click', function () {
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage(message, 'user');
            userInput.value = '';
            // Simulate a bot response (you can replace this with actual chatbot functionality)
            setTimeout(function () {
                addMessage("I'm sorry, I'm just a placeholder chatbot. How can I assist you?", 'bot');
            }, 1000);
        }
    });

    // Event listener for enter key press in input field
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
});

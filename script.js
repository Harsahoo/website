document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.75 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky navigation bar
    const navBar = document.querySelector('nav');
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            navBar.classList.add('sticky');
        } else {
            navBar.classList.remove('sticky');
        }
    });

    // Sphere movement based on mouse position
    const numberElement = document.querySelector('.number');

    document.addEventListener('mousemove', function(event) {
        const sphereCenterX = window.innerWidth / 2;
        const sphereCenterY = window.innerHeight / 2;
        const angleX = ((event.clientY - sphereCenterY) / sphereCenterY) * 45;
        const angleY = -((event.clientX - sphereCenterX) / sphereCenterX) * 45;

        numberElement.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    // Chat box functionality
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value.trim();

        if (userMessage !== '') {
            sendMessage(userMessage);
            handleUserInput(userMessage);
            userInput.value = ''; // Clear input field
        }
    });

    // Handle user input and generate bot responses
    function handleUserInput(message) {
        const botResponse = getBotResponse(message);
        sendMessage(botResponse, 'bot');
    }

    // Function to send message to chat box
    function sendMessage(message, sender = 'user') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<div class="${sender}-message">${message}</div>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom of chat box
    }

    // Function to get bot response
    function getBotResponse(message) {
        // Basic keyword matching for course-related queries
        if (message.toLowerCase().includes('course')) {
            return "Sure! Here are the available courses: [List of courses]";
        } else if (message.toLowerCase().includes('buy')) {
            return "To buy a course, please visit our website and follow the instructions.";
        } else if (message.toLowerCase().includes('payment')) {
            return "You can make payment using various methods such as credit card, PayPal, or bank transfer.";
        } else {
            return "I'm sorry, I couldn't understand your query. Please try again or contact support for assistance.";
        }
    }

    // Chat box display on hover
    const glowingSphere = document.getElementById('glowing-sphere');

    glowingSphere.addEventListener('mouseenter', function() {
        chatBox.style.display = 'block';
        sendMessage("How can I help you?", 'bot');
    });

    // Close chat box
    const closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', function() {
        chatBox.style.display = 'none';
    });
});

<div class="chat-container">
    <!-- Circular profile image -->
    <img src="profile_pic.jpg" alt="Profile Picture" class="profile-pic">
    <div class="chat-box">
        <!-- Chat messages go here -->
    </div>
    <input type="text" id="user-input" placeholder="Type your message...">
    <button id="send-btn">Send</button>
</div>
// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Use body-parser middleware to handle POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store chat messages in an array
let chatMessages = [];

// Route to get all chat messages
app.get('/chat', (req, res) => {
    res.json(chatMessages);
});

// Route to add a new chat message
app.post('/chat', (req, res) => {
    const message = req.body.message;
    chatMessages.push(message);
    res.json({ status: 'Message added successfully!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


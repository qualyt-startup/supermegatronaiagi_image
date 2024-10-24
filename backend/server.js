const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Whisper Search API!');
});

// User endpoints
app.get('/users', (req, res) => {
    // Logic to get users
    res.json({ message: 'Get all users' });
});

app.post('/users', (req, res) => {
    // Logic to create a new user
    res.json({ message: 'User created', user: req.body });
});

app.put('/users/:id', (req, res) => {
    // Logic to update a user by id
    res.json({ message: `User ${req.params.id} updated`, user: req.body });
});

app.delete('/users/:id', (req, res) => {
    // Logic to delete a user by id
    res.json({ message: `User ${req.params.id} deleted` });
});

// Add more endpoints as needed

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

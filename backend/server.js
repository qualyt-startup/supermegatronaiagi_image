const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Decentralized Ride Sharing API!');
});

// Example: Endpoint to create a new user (POST)
app.post('/api/users', (req, res) => {
    const newUser = req.body; // Assuming you send user data in the request body
    // Logic to save the user in the database
    res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

// Example: Endpoint to get all users (GET)
app.get('/api/users', (req, res) => {
    // Logic to retrieve users from the database
    const users = []; // Replace with actual user retrieval logic
    res.status(200).send(users);
});

// Example: Endpoint to update a user (PUT)
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body; // Data to update the user
    // Logic to update the user in the database
    res.send(`User with ID ${userId} updated: ${JSON.stringify(updatedUser)}`);
});

// Example: Endpoint to delete a user (DELETE)
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to delete the user from the database
    res.send(`User with ID ${userId} deleted.`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

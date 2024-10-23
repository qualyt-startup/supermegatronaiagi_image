const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081; // Changed port to 8081

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World from the backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

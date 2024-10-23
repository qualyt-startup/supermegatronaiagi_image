const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/searchdb';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Backend is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

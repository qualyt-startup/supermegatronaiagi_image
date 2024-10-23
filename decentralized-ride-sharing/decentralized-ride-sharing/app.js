const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Decentralized Ride-Sharing App is Running');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


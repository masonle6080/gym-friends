const express = require('express');
const app = express();

const usersRouter = require('./routes/users');

const PORT = 3000;

// Parse Json, so can use req.body
app.use(express.json());

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('Welcome to the Gym Progress Tracking API!');
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
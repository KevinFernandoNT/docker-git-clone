// Import required modules
const express = require('express');


// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory

// Set up middleware for JSON request and response handling
app.use(express.json());

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// A simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World! This is a deployable Node.js app.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
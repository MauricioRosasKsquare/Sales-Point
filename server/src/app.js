// Modules
const express = require('express');
const cors = require('cors')
const app = express();

const db = require('./db')

const PORT = process.env.PORT || 5000;

// Router
const routes = require('./routes/router');

// Middleware to parse body
app.use(cors(),express.json());

// Define routes
app.use(routes);
app.use((req, res) => {
  res.status(404).json({
    message: 'Welcome to my API try again',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`)
});
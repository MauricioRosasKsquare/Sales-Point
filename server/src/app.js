const express = require('express');
const cors = require('cors')
const db = require('./db')

const app = express();

const PORT = process.env.PORT || 5000;

const routes = require('./routes/router');

app.use(cors(),express.json());

app.use(routes);
app.use((req, res) => {
  res.status(404).json({
    message: 'Welcome to the API try again',
  });
});

app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`)
});
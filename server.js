// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// GET / – returns “Home Page”
app.get('/', (req, res) => {
  res.send('Home Page');
});

// GET /about – returns “About Page”
app.get('/about', (req, res) => {
  res.send('About Page');
});

// GET /users – returns an array of JSON users (Exact portal sample layout)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: "Anantha" },
    { id: 2, name: "Ravi" }
  ];
  res.json(users);
});

// Server initiation
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
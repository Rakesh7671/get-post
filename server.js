// server.js
// Node.js server handling GET and POST requests

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// GET request handler
app.get('/hello', (req, res) => {
    res.status(200).send('Hello GET Request!');
});

// POST request handler
app.post('/hello', (req, res) => {
    const { name } = req.body;
    if(!name) {
        res.status(400).send('Bad Request: Name is required');
    } else {
        res.status(201).send(`Hello ${name}, POST Request Successful!`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
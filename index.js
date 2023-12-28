// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Sending HTML content dynamically
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ritesh's Dog Adoption Page</title>
    </head>
    <body>
    
    <h1>Ritesh's Dog Adoption Page</h1>
    
    <ul>
        <!-- Golden Retriever -->
        <li>
            <a href="https://en.wikipedia.org/wiki/Golden_Retriever" target="_blank">
                <img src="img link for Golden Retriever" alt="Golden Retriever Image">
            </a>
        </li>
    
        <!-- Poodle -->
        <li>
            <a href="https://en.wikipedia.org/wiki/Poodle" target="_blank">
                <img src="img link for Poodle" alt="Poodle Image">
            </a>
        </li>
    </ul>
    
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.status(200).send(`${a + b}`);
});

module.exports = app;

// Create web server
// Run the server

const express = require('express');
const comments = require('./comments.json');

const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Run the server
// node comments.js

// Visit http://localhost:3000/comments in your browser to see the comments data

// You can use Postman to test the API
// https://www.postman.com/

// Install Postman
// https://www.postman.com/downloads/

// Open Postman
// Create a new request
// Set the request URL to http://localhost:3000/comments
// Send the request

// You should see the comments data in the response

// Comments data
// [
//     {
//         "id": 1,
//         "name": "John Doe",
//         "email": "
// Create web server to serve comments

const express = require('express');
const cors = require('cors');       
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment || !comment.text) {
        return res.status(400).json({ error: 'Comment text is required' });
    }
    comments.push(comment);
    res.status(201).json(comment);
}
);
// Start server
app.listen(port, () => {
    console.log(`Comments server running at http://localhost:${port}`);
});
// Export the app for testing
module.exports = app;
// Export the comments array for testing
module.exports.comments = comments;
// Export the server for testing
module.exports.server = app.listen(port, () => {
    console.log(`Comments server running at http://localhost:${port}`);
});
// Export the port for testing
module.exports.port = port;



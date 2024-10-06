const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the users.json file in the data folder
const dataFilePath = path.join(__dirname, '..', 'data', 'users.json');

// Handle login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Load existing users from users.json
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.render('loginfailed', { username });
        }

        const users = data ? JSON.parse(data) : [];

        // Find the user with matching username and password
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            res.render('loginfailed', { username });
        }

        // Successful login
        res.render('login', { username });
    });
});

module.exports = router;

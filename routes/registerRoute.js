const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the data file
const dataFilePath = path.join(__dirname, '..', 'data.json');

// Handle registration
router.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Password and confirmPassword validation
    if (password !== confirmPassword) {
        res.render('unsuccessfull');
    }

    // Load existing users from data.json
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.render('unsuccessfull', { username });
        }

        const users = data ? JSON.parse(data) : [];

        // Check if the user already exists
        const userExists = users.some(user => user.username === username || user.email === email);
        if (userExists) {
            res.render('unsuccessfull', { username });
        }

        // Prepare new user data
        const newUser = {
            username,
            email,
            password // Ideally, hash the password before saving
        };

        // Add new user to users array
        users.push(newUser);

        // Save updated users data back to data.json
        fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
            if (err) {
                res.render('unsuccessfull', { username });
            }
            res.render('register', { username });
        });
    });
});

module.exports = router;

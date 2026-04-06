const express = require('express');
const path = require('path');
const router = express.Router();
const config = require(path.join(__dirname, '/../config/config.json'));

router.get('/', (req, res) => {
    var content = '<p>This is the Reyette home page.</p>';
        content += '<p>Welcome to the Reyette Web Server! This is a simple Express.js application with EJS templating.</p>';
        content += '<p>You can customize this page with your own content, add more routes, and build your web app on top of this foundation.</p>';
    res.render('page', { title: 'Home', web_name: config.name, content: content });
});

router.get('/contact', (req, res) => {
    var content = '<p>This is the Reyette contact page.</p>';
    res.render('page', { title: 'Contact', web_name: config.name, content: content });
});

router.get('/about', (req, res) => {
    var content = '<p>This is the Reyette about page.</p>';
    res.render('page', { title: 'About', web_name: config.name, content: content });
});

module.exports = router;
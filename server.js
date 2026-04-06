const express = require('express');
const path = require('path');
const fs = require('fs');
const config = require(path.join(__dirname, '/config/config.json'));
const server = express();
const port = config.port;
const routesPath = path.join(__dirname, '/routes');

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.set('views', path.join(__dirname, '/views'));
server.set('view engine', 'ejs');
server.set('view cache', false);
server.set('json spaces', 2);
server.use(express.static(path.join(__dirname, '/public')));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

fs.readdirSync(routesPath).forEach((file) => {
    const route = require(path.join(routesPath, file));
    server.use(route);
});

server.use((req, res) => {
    res.status(404).render('404');
});
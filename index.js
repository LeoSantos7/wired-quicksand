const express = require('express');
const bodyParser = require('body-parser');
const animals = require('./routes/animals');

const server = express();
server.use('/animals', bodyParser.json(), animals);

const port = 3000;
const message = 'The server is listening at http://localhost:3000';

server.listen(port, () => {
    console.log(message);
});

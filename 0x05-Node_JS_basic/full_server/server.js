const router = require('./routes/index');

const express = require('express');

const app = express();
const port = 1245;

app.use('/', router);
app.listen(port);

module.exports = app;

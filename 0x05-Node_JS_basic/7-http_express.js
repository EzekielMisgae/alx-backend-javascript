/* eslint-disable */
const express = require('express');
const countStudents = require('./utils');

const app = express();
const path = process.argv[2];
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(path)
    .then((data) => res.send(`This is the list of our students\n${data}`))
    .catch(() => {
      res.write('This is the list of our students\n');
      res.write('Cannot load the database');
      res.end();
    });
});

app.listen(port);

module.exports = app;

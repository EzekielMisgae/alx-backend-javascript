/* eslint-disable */

const http = require('http');
const countStudents = require('./utils');

const port = 1245;
const path = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    countStudents(path)
      .then((data) => {
        res.write('This is the list of our students\n')
        data = data.map((item, idx) => {
          if (idx === 0) {
            res.write(item + '\n');
          } else {
            res.write(item + '\n')
          }
        })
        res.end();
      })
      .catch(() => {
        console.log();
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
        res.end();
      });
  }
});

app.listen(port);

module.exports = app;

const AppController = require('../controllers/AppController')

const StudentsController = require('../controllers/StudentsController')

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, process.argv[2]);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
});

module.exports = router;

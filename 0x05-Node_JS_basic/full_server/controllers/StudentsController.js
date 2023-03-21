const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        let message;
        const responseMsg = [];

        responseMsg.push('This is the list of our students');

        for (const [k, v] of Object.entries(fields)) {
          const firstName = v.slice(1).join(', ');
          message = `Number of students in ${k}: ${v[0]}. List: ${firstName}`;
          responseMsg.push(message);
        }
        response.send(200, `${responseMsg.join('\n')}\n`);
      })
      .catch((error) => {
        response.send(500, `${error.message}`);
      });
  }

  static getAllStudentsByMajor (request, response, DATABASE) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    }
    readDatabase(DATABASE)
      .then((field) => {
        
        response.send(200, `List: ${field[major].slice(1).join(', ')}`);
      })
      .catch((error) => { response.send(500, `${error.message}`); });
  }
}

module.exports = StudentsController;

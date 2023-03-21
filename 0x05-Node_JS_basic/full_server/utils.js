const fs = require('fs');

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error(error));
        return;
      }

      const content = data.toString().split('\n');
      const students = content.filter(Boolean).slice(1);

      const fields = {};
      for (const student of students) {
        const stData = student.split(',');

        const stFirstName = stData[0];
        const stField = stData[stData.length - 1];

        if (fields[stField]) {
          fields[stField][0] += 1;
          fields[stField].push(stFirstName);
        } else {
          fields[stField] = [1, stFirstName];
        }
      }
      resolve(fields);
    });
  });
}

module.exports = readDatabase;

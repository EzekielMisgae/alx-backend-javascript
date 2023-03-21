const fs = require('fs');

function countStudents(path) {
  let content;
  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = content.split(/\r?\n/).filter(Boolean).slice(1);
  console.log(`Number of students: ${students.length}`);

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
  for (const [k, v] of Object.entries(fields)) {
    const firstName = v.slice(1).join(', ');
    console.log(`Number of students in ${k}: ${v[0]}. List: ${firstName}`);
  }
}

module.exports = countStudents;

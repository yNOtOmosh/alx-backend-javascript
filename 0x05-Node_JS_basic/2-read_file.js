const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = [];
    for (let i = 1; i < lines.length - 1; i += 1) {
      const student = lines[i].split(',');
      students.push(student[0]);
    }
    const fields = {};
    students.forEach((student) => {
      const field = student.split(' ')[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.split(' ')[0]);
    });
    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

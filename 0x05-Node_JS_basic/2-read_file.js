const fs = require('fs');

const countStudents = (path) => {
    try {
        const fileContent = fs.readFileSync(path, 'utf-8').trim();
        if (!fileContent) throw new Error('Cannot load the database');
        
        const lines = fileContent.split('\n').filter((line) => line);
        const headers = lines[0].split(',');

        if (headers.length === 0) throw new Error('Cannot load the database');

        const students = lines.slice(1);
        const studentGroups = {};

        students.forEach((studentLine) => {
            const student = studentLine.split(',');
            const field = student[student.length - 1];
            const firstName = student[0];

            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }

            studentGroups[field].push(firstName);
        });

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, names] of Object.entries(studentGroups)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
 }

const student1: Student = {
  firstName: 'Anto',
  lastName: 'Ton',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Halie',
  lastName: 'Berry',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
    
  studentsList.forEach(student => {
    const tr = document.createElement('tr');
    const tdFirstName = document.createElement('td');
    const tdLocation = document.createElement('td');
    
    tdFirstName.textContent = student.firstName;
    tdLocation.textContent = student.location;
    
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLocation);
    
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();

const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree: 'Arts',
      email: 'charlie@example.com'
    }
  ];
  
  const studentTable = document.getElementById('studentTable');
  const searchInput = document.getElementById('searchInput');
  
  // Function to display students in the table
  function displayStudents() {
    studentTable.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
        <th>Degree</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      ${students.map(student => `
        <tr>
          <td>${student.ID}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.grade}</td>
          <td>${student.degree}</td>
          <td>${student.email}</td>
          <td><button class="edit-btn" onclick="editStudent(${student.ID})">Edit</button></td>
          <td><button class="delete-btn" onclick="deleteStudent(${student.ID})">Delete</button></td>
        </tr>
      `).join('')}
    `;
  }
  
  // Call the displayStudents function to render initial data
  displayStudents();
  
  // Function to add a new student
  function addStudent() {
    // Get input values from the form
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const grade = document.getElementById('grade').value;
    const degree = document.getElementById('degree').value;
    const email = document.getElementById('email').value;
  
    // Create a new student object
    const newStudent = {
      ID: students.length + 1,
      name,
      age,
      grade,
      degree,
      email
    };
  
    // Add the new student to the students array
    students.push(newStudent);
  
    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('degree').value = '';
    document.getElementById('email').value = '';
  
    // Refresh the student table
    displayStudents();
  }
  
  // Function to edit a student
  function editStudent(studentID) {
    const student = students.find(student => student.ID === studentID);
    if (student) {
      document.getElementById('name').value = student.name;
      document.getElementById('age').value = student.age;
      document.getElementById('grade').value = student.grade;
      document.getElementById('degree').value = student.degree;
      document.getElementById('email').value = student.email;
  
      const addStudentBtn = document.getElementById('addStudentBtn');
      addStudentBtn.innerHTML = 'Edit Student';
  
      // Update student object on button click
      addStudentBtn.onclick = function() {
        student.name = document.getElementById('name').value;
        student.age = parseInt(document.getElementById('age').value);
        student.grade = document.getElementById('grade').value;
        student.degree = document.getElementById('degree').value;
        student.email = document.getElementById('email').value;
  
        // Clear form inputs and reset button text
        clearForm();
        addStudentBtn.innerHTML = 'Add Student';
  
        // Refresh the student table
        displayStudents();
      };
    }
  }
  
  // Function to delete a student
  function deleteStudent(studentID) {
    const studentIndex = students.findIndex(student => student.ID === studentID);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
      displayStudents();
    }
  }
  
  // Function to clear form inputs
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('degree').value = '';
    document.getElementById('email').value = '';
  }
  
  // Event listener for search input
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm) ||
      student.degree.toLowerCase().includes(searchTerm)
    );
    displayFilteredStudents(filteredStudents);
  });
  
  // Function to display filtered students
  function displayFilteredStudents(filteredStudents) {
    studentTable.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
        <th>Degree</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      ${filteredStudents.map(student => `
        <tr>
          <td>${student.ID}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.grade}</td>
          <td>${student.degree}</td>
          <td>${student.email}</td>
          <td><button class="edit-btn" onclick="editStudent(${student.ID})">Edit</button></td>
          <td><button class="delete-btn" onclick="deleteStudent(${student.ID})">Delete</button></td>
        </tr>
      `).join('')}
    `;
  }
  
// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create array of students
const studentsList: Array<Student> = [student1, student2];

// Function to render table
function renderTable(students: Array<Student>): void {
    // Create table element
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Create and append rows for each student
    students.forEach((student) => {
        const row = document.createElement('tr');
        
        // Create cells for firstName and location
        const nameCell = document.createElement('td');
        const locationCell = document.createElement('td');
        
        // Add text content to cells
        nameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        
        // Append cells to row
        row.appendChild(nameCell);
        row.appendChild(locationCell);
        
        // Append row to table body
        tableBody.appendChild(row);
    });

    // Append table body to table
    table.appendChild(tableBody);
    
    // Append table to document body
    document.body.appendChild(table);
}

// Render the table when the document loads
document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentsList);
});
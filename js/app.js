document.addEventListener("DOMContentLoaded", function () {
    const addSubjectBtn = document.getElementById("addSubject");
    const subjectCodeInput = document.getElementById("subjectCode");
    const subjectNameInput = document.getElementById("subjectName");
    const unitsInput = document.getElementById("units");
    const tableContent = document.getElementById("table-content");

    addSubjectBtn.addEventListener("click", function () {
        const subjectCode = subjectCodeInput.value.trim();
        const subjectName = subjectNameInput.value.trim();
        const units = unitsInput.value.trim();

        // Basic validation
        if (!subjectCode || !subjectName || !units) {
            alert("Please fill in all fields.");
            return;
        }

        // Create new row
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${subjectCode}</td>
            <td>${subjectName}</td>
            <td>${units}</td>
        `;

        tableContent.appendChild(newRow);

        // Clear inputs
        subjectCodeInput.value = "";
        subjectNameInput.value = "";
        unitsInput.value = "";
    });
});

// app.js

document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("addStudentButton");
    const tableContent = document.getElementById("table-content");

    addStudentButton.addEventListener("click", () => {
        // Get input values
        const idNumber = document.getElementById("idNumber").value.trim();
        const firstName = document.getElementById("firstName").value.trim();
        const middleName = document.getElementById("middleName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        // Basic validation
        if (!idNumber || !firstName || !lastName) {
            alert("Please fill in ID Number, Firstname, and Lastname.");
            return;
        }

        // Create new table row
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${idNumber}</td>
            <td>${firstName}</td>
            <td>${middleName}</td>
            <td>${lastName}</td>
        `;

        // Append row to table
        tableContent.appendChild(newRow);

        // Clear form fields
        document.getElementById("studentForm").reset();
    });
});

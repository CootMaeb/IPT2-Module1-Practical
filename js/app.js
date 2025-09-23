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

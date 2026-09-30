// ==========================================
// QUESTION 1: Link Alert
// ==========================================
function showAlert() {
    alert("Hello! You clicked the link.");
}

// ==========================================
// QUESTION 2: Mobile Phone Lookup
// ==========================================
function buyPhone(phoneName) {
    alert("Thanks for purchasing " + phoneName + " from us");
}

// ==========================================
// QUESTION 3: Delete Student Table Row
// ==========================================
function deleteTableRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    var tableBody = document.querySelector("#deleteStudentTable tbody");
    for (var i = 0; i < tableBody.rows.length; i++) {
        tableBody.rows[i].cells[0].innerText = i;
    }
}

// ==========================================
// QUESTION 4: Mouseover & Mouseout Image Change
// ==========================================
function changeImage(newSrc) {
    document.getElementById("hoverImage").src = newSrc;
}

// ==========================================
// QUESTION 5: Counter Functionality
// ==========================================
var counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById("counterValue").innerText = counter;
}

function decreaseCounter() {
    counter--;
    document.getElementById("counterValue").innerText = counter;
}

// ==========================================
// QUESTION 6: Signup Form Data Display
// ==========================================
function handleSignup(e) {
    e.preventDefault();

    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    var displayArea = document.getElementById("formDataDisplay");
    displayArea.innerHTML = "<h4>Submitted Form Details:</h4>" +
                            "<p><strong>Name:</strong> " + name + "</p>" +
                            "<p><strong>Email:</strong> " + email + "</p>";

    document.getElementById("signupForm").reset();
}

// ==========================================
// QUESTION 7: Read More / Read Less Toggle
// ==========================================
function toggleDetails() {
    var detailsSpan = document.getElementById("moreDetails");
    var btn = document.getElementById("toggleBtn");

    if (detailsSpan.style.display === "none" || detailsSpan.style.display === "") {
        detailsSpan.style.display = "inline";
        btn.innerText = "Read less";
    } else {
        detailsSpan.style.display = "none";
        btn.innerText = "Read more";
    }
}

// ==========================================
// QUESTION 8: Student Management System (Edit & Delete)
// ==========================================
function addStudent(e) {
    e.preventDefault();

    var name = document.getElementById("stdName").value;
    var stdClass = document.getElementById("stdClass").value;
    var age = document.getElementById("stdAge").value;

    var tableBody = document.querySelector("#editableStudentTable tbody");
    var row = tableBody.insertRow();

    row.insertCell(0).innerText = tableBody.rows.length - 1;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = stdClass;
    row.insertCell(3).innerText = age;

    row.insertCell(4).innerHTML = '<button onclick="editRow(this)">Edit</button>' +
                                 '<button onclick="deleteEditableRow(this)">Delete</button>';

    document.getElementById("addStudentForm").reset();
    reIndexEditableTable();
}

function deleteEditableRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    reIndexEditableTable();
    cancelEdit();
}

function reIndexEditableTable() {
    var rows = document.querySelectorAll("#editableStudentTable tbody tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerText = i;
    }
}

function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var rowIndex = row.rowIndex - 1; // Subtract 1 for header row

    document.getElementById("editRowIndex").value = rowIndex;
    document.getElementById("editName").value = row.cells[1].innerText;
    document.getElementById("editClass").value = row.cells[2].innerText;
    document.getElementById("editAge").value = row.cells[3].innerText;

    document.getElementById("editFormContainer").style.display = "block";
}

function updateStudent(e) {
    e.preventDefault();

    var rowIndex = document.getElementById("editRowIndex").value;
    var row = document.querySelectorAll("#editableStudentTable tbody tr")[rowIndex];

    row.cells[1].innerText = document.getElementById("editName").value;
    row.cells[2].innerText = document.getElementById("editClass").value;
    row.cells[3].innerText = document.getElementById("editAge").value;

    cancelEdit();
}

function cancelEdit() {
    document.getElementById("editFormContainer").style.display = "none";
}
// QUESTION 4: Image Change
function changeImage(newSrc) {
    document.getElementById("hoverImage").src = newSrc;
}

// QUESTION 5: Counter (Jo 0 se neeche minus mein nahi jayega)
var counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById("counterValue").innerText = counter;
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
        document.getElementById("counterValue").innerText = counter;
    }
}
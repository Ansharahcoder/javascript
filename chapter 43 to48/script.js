// ==========================================
// Question 1: Show alert on link click[cite: 1]
// ==========================================
document.getElementById("alertLink").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Aapne link par click kiya hai!");
});

// ==========================================
// Question 2: Alert message on mobile image click[cite: 1]
// ==========================================
function showMobileAlert() {
  alert("Thanks for purchasing a phone from us");
}

// ==========================================
// Question 3: Student Table with Delete Option[cite: 2, 3]
// ==========================================
const students = [
  { name: "Jhone", class: 10 },
  { name: "Doe", class: 9 },
  { name: "Mark", class: 10 },
  { name: "James", class: 8 },
  { name: "Ali", class: 7 },
  { name: "Sara", class: 9 },
  { name: "Usman", class: 10 },
  { name: "Zainab", class: 8 },
  { name: "Bilal", class: 9 },
  { name: "Ayesha", class: 10 }
];

function renderTable() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td><button onclick="deleteRow(${index})">Delete</button></td>
    `;

    tbody.appendChild(row);
  });
}

function deleteRow(index) {
  students.splice(index, 1);
  renderTable();
}

// Initial Table Render
renderTable();

// ==========================================
// Question 4: Mouseover & Mouseout Image Change[cite: 3]
// ==========================================
const hoverImg = document.getElementById("hoverImage");
const originalSrc = "./images/BMW.jpg";
const hoverSrc = "./images/bike.webp";

hoverImg.addEventListener("mouseover", function() {
  hoverImg.src = hoverSrc;
});

hoverImg.addEventListener("mouseout", function() {
  hoverImg.src = originalSrc;
});

// ==========================================
// Question 5: Counter Increase/Decrease[cite: 3]
// ==========================================
let count = 0;
const counterDisplay = document.getElementById("counterValue");

function increaseCounter() {
  count++;
  counterDisplay.innerText = count;
}

function decreaseCounter() {
  if (count > 0) {
    count--;
    counterDisplay.innerText = count;
  }
}

const nameInput = document.getElementById('nameInput');
const form = document.getElementById('nameForm');
const message = document.getElementById('message');

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission reload

    const nameValue = nameInput.value.trim();

    if (nameValue === '') {
        message.textContent = "Please enter your name.";
        message.style.color = 'red';
    } else if (!isValidName(nameValue)) {
        message.textContent = "Invalid input! Please use letters and spaces only.";
        message.style.color = 'red';
    } else {
        message.textContent = `Hello, ${nameValue}!`;
        }
});





let count = 0;


function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
}


function showAlert() {
    alert("This is an alert message!");
}

function incrementCounter() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrementCounter() {
    count--;
    document.getElementById("counter").innerText = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("counter").innerText = count;
    document.getElementById("additionalParagraphs").innerHTML = "";
}

function addParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Congratulations  on learning Practical Javascript.";
    document.getElementById("additionalParagraphs").appendChild(paragraph);
}

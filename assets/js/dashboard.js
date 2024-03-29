const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
const helloUser = document.querySelector(".faculty-name");
const users = JSON.parse(localStorage.getItem("users")) || [];
const currentFacultyTable = JSON.parse(localStorage.getItem("currentFacultyTable")) || [];


if (currentUser.length == 0) {
    location.replace("./index.html");
}

const container = document.querySelector(".dashboard-inner-section");
var contains = "";

helloUser.innerHTML = (currentUser.currentUserName).split(' ')[0];


for (let i = 0; i < currentUser.currentTables.length; i++) {
    contains += `
        <div class="col-lg-3 black mx-1" data-key="${i}">
            <i class="far fa-check-circle"></i>
            <br>
            <p class="pt-3 black-para" data-key="${i}">Department / Class: <span>${currentUser.currentTables[i].department}</span></p>
            <p class="black-para" data-key="${i}">Section: <span>${currentUser.currentTables[i].section}</span></p>
        </div>
    `
}

container.innerHTML = contains;

container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("black") && !e.target.classList.contains("black-para")) return;
    localStorage.setItem("currentFacultyTable", e.target.dataset.key);
    location.href = './timeTableViewer.html';
})
import createTextElement from "./functions.js";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createNavBar() {
  const navbar = document.createElement("ul");
  navbar.classList.add("navbar")

  navbar.appendChild(createTextElement("h1", "JOE'S PIZZERIA"))
  navbar.appendChild(createTextElement("li", "Contact")).classList.add("navbar-link")
  navbar.appendChild(createTextElement("li", "Menu")).classList.add("navbar-link")
  navbar.appendChild(createTextElement("li", "Home")).classList.add("navbar-link")
  return navbar
}

function loadNavBar() {
  const content = document.getElementById("content")
  content.appendChild(createNavBar());
}

loadNavBar()
loadHome()
loadMenu()
loadContact()

const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const contact = document.querySelector(".contact")

const navbarLink = document.querySelectorAll(".navbar-link")

// when a link is clicked, change all the css style display to display: none
function resetDisplay() {
  home.style.display = "none"
  menu.style.display = "none"
  contact.style.display = "none"
}

// then the target link clicked will have the css style display to display: block
function displayPage(element) {
  console.log(element)
  if (element.innerHTML === "Home") {
    home.style.display = "block";
  } else if (element.innerHTML === "Contact") {
    contact.style.display = "block";
  } else {
    menu.style.display = "block";
  }
}
navbarLink.forEach((event) => {
  event.addEventListener("click", (element) => {
    const i = element.target
    console.log(i)
    resetDisplay();
    displayPage(i);
  })
})
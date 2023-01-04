import createTextElement from "./functions.js";

function createNavBar() {
  const navbar = document.createElement("ul");
  navbar.classList.add("navbar")

  navbar.appendChild(createTextElement("h1", "JOE'S PIZZERIA"))
  navbar.appendChild(createTextElement("li", "Contact"))
  navbar.appendChild(createTextElement("li", "Menu"))
  navbar.appendChild(createTextElement("li", "Home"))
  return navbar
}

function loadNavBar() {
  const content = document.getElementById("content")
  content.appendChild(createNavBar());
}

export default loadNavBar;
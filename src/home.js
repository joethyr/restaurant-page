import createTextElement from "./functions.js";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createTextElement("h2", "ITS THE ONLY PIZZERIA YOU CAN TRUST!<br>FREE TOPPINGS!"))
  home.appendChild(createTextElement("button", "ORDER NOW"))
  home.appendChild(createTextElement("p", "Let me tell you just how great Joe's Pizzeria is in great lorem ipsum detail. Lorem ipsum, porro sunt riendis iusto quibusdam quisquam assumenda qui provident ducimus quos maiores inventore tempora corporis aut animi fugit, quis atque?", "home-description"))
  return home
}

function loadHome() {
  const content = document.getElementById("content")
  content.appendChild(createHome());
}

export default loadHome;
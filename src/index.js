const content = document.getElementById('content')
const home = document.createElement("div");
const navbar = document.createElement("ul");

home.classList.add('home')
content.appendChild(home)


function addDomElement(element, text) {
  let i = document.createElement(element)
  i.innerHTML = text;
  home.appendChild(i)
}

addDomElement("h2", "ITS THE ONLY PIZZERIA YOU CAN TRUST!<br>FREE TOPPINGS!")
addDomElement("button", "ORDER NOW")
addDomElement("p", "Let me tell you just how great Joe's Pizzeria is in great lorem ipsum detail. Lorem ipsum, porro sunt riendis iusto quibusdam quisquam assumenda qui provident ducimus quos maiores inventore tempora corporis aut animi fugit, quis atque?", "home-description")

const content = document.getElementById('content')
const home = document.createElement("div");
home.classList.add('home')
content.appendChild(home)

const headerOne = document.createElement('h1')
headerOne.innerHTML = "JOE'S PIZZERIA";
home.appendChild(headerOne)

const headerTwo = document.createElement('h2')
headerTwo.innerHTML = "ITS THE ONLY PIZZERIA YOU CAN TRUST!<br>FREE TOPPINGS!";
home.appendChild(headerTwo)

const homeButton = document.createElement('button')
homeButton.innerHTML = "Order Now";
home.appendChild(homeButton)

const homeDescription = document.createElement('p')
homeDescription.classList.add('home-description')
homeDescription.innerHTML = "Let me tell you just how great Joe's Pizzeria is in great lorem ipsum detail. Lorem ipsum, porro sunt riendis iusto quibusdam quisquam assumenda qui provident ducimus quos maiores inventore tempora corporis aut animi fugit, quis atque?"
home.appendChild(homeDescription)


(()=>{"use strict";const n=function(n,e){const i=document.createElement(n);return i.innerHTML=e,i};document.getElementById("content").appendChild(function(){const e=document.createElement("ul");return e.classList.add("navbar"),e.appendChild(n("h1","JOE'S PIZZERIA")),e.appendChild(n("li","Contact")).classList.add("navbar-link"),e.appendChild(n("li","Menu")).classList.add("navbar-link"),e.appendChild(n("li","Home")).classList.add("navbar-link"),e}()),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),e.appendChild(n("h2","ITS THE ONLY PIZZERIA YOU CAN TRUST!<br>FREE TOPPINGS!")),e.appendChild(n("button","ORDER NOW")),e.appendChild(n("p","Let me tell you just how great Joe's Pizzeria is in great lorem ipsum detail. Lorem ipsum, porro sunt riendis iusto quibusdam quisquam assumenda qui provident ducimus quos maiores inventore tempora corporis aut animi fugit, quis atque?")),e}()),document.getElementById("content").appendChild(function(){const n=document.createElement("div");return n.classList.add("menu"),n.innerHTML='<h2>MENU</h2>\n  </div>\n  <div class="menu-columns">\n  <div class="column">\n    <h3>FOOD</h3>\n    <div>\n      <span>$2.50</span>\n      <span>Cheese Pizza</span>\n      <p>Vivamus rhoncus luctus tellus ac aliquam. Nulla facilisi, consectetur adipisicing elit.</p>\n    </div>\n    <div>\n      <span>$3.99</span>\n      <span>Pepperoni Pizza</span>\n      <p>Gundam parafetti dolor sit amet consectetur adipisicing elit.</p>\n    </div>\n    <div>\n      <span>$6.99</span>\n      <span>Hamburger & Fries</span>\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, iste ex!</p>\n    </div>\n    <div>\n      <span>$3.50</span>\n      <span>Big Hotdog</span>\n      <p>Color sima moani sit amet consectetur.</p>\n    </div>\n    <div>\n      <span>$9.99</span>\n      <span>Salad</span>\n      <p>Sit amet consectetur adipisicing elit. Perspiciatis maxime ipsam sed numquam.</p>\n    </div>\n  </div>\n  <div class="column">\n    <h3>SNACKS</h3>\n    <div>\n      <span>$0.99</span>\n      <span>Cookie</span>\n      <p>consectetur adipisicing elit. Perspiciatis maxime ipsam sed numquam.</p>\n    </div>\n    <div>\n      <span>$5.50</span>\n      <span>Cake</span>\n      <p>corper porta. Vivamus nec consectetur enim. Etiam blandit, nis.</p>\n    </div>\n    <div>\n      <span>$2.99</span>\n      <span>Ppocorn</span>\n      <p>Orem lobortis, et tempor purus pellentesque. Sed cursus risus et nibh condimentum cursus.</p>\n    </div>\n  </div>\n  <div class="column">\n    <h3>DRINK</h3>\n    <div>\n      <span>$3.99</span>\n      <span>Soda</span>\n      <p>Set tempor purus pellentesque. Sed cursus risus et nibh.</p>\n    </div>\n  </div>',n}()),document.getElementById("content").appendChild(function(){const n=document.createElement("div");return n.classList.add("contact"),n.innerHTML='<div class="contact-title">CONTACT</div>\n  <div class="contact-container">\n    <div class="contact-info">\n      <P>STORE PHONE: 920-123-1121</P>\n      <p>STORE EMAIL: JOESPIZZIA@PIZZA.COM</p>\n      <P>BUSSINESS INQUIRIES: JOEBIZ@PIZZA.COM</P>\n      <p>you can find us below!</p>\n    </div>\n    <img class= "contact-map" src="https://s.hdnux.com/photos/01/22/35/43/21616848/3/1200x0.jpg" alt="fake store location map">\n  </div>',n}());const e=document.querySelector(".home"),i=document.querySelector(".menu"),s=document.querySelector(".contact");document.querySelectorAll(".navbar-link").forEach((n=>{n.addEventListener("click",(n=>{const t=n.target;console.log(t),e.style.display="none",i.style.display="none",s.style.display="none",function(n){console.log(n),"Home"===n.innerHTML?e.style.display="block":"Contact"===n.innerHTML?s.style.display="block":i.style.display="block"}(t)}))}))})();
function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.innerHTML =
    `<h2>MENU</h2>
  </div>
  <div class="menu-columns">
  <div class="column">
    <h3>FOOD</h3>
    <div>
      <span>$2.50</span>
      <span>Cheese Pizza</span>
      <p>Vivamus rhoncus luctus tellus ac aliquam. Nulla facilisi, consectetur adipisicing elit.</p>
    </div>
    <div>
      <span>$3.99</span>
      <span>Pepperoni Pizza</span>
      <p>Gundam parafetti dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div>
      <span>$6.99</span>
      <span>Hamburger & Fries</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, iste ex!</p>
    </div>
    <div>
      <span>$3.50</span>
      <span>Big Hotdog</span>
      <p>Color sima moani sit amet consectetur.</p>
    </div>
    <div>
      <span>$9.99</span>
      <span>Salad</span>
      <p>Sit amet consectetur adipisicing elit. Perspiciatis maxime ipsam sed numquam.</p>
    </div>
  </div>
  <div class="column">
    <h3>SNACKS</h3>
    <div>
      <span>$0.99</span>
      <span>Cookie</span>
      <p>consectetur adipisicing elit. Perspiciatis maxime ipsam sed numquam.</p>
    </div>
    <div>
      <span>$5.50</span>
      <span>Cake</span>
      <p>corper porta. Vivamus nec consectetur enim. Etiam blandit, nis.</p>
    </div>
    <div>
      <span>$2.99</span>
      <span>Ppocorn</span>
      <p>Orem lobortis, et tempor purus pellentesque. Sed cursus risus et nibh condimentum cursus.</p>
    </div>
  </div>
  <div class="column">
    <h3>DRINK</h3>
    <div>
      <span>$3.99</span>
      <span>Soda</span>
      <p>Set tempor purus pellentesque. Sed cursus risus et nibh.</p>
    </div>
  </div>`;

  return menu
}

function loadMenu() {
  const content = document.getElementById("content")
  content.appendChild(createMenu());
}

export default loadMenu;
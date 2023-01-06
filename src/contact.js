function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.innerHTML = `    <div class="contact">
  <div class="contact-title">CONTACT</div>
  <div class="contact-container">
    <div class="contact-info">
      <P>STORE PHONE: 920-123-1121</P>
      <p>STORE EMAIL: JOESPIZZIA@PIZZA.COM</p>
      <P>BUSSINESS INQUIRIES: JOEBIZ@PIZZA.COM</P>
      <p>you can find us below!</p>
    </div>
    <img class= "contact-map" src="https://s.hdnux.com/photos/01/22/35/43/21616848/3/1200x0.jpg" alt="fake store location map">
  </div>
</div>`;

  return contact
}

function loadContact() {
  const content = document.getElementById("content")
  content.appendChild(createContact());
}

export default loadContact;
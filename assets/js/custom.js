function contact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let contact = `${name}, ${email}, ${message}`;

  // alert(contact);

  let url = `https://wa.me/919526300154?text=${contact}`;
  window.open(url);
}

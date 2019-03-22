const form = document.querySelector("form");
const honeypot = form.querySelector(".extra");

// check if honeypot input field has a value, and if so prevent form submission

form.addEventListener("submit", function(e) {
  if (honeypot.value !== "") {
    e.preventDefault();
  }
});

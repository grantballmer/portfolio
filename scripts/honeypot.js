const form = document.querySelector("form");
const honeypot = form.querySelector(".extra");

form.addEventListener("submit", function(e) {
  if (honeypot.value !== "") {
    e.preventDefault();
  }
});

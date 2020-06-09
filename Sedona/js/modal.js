var link = document.querySelector(".button-booking");
var popup = document.querySelector(".modal-booking");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
})

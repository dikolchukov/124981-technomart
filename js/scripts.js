var link = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var close = document.querySelector(".map-close-btn");
var formLink = document.querySelector(".write-us");
var formPopup = document.querySelector(".write-us-form");
var formClose = document.querySelector(".form-close-btn");
var buyit = document.querySelectorAll(".buy-it");
var cartWindow = document.querySelector(".cart-window");

link.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show");
});

formLink.addEventListener("click", function(event) {
  event.preventDefault();
  formPopup.classList.add("modal-show");
});

formClose.addEventListener("click", function(event) {
  event.preventDefault();
  formPopup.classList.remove("modal-show");
});

buyit.addEventListener("click", function(event) {
  event.preventDefault();
  cartWindow.classList.add("modal-show");
});

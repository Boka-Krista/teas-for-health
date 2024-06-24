

// Get all modals
var modals = document.querySelectorAll(".modal");
// Get all images
var images = document.querySelectorAll(".img");
// Get all modal images
var modalImages = document.querySelectorAll(".modal-img");
// Get all caption texts
var captionTexts = document.querySelectorAll(".caption");

// Loop through each image and assign the click event
images.forEach(function(image, index) {
  image.onclick = function() {
    modals[index].style.display = "block";
    modalImages[index].src = this.src;
    captionTexts[index].innerHTML = this.alt;
  };
});

// Get all close buttons
var closeButtons = document.querySelectorAll(".close");

// Loop through each close button and assign the click event
closeButtons.forEach(function(button) {
  button.onclick = function() {
    var modal = this.closest(".modal");
    modal.style.display = "none";
  };
});
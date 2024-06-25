

// Get all modals
var modals = document.querySelectorAll(".modal");
// Get all images
var images = document.querySelectorAll("img");
// Get all modal images
var modalImages = document.querySelectorAll(".modal-content");
// Get all caption texts
var captionTexts = document.querySelectorAll(".caption");

images.forEach(function(image, index) {
  image.style.cursor = "pointer";
  image.onclick = function() {
    modals[index].style.display = "block";
    modalImages[index].src = this.src;
    captionTexts[index].innerHTML = this.alt;
    /*
     * SOMETHING LIKE THIS
     */
    captionTexts[index].style = "color:yellow; font-size:xx-large; letter-spacing:0.3em;";
  };
});
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
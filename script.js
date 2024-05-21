var modal = document.getElementById("myModal");
var modal = document.getElementById("clover");
var modal = document.getElementById("lavander");
var modal = document.getElementById("meadowsweet");
var modal = document.getElementById("island-moss");
var modal = document.getElementById("raspberry");
var modal = document.getElementById("rosehip");
var modal = document.getElementById("blackcurrant");
var modal = document.getElementById("birch");
var modal = document.getElementById("peppermint");
var modal = document.getElementById("LINDEN-FLOWER");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
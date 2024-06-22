var modal = document.getElementById("myModal");
var modal = document.getElementById("myModal1");
var modal = document.getElementById("myModal2");
var modal = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img = document.getElementById("birch");
var img = document.getElementById("blackcurrant");
var img = document.getElementById("camomile");

var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img02");
var modalImg = document.getElementById("img03");
var modalImg = document.getElementById("img04");

var captionText = document.getElementById("caption");
var captionText = document.getElementById("caption1");
var captionText = document.getElementById("caption2");
var captionText = document.getElementById("caption3");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


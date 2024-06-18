var modal = document.getElementById("aloe");
var modal = document.getElementById("birch");
var modal = document.getElementById("blackcurrant");
var modal = document.getElementById("camomile");
var modal = document.getElementById("clover");
var modal = document.getElementById("dandelion");
var modal = document.getElementById("elderflower");
var modal = document.getElementById("ginger");
var modal = document.getElementById("iceland-moss");
var modal = document.getElementById("lavander");
var modal = document.getElementById("linden-flower");
var modal = document.getElementById("meadowsweet");
var modal = document.getElementById("nettle");
var modal = document.getElementById("passionflower");
var modal = document.getElementById("peppermint");
var modal = document.getElementById("raspberry");
var modal = document.getElementById("rosehip");
var modal = document.getElementById("rosemary");
var modal = document.getElementById("sage");
var modal = document.getElementById("turmeric");
var modal = document.getElementById("yarrow");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("aloe");
var img = document.getElementById("birch");
var img = document.getElementById("blackcurrant");
var img = document.getElementById("camomile");
var img = document.getElementById("clover");
var img = document.getElementById("dandelion");
var img = document.getElementById("elderflower");
var img = document.getElementById("ginger");
var img = document.getElementById("iceland-moss");
var img = document.getElementById("lavander");
var img = document.getElementById("linden-flower");
var img = document.getElementById("meadowsweet");
var img = document.getElementById("nettle");
var img = document.getElementById("passionflower");
var img = document.getElementById("peppermint");
var img = document.getElementById("raspberry");
var img = document.getElementById("rosehip");
var img = document.getElementById("rosemary");
var img = document.getElementById("sage");
var img = document.getElementById("turmeric");
var img = document.getElementById("yarrow");

var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img02");
var modalImg = document.getElementById("img03");
var modalImg = document.getElementById("img04");
var modalImg = document.getElementById("img05");
var modalImg = document.getElementById("img06");
var modalImg = document.getElementById("img07");
var modalImg = document.getElementById("img08");
var modalImg = document.getElementById("img09");
var modalImg = document.getElementById("img10");
var modalImg = document.getElementById("img11");
var modalImg = document.getElementById("img12");
var modalImg = document.getElementById("img13");
var modalImg = document.getElementById("img14");
var modalImg = document.getElementById("img15");
var modalImg = document.getElementById("img16");
var modalImg = document.getElementById("img17");
var modalImg = document.getElementById("img18");
var modalImg = document.getElementById("img19");
var modalImg = document.getElementById("img20");
var modalImg = document.getElementById("img21");

var captionText = document.getElementById("aloe");
var captionText = document.getElementById("birch");
var captionText = document.getElementById("blackcurrant");
var captionText = document.getElementById("camomile");
var captionText = document.getElementById("clover");
var captionText = document.getElementById("dandelion");
var captionText = document.getElementById("elderflower");
var captionText = document.getElementById("ginger");
var captionText = document.getElementById("iceland-moss");
var captionText = document.getElementById("lavander");
var captionText = document.getElementById("linden-flower");
var captionText = document.getElementById("meadowseet");
var captionText = document.getElementById("nettle");
var captionText = document.getElementById("passionflower");
var captionText = document.getElementById("peppermint");
var captionText = document.getElementById("raspberry");
var captionText = document.getElementById("rosehip");
var captionText = document.getElementById("rosemary");
var captionText = document.getElementById("sage");
var captionText = document.getElementById("turmeric");
var captionText = document.getElementById("yarrow");

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
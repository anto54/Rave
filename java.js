
// Get the modal
var modal = document.getElementById("myModalRoasterRL");

// Get the button that opens the modal
var btn = document.getElementById("myBtnRoasterRL");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}



// Get the modal
var modal1 = document.getElementById("myModalRoasterR6");

// Get the button that opens the modal
var myBtnRoasterR6 = document.getElementById("myBtnRoasterR6");

// When the user clicks on the button, open the modal
myBtnRoasterR6.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ((event.target == modal1) || (event.target == modal)) {
    modal1.style.display = "none";
    modal.style.display = "none";
  }
}

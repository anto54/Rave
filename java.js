
// Get the modal
var modal1RL = document.getElementById("myModalRoasterRL");

// Get the button that opens the modal
var myBtnRoasterRL = document.getElementById("myBtnRoasterRL");

// When the user clicks on the button, open the modal
myBtnRoasterRL.onclick = function() {
  modal1RL.style.display = "block";
}


var modal2RL = document.getElementById("myModalObjectifRL");

var myBtnObjectifRL = document.getElementById("myBtnObjectifRL");

myBtnObjectifRL.onclick = function() {
  modal2RL.style.display = "block";
}


var modal3RL = document.getElementById("myModalContactRL");


var myBtnContactRL = document.getElementById("myBtnContactRL");


myBtnContactRL.onclick = function() {
  modal3RL.style.display = "block";
}
//RoasterR6
var modal1R6 = document.getElementById("myModalRoasterR6");


var myBtnRoasterR6 = document.getElementById("myBtnRoasterR6");


myBtnRoasterR6.onclick = function() {
  modal1R6.style.display = "block";
}
// ObjectifR6 
var modal2R6 = document.getElementById("myModalObjectifR6");

var myBtnObjectifR6 = document.getElementById("myBtnObjectifR6");


myBtnObjectifR6.onclick = function() {
  modal2R6.style.display = "block";
}
// ContactR6 
var modal3R6 = document.getElementById("myModalContactR6");

var myBtnContactR6 = document.getElementById("myBtnContactR6");


myBtnContactR6.onclick = function() {
  modal3R6.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ((event.target == modal1RL) || (event.target == modal2RL) || (event.target == modal3RL) || (event.target == modal1R6) || (event.target == modal2R6) || (event.target == modal3R6)) {
    modal1RL.style.display = "none";
    modal2RL.style.display = "none";
    modal3RL.style.display = "none";
    modal1R6.style.display = "none";
    modal2R6.style.display = "none";
    modal3R6.style.display = "none";
  }
}

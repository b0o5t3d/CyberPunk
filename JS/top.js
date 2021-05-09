/*

   Date: 10/8/2020 
   
   Filename: top.js
    
*/

//Get the button & navbar :
mybutton = document.getElementById("myBtn");
mynavbar = document.getElementById("navbar");

// When the user scrolls down 20px from the top of the document, show the button 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  // scrolls down 500px, makes navbar disappear
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mynavbar.style.top = "-70px";
  }
  else {
    mynavbar.style.top = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

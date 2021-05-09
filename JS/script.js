/*

   Date: 10/8/2020 
   
   Filename: script.js
    
*/

//Gets the classes in the HTML file to implement the codes here
const typedTextSpan = document.querySelector(".text");
const cursorSpan = document.querySelector(".line");
//The texts to display
const textArray = ["Safety", "Online", "Now"];
//types each letter every 0.2s
const typingDelay = 200;
//erases the letter every 0.1s
const erasingDelay = 100;
// Delay of 2s between current and next text
const newTextDelay = 2000;
// The index in the Array
let textArrayIndex = 0;
// The word "index"
let charIndex = 0;

function type() {
    // If the number of letters is not equivalent to the length of the word
    if (charIndex < textArray[textArrayIndex].length) {
        //Displays the letters 1 by 1
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        //increase the count
        charIndex++;
        //delay
        setTimeout(type, typingDelay);
    }
    else {
        //delay before erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        //removes the letters
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        //decrease the count
        charIndex--;
        //deletion delay
        setTimeout(erase, erasingDelay);
    }
    else {
        //moves on to next word
        textArrayIndex++;
        //to restart the words
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        //delay before typing
        setTimeout(type, typingDelay + 1100);
    }
}
// On DOM Load initiate the effect
document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});
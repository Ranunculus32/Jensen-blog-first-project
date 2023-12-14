// Selecting Elements in DOM

/* const allSections =document.querySelectorAll('section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.querySelector('.header');
document.getElementById('section-1');
document.getElementsByClassName('-btn'); 
*/

// Creating and inserting  elements

// .insertAdjacentHTML --> //the quickest way to create element
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "-btn btn--close-cookie" > Got it! </button> ';

//Delete element

document.querySelector(".btn--close--cookie");
addEventListener("click", function () {
  message.remove();
});

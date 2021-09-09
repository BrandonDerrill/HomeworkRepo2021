// the anonymous function passed in as a second parameter ("function (event) {console.log(event)}") is a callback function
someHTML.addEventListener("click", function(event) {
  console.log(event);
});

// "regular" functions
function greet(Alex) {
  return `Hello ${Alex}!`;
}

function welcome(Alex) {
  return `${Alex}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet);
// a page that changes the background color randomly

// create an array to randomly generate hex color codes
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// get a button Element by ID
const btn = document.getElementById("btn");

// get a color text Element by a selector
const color = document.querySelector(".color");

// set up a function that will be called whenever a button Element is clicked
btn.addEventListener("click", function () {
  // set a hex color on the fly
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // change the background color
  document.body.style.backgroundColor = hexColor;
  // change the text
  color.textContent = hexColor;
});

// create a function to generate a random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

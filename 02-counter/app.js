// a simple counter app

// set an initial counter value
let counterValue = 0;

// get span Element by a selector
const value = document.querySelector("#value");

// get button elements by a selector
const btns = document.querySelectorAll(".btn");

// set up a function that will be called whenever each button Element is clicked
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      counterValue--;
    } else if (styles.contains("increase")) {
      counterValue++;
    } else {
      counterValue = 0;
    }
    value.textContent = counterValue;
    if (counterValue > 0) {
      value.textContent = `+${value.textContent}`;
      value.style.color = "green";
    } else if (counterValue < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});

// implementing a nav bar with JS
// get elements by a selector
const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// set up a function that will be called when a toggle button is clicked
toggleBtn.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
    console.log(links.classList);
  } else {
    links.classList.add("show-links");
    console.log(links.classList);
    // links.classList.toggle("show-links") <<< this is basically doing the same things with the above.
  }
});

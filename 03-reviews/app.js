// set review data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select all elements by a selector
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const review = document.querySelector("#info");
const imageUrl = document.querySelector("#person-img");
const btns = document.querySelectorAll(".btn");

// set an initial value to subset the review
let reviewNumber = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showReview(reviewNumber);
});

// create a function to show the nth person
function showReview(reviewNumber) {
  const item = reviews[reviewNumber];
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
  imageUrl.src = item.img;
}

// set up a function that will be called whenever each button Element is clicked
btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("prev-btn")) {
      reviewNumber--;
    } else if (styles.contains("next-btn")) {
      reviewNumber++;
    } else {
      reviewNumber = Math.floor(Math.random() * reviews.length);
    }
    showReview(reviewNumber % reviews.length);
  });
});

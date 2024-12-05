const inputValue = document.getElementsByTagName("input");
const submit = document.querySelector("form");
const ratingSection = document.querySelector(".rating-section");
const thanksSection = document.querySelector(".thanks-section");
const thanksText = document.querySelector(".rating-text");

submit.addEventListener("submit", Submitted);

let rating = "";

for (let i = 0; i < inputValue.length; i++) {
  inputValue[i].addEventListener("click", function () {
    rating = inputValue[i].value;
  });
}

function Submitted(event) {
  event.preventDefault();
  if (rating) {
    ratingSection.style.display = "none";
    thanksSection.style.display = "block";
    thanksText.innerHTML = `You selected ${rating} out of 5`;
  }
}

const ratingEls = document.querySelectorAll(".rating");
var rating = 0;

function resetAllRatings() {
  ratingEls.forEach((el) => {
    el.classList.remove("active");
  });
}
ratingEls.forEach((el) => {
  el.addEventListener("click", () => {
    resetAllRatings();
    el.classList.add("active");
    rating = document.querySelector(".rating.active").innerText;
  });
});

document.querySelector(".submit-btn").addEventListener("click", () => {
  if (rating != 0) {
    document.querySelector(".card-rating-state").classList.remove("active");
    document.querySelector(".rating-selected").innerHTML = rating + " ";
    document.querySelector(".card-thanks-state").classList.add("active");
  } else alert("Please select a rating first!");
});

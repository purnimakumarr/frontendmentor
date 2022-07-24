const tooltipEl = document.querySelector(".share-tooltip");

function toggleShareActiveState() {
  if (tooltipEl.classList.contains("active")) {
    tooltipEl.classList.remove("active");
  } else {
    tooltipEl.classList.add("active");
  }
}

document.querySelectorAll(".share-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleShareActiveState();
  });
});

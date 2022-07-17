const btnEls = document.querySelectorAll(".question-btn");

btnEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("show")) {
      btn.classList.remove("show");
    } else btn.classList.add("show");
  });
});

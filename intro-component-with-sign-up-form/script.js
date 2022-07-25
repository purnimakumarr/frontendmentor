document.querySelectorAll(".field").forEach((el) => {
  el.addEventListener("change", () => {
    if (el.value != "") {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

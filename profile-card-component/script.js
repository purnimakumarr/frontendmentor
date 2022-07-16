if (document.readyState === "interactive") {
  setTimeout(() => {
    document.querySelector(".stats--followers").classList.add("show");
  }, 500);
  setTimeout(() => {
    document.querySelector(".stats--likes").classList.add("show");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".stats--photos").classList.add("show");
  }, 1500);
}

console.log("hello");
document.querySelector(".btn.state-add").addEventListener("click", () => {
  document.querySelector(".btn.state-add").classList.remove("state-add");
  document.querySelector(".btn").classList.add("state-added");
});

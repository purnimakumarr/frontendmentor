const submitBtn = document.querySelector(".submit-btn");

function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat) || inputText.value == " ") {
    document.querySelector(".email-form").classList.remove("invalid");
    return true;
  } else {
    document.querySelector(".email-form").classList.add("invalid");
    return false;
  }
}

submitBtn.addEventListener("click", () => {
  var email = document.getElementById("email-field");
  var result = validateEmail(email);
});

submitBtn.addEventListener("keydown", (e) => {
  if (e.name == "Enter") {
    var email = document.getElementById("email-field");
    var result = validateEmail(email);
  }
});

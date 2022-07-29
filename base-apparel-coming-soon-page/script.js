const submitBtn = document.querySelector(".submit-btn");

function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.querySelector(".email-form").classList.remove("invalid");
    return true;
  } else {
    document.querySelector(".email-form").classList.add("invalid");
    return false;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.getElementById("email-field");
  var result = validateEmail(email);
  console.log(result);
  if (result) document.querySelector(".email-form").submit;
});

submitBtn.addEventListener("keydown", (e) => {
  if (e.name == "Enter") {
    e.preventDefault();
    var email = document.getElementById("email-field");
    var result = validateEmail(email);
    if (result) document.querySelector(".email-form").submit;
  }
});

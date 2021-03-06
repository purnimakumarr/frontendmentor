// Error messages
var errorFN = "First Name cannot be empty";
var errorLN = "Last Name cannot be empty";
var errorEM = "Looks like this is not an email";
var errorPD = "Password cannot be empty";

document.querySelectorAll(".field").forEach((el) => {
  el.addEventListener("change", () => {
    if (el.value != "") {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

const formEl = document.querySelector("form");

function validateForm() {
  const firstNameEL = document.getElementById("first-name");
  const lastNameEL = document.getElementById("last-name");
  const emailEl = document.getElementById("email");
  const passwordEl = document.getElementById("password");

  var firstName = firstNameEL.value;
  var lastName = lastNameEL.value;
  var email = emailEl.value;
  var password = passwordEl.value;

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  // VALIDATE FORM AND ACTIVATE ERROR STATE FOR INVALID FORM FIELDS
  if (firstName === "") {
    formEl.classList.add("error-state-fn");
    var errorTextEl = document.getElementById("error-text-fn");
    errorTextEl.innerHTML = errorFN;
    errorTextEl.classList.add("active");
    document.getElementById("error-icon-fn").classList.add("active");
    document.getElementById("first-name").classList.add("error");
  }
  if (lastName === "") {
    formEl.classList.add("error-state-ln");
    var errorTextEl = document.getElementById("error-text-ln");
    errorTextEl.innerHTML = errorLN;
    errorTextEl.classList.add("active");
    document.getElementById("error-icon-ln").classList.add("active");
    document.getElementById("last-name").classList.add("error");
  }
  if (email === "" || !email.match(mailformat)) {
    formEl.classList.add("error-state-em");
    var errorTextEl = document.getElementById("error-text-em");
    errorTextEl.innerHTML = errorEM;
    errorTextEl.classList.add("active");
    document.getElementById("error-icon-em").classList.add("active");
    document.getElementById("email").classList.add("error");
  }
  if (password === "") {
    formEl.classList.add("error-state-pd");
    var errorTextEl = document.getElementById("error-text-pd");
    errorTextEl.innerHTML = errorPD;
    errorTextEl.classList.add("active");
    document.getElementById("error-icon-pd").classList.add("active");
    document.getElementById("password").classList.add("error");
  }

  // CHECK AND RETURN STATE
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    !email.match(mailformat) ||
    password === ""
  ) {
    return false;
  }

  return true;
}

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var result = validateForm();
  if (result) {
    formEl.submit();
  }
});
submitBtn.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.code === "Enter") {
    var result = validateForm();
    if (result) {
      formEl.submit();
    }
  }
});

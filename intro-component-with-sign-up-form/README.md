# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

#### Desktop

#### Mobile

### Links

- Solution URL: [View code](https://github.com/purnimakumarr/frontendmentor/tree/main/intro-component-with-sign-up-form)
- Live Site URL: [View site](https://purnimakumarr.github.io/frontendmentor/intro-component-with-sign-up-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Web-first workflow

### What I learned

I learnt how to perform client side form validation.

```js
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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var result = validateForm();
  if (result) {
    formEl.submit();
  }
});
```

## Author

- Website - [Purnima Kumar](https://purnimakumarr.github.io/)
- Frontend Mentor - [@purnimakumarr](https://www.frontendmentor.io/profile/purnimakumarr)
- Twitter - [@purnimakumarr](https://www.twitter.com/purnimakumarr)

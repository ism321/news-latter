"use strict";

const page1 = document.querySelector(".page1");
const error = document.querySelector(".error");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const page2 = document.querySelector(".page2");
const dissmiss = document.querySelector(".dissmiss");
const email = document.querySelector(".email");
const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
button.addEventListener("click", function (e) {
  if (!pattern.test(input.value)) {
    error.classList.remove("hidden");
    input.classList.add('active')
  } else {
    page2.classList.remove("hidden");
    page1.classList.add("hidden");
  }

  email.textContent = input.value;
});
dissmiss.addEventListener("click", function (e) {
  window.location.reload();
});

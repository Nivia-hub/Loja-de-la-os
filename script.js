// script.js

document.querySelector(".banner button").addEventListener("click", () => {
  document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
});
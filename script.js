const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    window.location.href = "success.html";
  } else {
    const errorMessage = document.querySelector("span.error-message");
    errorMessage.textContent = "Valid email required";

    const emailInput = document.querySelector("#email");
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.value = "";
    emailInput.style.background = "rgb(255, 241, 240)";

    emailInput.addEventListener("focus", function () {
      errorMessage.textContent = "";
      emailInput.style.border = "1px solid hsl(231, 7%, 60%)";
      emailInput.style.background = "#fff";
    });
  }
});

const img = document.querySelector(".content div:nth-child(2) img");

const currentWidth = window.innerWidth;

if (currentWidth <= 325) {
  img.src = "assets/images/illustration-sign-up-mobile.svg";
  img.alt = "New Image Alt";
}

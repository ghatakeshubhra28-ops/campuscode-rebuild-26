console.log("login.js is running");
const pass = document.getElementById("password");
const btn = document.getElementById("toggle-pass");

btn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    btn.textContent = "HIDE";
  } else {
    pass.type = "password";
    btn.textContent = "SHOW";
    }
});
  const form = document.getElementById("login-form");
const captchaBox = document.getElementById("captcha-box");
const newCaptchaBtn = document.getElementById("new-captcha");
const statusText = document.getElementById("status-text");
const errorText = document.getElementById("form-error");

let captchaCode = "";

function makeCaptcha() {
  captchaCode = "";
  for (let i = 0; i < 5; i++) {
    captchaCode += Math.floor(Math.random() * 10);
  }
  captchaBox.textContent = captchaCode;
}

makeCaptcha();
newCaptchaBtn.addEventListener("click", makeCaptcha);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const captcha = document.getElementById("captcha").value.trim();

  if (!email.includes("@")) {
    errorText.textContent = "Please enter a valid email address.";
    return;
  }
  if (password === "") {
    errorText.textContent = "Please enter your password.";
    return;
  }
  if (captcha !== captchaCode) {
    errorText.textContent = "Captcha does not match. Try again.";
    makeCaptcha();
    return;
  }

  errorText.textContent = "";
  statusText.textContent = "CHECKING...";
  setTimeout(function () {
    window.location.href = "/initializing";
  }, 1500);
});
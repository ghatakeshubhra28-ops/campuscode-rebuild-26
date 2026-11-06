const regPass = document.getElementById("reg-password");
const regToggle = document.getElementById("toggle-reg-pass");

regToggle.addEventListener("click", function () {
  if (regPass.type === "password") {
    regPass.type = "text";
    regToggle.textContent = "HIDE";
  } else {
    regPass.type = "password";
    regToggle.textContent = "SHOW";
  }
});

const regCaptchaBox = document.getElementById("reg-captcha-box");
const regNewCaptcha = document.getElementById("reg-new-captcha");
let regCaptchaCode = "";

function makeRegCaptcha() {
  regCaptchaCode = "";
  for (let i = 0; i < 5; i++) {
    regCaptchaCode += Math.floor(Math.random() * 10);
  }
  regCaptchaBox.textContent = regCaptchaCode;
}

makeRegCaptcha();
regNewCaptcha.addEventListener("click", makeRegCaptcha);

const sendOtpBtn = document.getElementById("send-otp");
const otpHint = document.getElementById("otp-hint");
const regError = document.getElementById("reg-error");
const DEMO_OTP = "123456";
let otpSent = false;

sendOtpBtn.addEventListener("click", function () {
  const email = document.getElementById("reg-email").value.trim();
  if (!email.includes("@")) {
    regError.textContent = "Enter a valid email before requesting the OTP.";
    return;
  }
  regError.textContent = "";
  otpSent = true;
  sendOtpBtn.textContent = "SENT";
  otpHint.textContent = "Demo mode: use the code " + DEMO_OTP + ".";
});

const regForm = document.getElementById("register-form");

regForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const otp = document.getElementById("otp").value.trim();
  const captcha = document.getElementById("reg-captcha").value.trim();
  const age = document.getElementById("age").checked;

  if (name === "") {
    regError.textContent = "Please enter your full name.";
    return;
  }
  if (!email.includes("@")) {
    regError.textContent = "Please enter a valid email address.";
    return;
  }
  if (password.length < 8) {
    regError.textContent = "Password must be at least 8 characters.";
    return;
  }
  if (!otpSent || otp !== DEMO_OTP) {
    regError.textContent = "Request the OTP and enter the correct code.";
    return;
  }
  if (captcha !== regCaptchaCode) {
    regError.textContent = "Captcha does not match. Try again.";
    makeRegCaptcha();
    return;
  }
  if (!age) {
    regError.textContent = "Please confirm that you are 18 or older.";
    return;
  }

  regError.style.color = "#82b91a";
  regError.textContent = "Account created. Taking you to login...";
  setTimeout(function () {
    window.location.href = "/login";
  }, 1500);
});
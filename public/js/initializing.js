const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

let value = 0;

const timer = setInterval(function () {
  value += 2;
  if (value > 100) value = 100;

  fill.style.width = value + "%";
  percent.textContent = String(value).padStart(3, "0") + "%";

  if (value === 100) {
    clearInterval(timer);
    setTimeout(function () {
      window.location.href = "/student";
    }, 400);
  }
}, 50);
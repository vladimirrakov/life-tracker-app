// All JavaScript from <script> tag in app-web-v1.html

function changePage(page) {
  document.querySelectorAll(".page-container").forEach(function (el) {
    el.classList.remove("active");
  });
  document.getElementById(page + "-page").classList.add("active");

  document.querySelectorAll(".nav-item").forEach(function (el) {
    el.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach(function (el, index) {
    if (
      el.textContent
        .trim()
        .toLowerCase()
        .includes(page === "tageseintrag" ? "eingabe" : page)
    ) {
      el.classList.add("active");
    }
  });
  document
    .querySelectorAll(".nav-icon svg path")
    .forEach(function (path) {
      path.setAttribute("fill", "#999");
    });
  document
    .querySelector(".nav-item.active .nav-icon svg path")
    .setAttribute("fill", "#3A7CA5");
}

// Zusammenfassungs-Modal
function showSummary() {
  document.getElementById("summary-container").style.display = "flex";
}
function hideSummary() {
  document.getElementById("summary-container").style.display = "none";
}
function saveAndReturn() {
  hideSummary();
  changePage("dashboard");
}

// Stimmungs-Optionen
document.addEventListener("DOMContentLoaded", function () {
  const radioOptions = document.querySelectorAll(".radio-circle");
  radioOptions.forEach((option) => {
    option.addEventListener("click", function () {
      radioOptions.forEach((opt) => {
        opt.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
});
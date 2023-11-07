function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

// Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "dark");
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);












const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);


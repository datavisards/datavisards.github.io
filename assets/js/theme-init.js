(function () {
  "use strict";

  var storedTheme;
  try {
    storedTheme = localStorage.getItem("datavisards-theme");
  } catch (error) {
    storedTheme = null;
  }
  if (storedTheme !== "light" && storedTheme !== "dark") storedTheme = null;
  var preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = storedTheme || preferredTheme;
}());

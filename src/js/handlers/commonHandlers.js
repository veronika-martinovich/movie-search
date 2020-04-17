import { state, MODE1, MODE2 } from "../state";
import { generatePage } from "../pages_functions/generatePage";
import { changeNavLinksStyles } from "../styles_functions/changeNavLinksStyles";

const hamburgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const switchCheckbox = document.querySelector(".switch input");
const switchSlider = document.querySelector(".slider");
const navList = document.querySelector(".nav__list");

// Hamburger
hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("hamburger_arrow");
  nav.classList.toggle("nav_active");
});

// Toggle switch
switchCheckbox.addEventListener("click", function () {
  state.mode = state.mode === MODE1 ? MODE2 : MODE1;
  state.isPlayOn = state.isPlayOn ? !state.isPlayOn : state.isPlayOn;
  switchSlider.textContent = state.mode;
  generatePage(state.page);
});

// Navigation links
navList.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    state.page = e.target.dataset.category;
    changeNavLinksStyles(e.target);
    hamburgerIcon.classList.toggle("hamburger_arrow");
    nav.classList.toggle("nav_active");
    generatePage(state.page);
  }
});

// Nav
document.body.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("hamburger") &&
    !e.target.classList.contains("hamburger__line") &&
    !e.target.classList.contains("nav") &&
    !e.target.classList.contains("nav__list") &&
    nav.classList.contains("nav_active")
  ) {
    hamburgerIcon.classList.remove("hamburger_arrow");
    nav.classList.remove("nav_active");
  }
});

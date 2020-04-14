import { MODE1, MODE2, state } from "./state";
import { categoryCards } from "./generateCategoryCardsPage";
import { generatePage } from "./generatePage";
import { changePageHeading } from "./changePageHeading";
import { changeNavLinksStyles } from "./changeNavLinksStyles";

const hamburgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const switchCheckbox = document.querySelector(".switch input");
const switchSlider = document.querySelector(".slider");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const cardsLayout = document.querySelector(".cards-layout");

// Hamburger
hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("hamburger_arrow");
  nav.classList.toggle("nav_active");
});

// Toggle switch
switchCheckbox.addEventListener("click", function () {
  state.mode = state.mode === MODE1 ? MODE2 : MODE1;
  switchSlider.textContent = state.mode;
  if (state.page === "all_categories") {
    categoryCards.forEach((item) => {
      item.changeCategoryCardMode(state.mode);
    });
  }
  if (state.page !== "all_categories") {
    state.activeWordCards.forEach((item) => {
      item.changeWordCardMode(state.mode);
    });
  }
});

// Navigation links
navList.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    state.page = e.target.dataset.category;
    changeNavLinksStyles(e.target);
    hamburgerIcon.classList.toggle("hamburger_arrow");
    nav.classList.toggle("nav_active");
    changePageHeading(e.target.dataset.category);
    generatePage(state.page);
  }
});

// Category cards
cardsLayout.addEventListener("click", function (e) {
  if (e.target.classList.contains("category-card")) {
    state.page = e.target.dataset.category;
    changeNavLinksStyles(
      Array.from(navLinks).find((item) => {
        return item.dataset.category === state.page;
      })
    );
    changePageHeading(state.page);
    generatePage(state.page);
  }
  if (e.target.classList.contains("category-card__icon")) {
    state.page = e.target.classList[e.target.classList.length - 1].slice(4);
    changeNavLinksStyles(
      Array.from(navLinks).find((item) => {
        return item.dataset.category === state.page;
      })
    );
    changePageHeading(state.page);
    generatePage(state.page);
  }
});

// Word cards
cardsLayout.addEventListener("click", function (e) {
  if (state.page !== "all_categories" && state.mode === MODE1) {
    const audio = document.querySelector(".audio");
    let audioWord = "";
    if (e.target.classList.contains("word-card")) {
      audioWord = e.target.dataset.word;
    }
    if (e.target.classList.contains("word-card__img")) {
      audioWord = e.target.parentElement.parentElement.dataset.word;
    }
    if (e.target.classList.contains("word-card__text")) {
      audioWord = e.target.parentElement.parentElement.dataset.word;
    }
    audio.setAttribute("src", `./src/audio/word_card_audio/${audioWord}.mp3`);
    if (e.target.classList.contains("word-card__translation-icon")) {
      e.target.parentElement.parentElement.classList.add("word-card_flipped");
    }
  }
});

cardsLayout.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("word-card")) {
    e.target.classList.remove("word-card_flipped");
  }
});

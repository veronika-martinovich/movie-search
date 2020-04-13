import { MODE1, MODE2, state } from "./state";
import { categoryCards } from "./generateCategoryCards";
import { generatePage } from "./generatePage";
import { changePageHeading } from "./changePageHeading";
import { changeNavLinksStyles } from "./changeNavLinksStyles";

const hamburgerIcon = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const switchCheckbox = document.querySelector('.switch input');
const switchSlider = document.querySelector('.slider');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const cardsLayout = document.querySelector(".cards-layout");

// Hamburger
hamburgerIcon.addEventListener('click', function() {
  hamburgerIcon.classList.toggle('hamburger_arrow');
  nav.classList.toggle('nav_active');
})

// Toggle switch
switchCheckbox.addEventListener('click', function(){
  state.mode = state.mode === MODE1 ? MODE2 : MODE1;
  switchSlider.textContent = state.mode;
  if (state.page === 'all_categories') {
    categoryCards.forEach(item => {
      item.changeCategoryCardMode(state.mode)
    })
  }
  if (state.page !== 'all_categories') {
    state.activeWordCards.forEach(item => {
      item.changeWordCardMode(state.mode)
    })
  }
 
})

// Navigation links
navList.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    state.page = e.target.dataset.category;
    changeNavLinksStyles(e.target);
    hamburgerIcon.classList.toggle('hamburger_arrow');
    nav.classList.toggle('nav_active');
    changePageHeading(e.target.dataset.category);
    generatePage(state.page);
  }
})

// Category cards
cardsLayout.addEventListener('click', function(e) {
  if (e.target.classList.contains('category-card')) {
    state.page = e.target.dataset.category;
    changeNavLinksStyles(Array.from(navLinks).find(item => {
      return item.dataset.category === state.page
    }));
    changePageHeading(state.page);
    generatePage(state.page);
  }
  if (e.target.classList.contains('category-card__icon')) {
    state.page = e.target.classList[e.target.classList.length - 1].slice(4);
    changeNavLinksStyles(Array.from(navLinks).find(item => {
      return item.dataset.category === state.page
    }));
    changePageHeading(state.page);
    generatePage(state.page);
  }
})

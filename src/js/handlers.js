import { MODE1, MODE2, state } from "./state";
import { categoryCards } from "./generateCategoryCards";
import { generatePage } from "./generatePage";
import { changePageHeading } from "./changePageHeading";

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
    navLinks.forEach(link => {
      link.classList.remove('nav__link_active');
    })
    e.target.classList.add('nav__link_active');
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
    changePageHeading(e.target.dataset.category);
    generatePage(state.page);
  }
})

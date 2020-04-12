import { MODE1, MODE2, state } from "./state";
import { categoryCards } from "./createCategoryCards";

let hamburgerIcon = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let switchCheckbox = document.querySelector('.switch input');
let switchSlider = document.querySelector('.slider');
let navList = document.querySelector('.nav__list');
let navLinks = document.querySelectorAll('.nav__link');

// Hamburger
hamburgerIcon.addEventListener('click', function() {
  hamburgerIcon.classList.toggle('hamburger_arrow');
  nav.classList.toggle('nav_active');
})

// Toggle switch
switchCheckbox.addEventListener('click', function(){
  state.mode = state.mode === MODE1 ? MODE2 : MODE1;
  switchSlider.textContent = state.mode;
  categoryCards.forEach(item => {
    item.changeCategoryCardMode(state.mode)
  })
})

// Navigation links
navList.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    state.page = e.target.dataset.category;
    navLinks.forEach(link => {
      link.classList.remove('nav__link_active');
    })
    e.target.classList.add('nav__link_active');
  }
})

import { CategoryCard } from "./CategoryCard";
import { state } from "./state";
import { createPageHeading } from "./createPageHeading";
import { changeNavLinksStyles } from "./changeNavLinksStyles";
import { generatePage } from "./generatePage";

const categoryCards = [];
function generateCategoryCardsPage(categories) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = '';
  const navLinks = document.querySelectorAll(".nav__link");
  createPageHeading(state.page);

  const cardsLayout = document.createElement('div');
  cardsLayout.classList.add("cards-layout");

  categories.forEach((category) => {
    const categoryCard = new CategoryCard(
      category.title,
      category.name,
      state.mode
    );
    categoryCards.push(categoryCard);
    cardsLayout.append(categoryCard.createCategoryCard());
  });

  wrapper.append(cardsLayout);

  // Category cards handlers
  cardsLayout.addEventListener("click", function (e) {
    if (e.target.classList.contains("category-card")) {
      state.page = e.target.dataset.category;
      changeNavLinksStyles(
        Array.from(navLinks).find((item) => {
          return item.dataset.category === state.page;
        })
      );
      generatePage(state.page);
    }
    if (e.target.classList.contains("category-card__icon")) {
      state.page = e.target.classList[e.target.classList.length - 1].slice(4);
      changeNavLinksStyles(
        Array.from(navLinks).find((item) => {
          return item.dataset.category === state.page;
        })
      );
      generatePage(state.page);
    }
  });
}

export { categoryCards, generateCategoryCardsPage };

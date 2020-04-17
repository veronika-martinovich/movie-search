import { CategoryCard } from "../classes/CategoryCard";
import { state } from "../state";
import { addPageHeading } from "../elements/addPageHeading";
import { addCategoryCardHandlers } from "../handlers/addCategoryCardHandlers";

const categoryCards = [];
function generateCategoryCardsPage(categories) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  const navLinks = document.querySelectorAll(".nav__link");
  addPageHeading(state.page);

  const cardsLayout = document.createElement("div");
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

  addCategoryCardHandlers(cardsLayout, navLinks);
}

export { categoryCards, generateCategoryCardsPage };

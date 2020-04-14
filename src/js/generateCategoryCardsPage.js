import { CategoryCard } from "./CategoryCard";
import { state } from "./state";

const categoryCards = [];
function generateCategoryCardsPage(categories) {
  const cardsLayout = document.querySelector(".cards-layout");
  cardsLayout.innerHTML = "";
  categories.forEach((category) => {
    const categoryCard = new CategoryCard(
      category.title,
      category.name,
      state.mode
    );
    categoryCards.push(categoryCard);
    cardsLayout.append(categoryCard.createCategoryCard());
  });
}

export { categoryCards, generateCategoryCardsPage };

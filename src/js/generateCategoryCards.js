import { CategoryCard } from "./CategoryCard";
import { state } from "./state";

const categoryCards = [];
function generateCategoryCards(categories) {
  const cardsLayout = document.querySelector(".cards-layout");
  categories.forEach((category) => {
    const categoryCard = new CategoryCard(
      category.title,
      category.iconTitle,
      state.mode
    );
    categoryCards.push(categoryCard);
    cardsLayout.append(categoryCard.createCategoryCard());
  });
}

export { categoryCards, generateCategoryCards };

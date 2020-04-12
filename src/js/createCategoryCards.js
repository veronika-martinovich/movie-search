import { categories } from "./data";
import { CategoryCard } from "./CategoryCard";

const categoryCards = [];
function createCategoryCards() {
  const cardsLayout = document.querySelector(".cards-layout");
  categories.forEach((category) => {
    const categoryCard = new CategoryCard(
      category.title,
      category.iconTitle,
      "Train"
    );
    categoryCards.push(categoryCard);
    cardsLayout.append(categoryCard.generateCategoryCard());
  });
}

export { categoryCards, createCategoryCards };

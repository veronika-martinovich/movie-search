import { categories, words } from "./data";
import { generateCategoryCards } from "./generateCategoryCards";
import { generateWordCards } from "./generateWordCards";
import { state } from "./state";

export function generatePage(page) {
  const cardsLayout = document.querySelector(".cards-layout");
  cardsLayout.innerHTML = '';
  switch (page) {
    case "all":
      generateCategoryCards(categories);
      break;
    case "actions_1":
      generateWordCards(words[0]);
      break;
    case "actions_2":
      generateWordCards(words[1]);
      break;
    case "animals_1":
      generateWordCards(words[2]);
      break;
    case "animals_2":
      generateWordCards(words[3]);
      break;
    case "clothes":
      generateWordCards(words[4]);
      break;
    case "emotions":
      generateWordCards(words[5]);
      break;
  }
}

generatePage(state.page);

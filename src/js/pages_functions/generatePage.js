import { categories, words } from "../data";
import { generateCategoryCardsPage } from "./generateCategoryCardsPage";
import { generateWordCardsPage } from "./generateWordCardsPage";
import { state } from "../state";

export function generatePage(page) {
  switch (page) {
    case "all_categories":
      generateCategoryCardsPage(categories);
      break;
    case "actions_1":
      generateWordCardsPage(words[0]);
      break;
    case "actions_2":
      generateWordCardsPage(words[1]);
      break;
    case "animals_1":
      generateWordCardsPage(words[2]);
      break;
    case "animals_2":
      generateWordCardsPage(words[3]);
      break;
    case "clothes":
      generateWordCardsPage(words[4]);
      break;
    case "emotions":
      generateWordCardsPage(words[5]);
      break;
  }
}

generatePage(state.page);

import { createCategoryCards } from "./createCategoryCards";
import { state } from "./state";

export function generatePage(page) {
  switch(page) {
    case 'all':
      createCategoryCards();
      break;
   /*  case 'actions_1':
    case 'actions_2':
    case 'animals_1':
    case 'animals_2':
    case 'clothes':
    case 'emotions': */
  }
}

generatePage(state.page);

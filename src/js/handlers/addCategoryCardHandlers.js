import { changeNavLinksStyles } from "../styles_functions/changeNavLinksStyles";
import { generatePage } from "../pages_functions/generatePage";
import { state, MODE1, MODE2 } from "../state";

export function addCategoryCardHandlers(cardsLayout, navLinks) {
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

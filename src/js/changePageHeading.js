import { categories } from "./data"

export function changePageHeading(category) {
  const pageHeading = document.querySelector(".page-heading");
  if (category === 'all_categories') {
    pageHeading.textContent = 'All categories';
  } else {
    pageHeading.textContent = categories.find(item => {
      return item.name === category
    }).title;
  }  
}

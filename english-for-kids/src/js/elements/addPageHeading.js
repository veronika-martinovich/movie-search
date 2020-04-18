import { categories } from "../data";

export function addPageHeading(category) {
  const wrapper = document.querySelector(".wrapper");
  const pageHeading = document.createElement("h3");
  pageHeading.classList.add("page-heading");
  if (category === "all_categories") {
    pageHeading.textContent = "All categories";
  } else {
    pageHeading.textContent = categories.find((item) => {
      return item.name === category;
    }).title;
  }
  wrapper.append(pageHeading);
}

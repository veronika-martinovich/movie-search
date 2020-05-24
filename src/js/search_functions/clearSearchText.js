export function clearSearchText() {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".icon_clear")
      .addEventListener("click", function () {
        document.querySelector(".search__text").value = "";
      });
  });
}

clearSearchText();

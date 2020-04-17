export function addStarIcon(result) {
  const starContainer = document.querySelector(".game-panel__star-container");
  const starIcon = document.createElement("div");
  starIcon.classList.add("icon_star");
  if (result === "success") {
    starIcon.classList.add("icon_star-success");
  }
  if (result === "failure") {
    starIcon.classList.add("icon_star-failure");
  }
  starContainer.append(starIcon);
}

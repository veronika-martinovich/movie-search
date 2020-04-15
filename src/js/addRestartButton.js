import {addRestartButtonHandler} from "./addRestartButtonHandler";

export function addRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.classList.add("button_restart");
  restartButton.textContent = "RESTART";
/*   addRestartButtonHandler(restartButton); */
  return restartButton;
}

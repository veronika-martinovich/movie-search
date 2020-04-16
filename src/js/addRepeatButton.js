import {addRepeatButtonHandler} from "./addRepeatButtonHandler";

export function addRepeatButton() {
  const repeatButton = document.createElement("button");
  repeatButton.classList.add("button_repeat");
  repeatButton.textContent = "Repeat";
  addRepeatButtonHandler(repeatButton);
  return repeatButton;
}

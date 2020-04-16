import {addStartButtonHandler} from "./addStartButtonHandler";

export function addStartButton() {
  const startButton = document.createElement("button");
  startButton.classList.add("button_start");
  startButton.textContent = "Start";
  addStartButtonHandler(startButton);
  return startButton;
}

import { addRepeatButton } from "./addRepeatButton";
import { playGame } from "./playGame";

export function addStartButtonHandler(startButton) {
  startButton.addEventListener("click", function () {
    this.replaceWith(addRepeatButton());
    playGame();
  });
}

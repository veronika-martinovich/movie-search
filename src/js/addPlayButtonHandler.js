import { addRestartButton } from "./addRestartButton";
import { playGame } from "./playGame";

export function addPlayButtonHandler(playButton) {
  playButton.addEventListener("click", function () {
    this.replaceWith(addRestartButton());
    playGame();
  });
}

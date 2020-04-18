import { addRepeatButton } from "../elements/addRepeatButton";
import { playGame } from "../game_functions/playGame";

export function addStartButtonHandler(startButton) {
  startButton.addEventListener("click", function () {
    this.replaceWith(addRepeatButton());
    playGame();
  });
}

import { state, MODE1, MODE2 } from "./state";
import {addRestartButton} from "./addRestartButton";

export function addPlayButtonHandler(playButton, parentNode) {
  playButton.addEventListener('click', function() {
    this.replaceWith(addRestartButton());
    addRestartButton();
    state.isPlayOn = !state.isPlayOn;
    console.log(state)
  })
}

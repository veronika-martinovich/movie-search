import {addPlayButtonHandler} from "./addPlayButtonHandler";

export function addPlayButton() {
  const playButton = document.createElement("button");
  playButton.classList.add("button_play");
  playButton.textContent = "START";
  addPlayButtonHandler(playButton);
  return playButton;
}

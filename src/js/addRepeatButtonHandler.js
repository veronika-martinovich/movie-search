import { state } from "./state";

export function addRepeatButtonHandler(repeatButton) {
  repeatButton.addEventListener("click", function () {
    const audio = document.querySelector(".audio");
    audio.setAttribute("src", state.activeAudio);
  });
}

import { state, MODE1, MODE2 } from "./state";
import { shuffleActiveWordCards } from "./shuffleActiveWordCards";

export function playGame() {
  state.isPlayOn = !state.isPlayOn;
  const shuffledWordCards = shuffleActiveWordCards(state.activeWordCards);
  const audio = document.querySelector(".audio");
  const cardsLayout = document.querySelector(".cards-layout");
  let counterSuccess = 0;
  let counterFailure = 0;

  playAudio();

  function playAudio() {
    if (shuffledWordCards.length > 0) {
      audio.setAttribute(
        "src",
        shuffledWordCards[shuffledWordCards.length - 1].audio
      );
      cardsLayout.addEventListener("click", cardClickHandler);
    } else {
      console.log("game over", counterSuccess, counterFailure);
    }
  }

  function cardClickHandler(e) {
    e.target.parentElement.parentElement.dataset.word ===
    shuffledWordCards[shuffledWordCards.length - 1].word
      ? counterSuccess++
      : counterFailure++;
    shuffledWordCards.pop();
    playAudio();
  }
}

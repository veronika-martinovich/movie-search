import { state, MODE1, MODE2 } from "../state";
import { shuffleActiveWordCards } from "./shuffleActiveWordCards";
import { addStarIcon } from "../elements/addStarIcon";
import { ResultModal } from "../classes/ResultModal";

export function playGame() {
  state.isPlayOn = !state.isPlayOn;
  const shuffledWordCards = shuffleActiveWordCards(state.activeWordCards);
  const audio = document.querySelector(".audio");
  const cardsLayout = document.querySelector(".cards-layout");
  let counterSuccess = 0;
  let counterFailure = 0;
  setTimeout(playAudio, 800);

  function playAudio() {
    if (shuffledWordCards.length > 0) {
      audio.setAttribute(
        "src",
        shuffledWordCards[shuffledWordCards.length - 1].audio
      );
      state.activeAudio = shuffledWordCards[shuffledWordCards.length - 1].audio;
      cardsLayout.addEventListener("click", cardClickHandler);
    } else {
      if (counterFailure) {
        audio.setAttribute("src", "./src/audio/game_sounds/failure.mp3");
      } else {
        audio.setAttribute("src", "./src/audio/game_sounds/success.mp3");
      }
      state.isPlayOn = !state.isPlayOn;
      document.body.prepend(
        new ResultModal(counterSuccess, counterFailure).createResultModal()
      );
    }
  }

  function cardClickHandler(e) {
    if (!e.target.classList.contains("word-card__img_disabled")) {
      if (
        e.target.parentElement.parentElement.dataset.word ===
        shuffledWordCards[shuffledWordCards.length - 1].word
      ) {
        counterSuccess++;
        audio.setAttribute("src", "./src/audio/game_sounds/correct.mp3");
        e.target.classList.add("word-card__img_disabled");
        addStarIcon("success");
        shuffledWordCards.pop();
        setTimeout(playAudio, 800);
      } else if (!e.target.classList.contains("cards-layout")) {
        counterFailure++;
        audio.setAttribute("src", "./src/audio/game_sounds/error.mp3");
        addStarIcon("failure");
      }
    } 
  }
}

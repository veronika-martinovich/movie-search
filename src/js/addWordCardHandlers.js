import { state, MODE1, MODE2 } from "./state";

export function addWordCardHandlers(cardsLayout, audio) {
  cardsLayout.addEventListener("click", function (e) {
    if (state.page !== "all_categories" && state.mode === MODE1) {
      let audioWord = "";
      if (e.target.classList.contains("word-card")) {
        audioWord = e.target.dataset.word;
      }
      if (e.target.classList.contains("word-card__img")) {
        audioWord = e.target.parentElement.parentElement.dataset.word;
      }
      if (e.target.classList.contains("word-card__text")) {
        audioWord = e.target.parentElement.parentElement.dataset.word;
      }
      audio.setAttribute("src", `./src/audio/word_card_audio/${audioWord}.mp3`);
      
      if (e.target.classList.contains("word-card__translation-icon")) {
        e.target.parentElement.parentElement.classList.add("word-card_flipped");
      }
    }
  });
  
  cardsLayout.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("word-card")) {
      e.target.classList.remove("word-card_flipped");
    }
  });
}

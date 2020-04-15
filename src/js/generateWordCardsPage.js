import { WordCard } from "./WordCard";
import { state, MODE1, MODE2 } from "./state";
import { createPageHeading } from "./createPageHeading";
import { addWordCardHandlers } from "./addWordCardHandlers";

let wordCards = [];
function generateWordCardsPage(words) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  createPageHeading(state.page);
  wordCards = [];
  const cardsLayout = document.createElement("div");
  cardsLayout.classList.add("cards-layout");

  words.forEach((word) => {
    const wordCard = new WordCard(
      word.word,
      word.translation,
      word.imageSrc,
      word.audio,
      state.mode
    );
    wordCards.push(wordCard);
    cardsLayout.append(wordCard.createWordCard());
  });
  state.activeWordCards = wordCards;

  if (state.mode === MODE2) {
    const playButton = document.createElement("button");
    playButton.classList.add("button_play");
    playButton.textContent = state.isPlayOn ? "RESTART" : "START";
    wrapper.append(playButton);
  }

  const audio = document.createElement("audio");
  audio.classList.add("audio");
  audio.setAttribute("autoplay", true);

  wrapper.append(cardsLayout, audio);  

  addWordCardHandlers(cardsLayout, audio);
}

export { wordCards, generateWordCardsPage };

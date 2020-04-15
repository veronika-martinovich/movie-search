import { WordCard } from "./WordCard";
import { state, MODE1 } from "./state";
import { createPageHeading } from "./createPageHeading";

let wordCards = [];
function generateWordCardsPage(words) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = '';
  createPageHeading(state.page);
  wordCards = [];
  
  const cardsLayout = document.createElement('div');
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

  const audio = document.createElement("audio");
  audio.classList.add("audio");
  audio.setAttribute("autoplay", true);

  wrapper.append(cardsLayout, audio);

  // Word cards
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

export { wordCards, generateWordCardsPage };

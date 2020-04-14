import { WordCard } from "./WordCard";
import { state } from "./state";

let wordCards = [];
function generateWordCardsPage(words) {
  wordCards = [];
  const cardsLayout = document.querySelector(".cards-layout");
  cardsLayout.innerHTML = "";
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

  if (!document.querySelector(".audio")) {
    const audio = document.createElement("audio");
    audio.classList.add("audio");
    audio.setAttribute("autoplay", true);
    cardsLayout.after(audio);
  }
}

export { wordCards, generateWordCardsPage };

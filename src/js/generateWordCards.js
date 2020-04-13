import { WordCard } from "./WordCard";
import { state } from "./state";

let wordCards = [];
function generateWordCards(words) {
  wordCards = [];
  const cardsLayout = document.querySelector(".cards-layout");
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
}

export { wordCards, generateWordCards };

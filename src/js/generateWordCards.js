import { WordCard } from "./WordCard";
import { state } from "./state";

const wordCards = [];
function generateWordCards(words) {
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
}

export { wordCards, generateWordCards };

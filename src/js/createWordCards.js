import { words } from "./data";
import { WordCard } from "./WordCard";

const wordCards = [];
function createWordCards() {
  const cardsLayout = document.querySelector('.cards-layout');
  words.forEach(word => {
    const wordCard = new WordCard(word.word, word.translation, word.image, word.audio);
    wordCards.push(wordCard);
    cardsLayout.append(wordCard.generateWordCard());
  })
}

export { wordCards, createWordCards };

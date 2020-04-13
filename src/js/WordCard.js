export class WordCard {
  constructor(word, translation, imageSrc, audio, mode) {
    this.word = word;
    this.translation = translation;
    this.imageSrc = imageSrc;
    this.audio = audio;
    this.mode = mode;
    this.wordCard = '';
    this.cardImage = '';
    this.cardText = '';
  }

  createWordCard() {
    this.wordCard = document.createElement('div');
    this.wordCard.className = "word-card";
    this.cardImage = document.createElement('div');
    this.cardImage.className = "word-card__img";
    this.cardImage.setAttribute('style', `background-image: url(${this.imageSrc})`);
    this.cardText = document.createElement('span');
    this.cardText.className = "word-card__text";
    this.cardText.textContent = `${this.word}`;
    this.wordCard.append(this.cardImage, this.cardText);
    if (this.mode === 'Train') {
      this.wordCard.classList.add('word-card_train');
      this.cardImage.classList.add('word-card__img_train');
      this.cardText.classList.add('word-card__text_train');
    } else {
      this.wordCard.classList.add('word-card_play');
      this.cardImage.classList.add('word-card__img_play');
      this.cardText.classList.add('word-card__text_play');
    }
    return this.wordCard
  }

  changeWordCardMode(mode) {
    this.mode = mode;
    this.wordCard.classList.toggle('word-card_train');
    this.wordCard.classList.toggle('word-card_play');
    this.cardImage.classList.toggle('word-card__img_train');
    this.cardImage.classList.toggle('word-card__img_play');
    this.cardText.classList.toggle('word-card__text_train');
    this.cardText.classList.toggle('word-card__text_play');
  }
}

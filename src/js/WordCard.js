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
    this.cardImage = document.createElement('img');
    this.cardImage.className = "word-card__img";
    this.cardImage.setAttribute('src', `${this.imageSrc}`)
    this.wordCard.append(this.cardImage);
    if (this.mode === 'Train') {
      this.wordCard.classList.add('word-card_train');
      this.cardImage.classList.add('word-card__img_train');
      this.cardText = document.createElement('span');
      this.cardText.className = "word-card__text";
      this.cardText.textContent = `${this.word}`;
      this.wordCard.append(this.cardText);
    } else {
      this.wordCard.classList.add('word-card_play');
      this.cardImage.classList.add('word-card__img_play');
    }
    return this.wordCard
  }

  /* changeSetCardMode(mode) {
    this.mode = mode;
    this.setCard.classList.toggle('set-card_train');
    this.setCard.classList.toggle('set-card_play');
    this.cardHeader.classList.toggle('set-card__header_train');
    this.cardHeader.classList.toggle('set-card__header_play');
  } */
}

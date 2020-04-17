export class WordCard {
  constructor(word, translation, imageSrc, audio, mode) {
    this.word = word;
    this.translation = translation;
    this.imageSrc = imageSrc;
    this.audio = audio;
    this.mode = mode;
    this.wordCard = "";
    this.wordCardFront = "";
    this.wordCardBack = "";
    this.cardImage = "";
    this.cardText = "";
    this.cardTranslationIcon = "";
    this.cardTranslationText = "";
  }

  createWordCard() {
    this.wordCard = document.createElement("div");
    this.wordCard.className = "word-card";
    this.wordCard.setAttribute("data-word", `${this.word}`);
    this.wordCardFront = document.createElement("div");
    this.wordCardFront.classList.add("word-card__front");
    this.cardImage = document.createElement("div");
    this.cardImage.className = "word-card__img";
    this.cardImage.setAttribute(
      "style",
      `background-image: url(${this.imageSrc})`
    );
    this.cardText = document.createElement("span");
    this.cardText.className = "word-card__text";
    this.cardText.textContent = `${this.word}`;
    this.cardTranslationIcon = document.createElement("span");
    this.cardTranslationIcon.className = "word-card__translation-icon";
    this.wordCardFront.append(
      this.cardImage,
      this.cardText,
      this.cardTranslationIcon
    );

    this.wordCardBack = document.createElement("div");
    this.wordCardBack.classList.add("word-card__back");
    this.cardTranslationText = document.createElement("span");
    this.cardTranslationText.classList.add("word-card__translation-text");
    this.cardTranslationText.textContent = this.translation;
    this.wordCardBack.append(this.cardTranslationText);

    this.wordCard.append(this.wordCardFront, this.wordCardBack);

    if (this.mode === "Train") {
      this.wordCard.classList.add("word-card_train");
      this.cardImage.classList.add("word-card__img_train");
      this.cardText.classList.add("word-card__text_train");
      this.cardTranslationIcon.classList.add(
        "word-card__translation-icon_train"
      );
    } else {
      this.wordCard.classList.add("word-card_play");
      this.cardImage.classList.add("word-card__img_play");
      this.cardText.classList.add("word-card__text_play");
      this.cardTranslationIcon.classList.add(
        "word-card__translation-icon_play"
      );
    }
    return this.wordCard;
  }
}

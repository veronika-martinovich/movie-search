export class CategoryCard {
  constructor(title, name, mode) {
    this.title = title;
    this.name = name;
    this.mode = mode;
    this.categoryCard = '';
    this.cardHeader = '';
    this.cardTitle = '';
    this.cardIcon = '';
  }

  createCategoryCard() {
    this.categoryCard = document.createElement('div');
    this.categoryCard.className = "category-card";
    this.categoryCard.setAttribute('data-category', `${this.name}`);
    this.cardHeader = document.createElement('div');
    this.cardHeader.className = "category-card__header";
    this.cardTitle = document.createElement('h4');
    this.cardTitle.className = "category-card__title";
    this.cardTitle.textContent = this.title;
    this.cardHeader.append(this.cardTitle);
    this.cardIcon = document.createElement('span');
    this.cardIcon.className = `category-card__icon ico ico_${this.name}`;
    this.categoryCard.append(this.cardHeader, this.cardIcon);
    if (this.mode === 'Train') {
      this.categoryCard.classList.add('category-card_train');
      this.cardHeader.classList.add('category-card__header_train');
    } else {
      this.categoryCard.classList.add('category-card_play');
      this.cardHeader.classList.add('category-card__header_play');
    }
    return this.categoryCard;
  }

  changeCategoryCardMode(mode) {
    this.mode = mode;
    this.categoryCard.classList.toggle('category-card_train');
    this.categoryCard.classList.toggle('category-card_play');
    this.cardHeader.classList.toggle('category-card__header_train');
    this.cardHeader.classList.toggle('category-card__header_play');
  }
}

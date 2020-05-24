export class FilmBorder {
  constructor(cellAmount) {
    this.cellAmount = cellAmount;
  }

  render() {
    return ` <div class="film-border">
        ${this.addCells()}
      </div>`;
  }

  addCells() {
    let template = ``;
    for (let i = 0; i < this.cellAmount; i++) {
      template += `<div class="film-border__cell"></div>`;
    }
    return template;
  }
}

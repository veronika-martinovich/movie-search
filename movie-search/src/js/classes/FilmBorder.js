export class FilmBorder {
  constructor(cellAmount) {
    this.cellAmount = cellAmount;
  }

  render() {
    return (
      ` <div class="film-border">
        ${this.addCells()}
      </div>`
    )
  }

  addCells(){
    let template = ``;
    for (let i = 0; i < this.cellAmount; i++) {
      template += `<div class="film-border__cell"></div>`
    }
    return template;
  }


  /* constructor(cellAmount) {
    this.cellAmount = cellAmount;
    this.filmBorder = '';
    this.filmPartition = '';
  }

  createFilmBorder() {
    this.filmBorder = document.createElement('div');
    this.filmBorder.className = "film-border";
    this.addCells();
    return this.filmBorder;
  }

  addCells() {
    for (let i = 0; i < this.cellAmount; i++) {
      this.filmCell = document.createElement('div');
      this.filmCell.className = "film-border__cell";
      this.filmBorder.append(this.filmCell);
    }
  } */
}

import { state } from "../page_functions_and_state/state";

export class KeyboardButton {
  constructor(
    size,
    type,
    firstValue,
    secondValue,
    firstShift,
    secondShift,
    keyCode,
    activeKeyboardValue
  ) {
    this.size = size;
    this.type = type;
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.firstShift = firstShift;
    this.secondShift = secondShift;
    this.keyCode = keyCode;
    this.activeValue = activeKeyboardValue;
  }

  render() {
    state.keyboardButtons.push(this);
    return `<div class="button button_size_${this.size} button_type_${
      this.type
    } ${this.keyCode}" data-type="${this.type}">${this[this.activeValue]}</div>`;
  }
}

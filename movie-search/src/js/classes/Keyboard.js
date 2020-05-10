import { KeyboardButton } from "./KeyboardButton";
import { buttonsData } from "../keyboard_functions/buttonsData";
import { state } from "../page_functions_and_state/state";

export class Keyboard {
  render() {
    return `<div class="keyboard">${buttonsData.map((button) =>
      new KeyboardButton(
        button.size,
        button.type,
        button.firstValue,
        button.secondValue,
        button.firstShift,
        button.secondShift,
        button.keyCode,
        state.activeKeyboardValue
      ).render()
    ).join('')}
    </div>`;
  }
}

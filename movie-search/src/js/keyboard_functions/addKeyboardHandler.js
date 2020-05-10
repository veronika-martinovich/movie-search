import { handleKeyboardClick } from "./handleKeyboardClick";

export function addKeyboardHandler() {
  document
    .querySelector(".keyboard")
    .addEventListener("click", handleKeyboardClick);
}

import { Keyboard } from "../classes/Keyboard";
import { addKeyboardIconHandler } from "./addKeyboardIconHandler";
import { addKeyboardHandler } from "./addKeyboardHandler";

function generateKeyboard() {
  const keyboardContainer = document.querySelector(".keyboard-container");
  keyboardContainer.innerHTML = new Keyboard().render();
  addKeyboardIconHandler();
  addKeyboardHandler();
}

generateKeyboard();

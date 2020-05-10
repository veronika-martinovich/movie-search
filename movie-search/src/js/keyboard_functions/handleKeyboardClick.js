import { state } from "../page_functions_and_state/state";
import { searchMovies } from "../search_functions/searchMovies";


export function handleKeyboardClick(e) {
  const textInput = document.querySelector(".search__text");
  const domButtons = document.querySelectorAll(".button");
  if (
    (e.target.dataset.type === "input" ||
      e.target.dataset.type === "input-system") &&
    !state.isKeyboardCapsLockOn
  ) {
    textInput.value += e.target.textContent.toLowerCase();
  }

  if (
    (e.target.dataset.type === "input" ||
      e.target.dataset.type === "input-system") &&
    state.isKeyboardCapsLockOn
  ) {
    textInput.value += e.target.textContent.toUpperCase();
  }

  if (e.target.textContent === "Backspace") {
    if (textInput.selectionStart === 0) {
      textInput.setSelectionRange(
        textInput.value.length,
        textInput.value.length
      );
    }
    let pos = textInput.selectionStart - 1;
    textInput.value =
      textInput.value.slice(0, pos) + textInput.value.slice(pos + 1);
    textInput.setSelectionRange(pos, pos);
  }

  if (e.target.textContent === "Del") {
    if (textInput.selectionStart === 0) {
      textInput.setSelectionRange(
        textInput.value.length,
        textInput.value.length
      );
    }
    let pos = textInput.selectionStart;
    textInput.value =
      textInput.value.slice(0, pos) + textInput.value.slice(pos + 1);
    textInput.setSelectionRange(pos, pos);
  }

  if (e.target.textContent === "Tab") {
    textInput.textContent += "    ";
  }

  if (e.target.textContent === "Enter") {
    searchMovies(e);
    document
        .querySelector(".keyboard-container")
        .classList.toggle("keyboard-container_active");
  }

  if (e.target.textContent === "CapsLock") {
    e.target.classList.toggle("button_active_caps");
    state.isKeyboardCapsLockOn = !state.isKeyboardCapsLockOn;
  }

  if (e.target.textContent === "Рус" || e.target.textContent === "En") {
    console.log('lkjkkl')
    domButtons.forEach(domButton => {
      let keyboardButton = state.keyboardButtons.find(button => {
        return button[state.activeKeyboardValue] == domButton.innerHTML;
      });
      domButton.innerHTML = keyboardButton[state.nextKeyboardValue];
    });
    state.activeKeyboardValue = state.nextKeyboardValue;
    sessionStorage.setItem("activeKeyboardValue", `${state.activeKeyboardValue}`);
    state.nextKeyboardValue = state.activeKeyboardValue === "firstValue" ? "secondValue" : "firstValue";
    sessionStorage.setItem("nextKeyboardValue", `${state.nextKeyboardValue}`);
  }
}

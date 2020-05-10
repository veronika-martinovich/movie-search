export function addKeyboardIconHandler() {
  document
    .querySelector(".icon_keyboard")
    .addEventListener("click", function () {
      document
        .querySelector(".keyboard-container")
        .classList.toggle("keyboard-container_active");
    });
}

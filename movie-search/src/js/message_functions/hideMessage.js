export function hideMessage() {
  if (document.querySelector(".message")) {
    document.querySelector(".message").remove();
  }
}

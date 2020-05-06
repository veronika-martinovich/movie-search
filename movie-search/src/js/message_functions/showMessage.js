import { Message } from "../classes/Message";

export function showMessage(messageText) {
  const message = new Message({ messageText }).render();
  document.querySelector(".search").after(message);
}

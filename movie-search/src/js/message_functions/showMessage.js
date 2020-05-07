import { Message } from "../classes/Message";

export function showMessage(messageText) {
  if (document.querySelector('.message')) {
    document.querySelector('.message').innerHTML += `<br>${messageText}`;
  } else {
    const message = new Message({ messageText }).render();
    document.querySelector(".search").after(message);
  }
}

export class Message {
  constructor(props) {
    this.messageText = props.messageText;
    this.message = '';
  }

  render() {
    this.message = document.createElement("div");
    this.message.classList.add("message");
    this.message.textContent = this.messageText;
    return this.message;
  }
}

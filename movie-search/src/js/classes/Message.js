export class Message {
  constructor(props) {
    this.message = props.message;
  }

  render() {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = this.message;
    return spinner;
  }
}

import { generatePage } from "../pages_functions/generatePage";
import { state } from "../state";
import { changeNavLinksStyles } from "../styles_functions/changeNavLinksStyles";

export class ResultModal {
  constructor(counterSuccess, counterFailure) {
    this.counterSuccess = counterSuccess;
    this.counterFailure = counterFailure;
    this.overlay = "";
    this.resultModal = "";
    this.resultIcon = "";
    this.resultText = "";
    this.resultButton = "";
  }

  createResultModal() {
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay");
    this.resultModal = document.createElement("div");
    this.resultModal.classList.add("result-modal");
    this.resultIcon = document.createElement("span");
    this.resultIcon.classList.add("result-modal__icon");
    this.resultText = document.createElement("p");
    this.resultText.classList.add("result-modal__text");
    this.resultButton = document.createElement("button");
    this.resultButton.className = "button button_close";
    this.resultButton.textContent = "Close";
    this.addCloseButtonHandler();
    if (!this.counterFailure) {
      this.resultIcon.classList.add("result-modal__icon_success");
      this.resultText.textContent = "Congratulations! \n You win!";
    } else {
      this.resultIcon.classList.add("result-modal__icon_failure");
      this.resultText.textContent = `Game over!\n Your result: ${this.counterFailure} errors`;
    }
    this.resultModal.append(
      this.resultIcon,
      this.resultText,
      this.resultButton
    );
    this.overlay.append(this.resultModal);
    return this.overlay;
  }

  addCloseButtonHandler() {
    this.resultButton.addEventListener("click", function () {
      document.querySelector(".overlay").remove();
      state.page = "all_categories";
      generatePage("all_categories");
      changeNavLinksStyles(
        document.querySelector('[data-category="all_categories"]')
      );
    });
  }
}

import { showMessage } from "./showMessage";

describe("showMessage", () => {
  it("should create message markup", () => {
    document.body.innerHTML = `<div class="wrapper main-wrapper">
    <form class="search"></form>
    </div>`;
    showMessage("No search results");
    expect(document.querySelector(".message").textContent).toMatch(
      "No search results"
    );
  });

  it("should add new text to existing text", () => {
    document.body.innerHTML = `<div class="wrapper main-wrapper">
    <form class="search"></form>
    <div class="message">Searching results for 'Diary'.</div>
    </div>`;
    showMessage("No results for 'Diary'.");
    expect(document.querySelector(".message").textContent).toMatch(
      "Searching results for 'Diary'.No results for 'Diary'."
    );
  });
});

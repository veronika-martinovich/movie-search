import { hideMessage } from "./hideMessage";

describe("hideMessage", () => {
  it("should remove message markup", () => {
    document.body.innerHTML = `<div class="wrapper main-wrapper">
    <form class="search"></form>
    <div class="message">Searching results for 'Diary'.</div>
    </div>`;
    hideMessage();
    expect(document.querySelector(".message")).toBeNull();
  });
});

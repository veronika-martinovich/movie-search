import { Spinner } from "../classes/Spinner";

export function addSpinner() {
  if (!document.querySelector(".spinner")) {
    const spinner = new Spinner().render();
    document.querySelector(".search").append(spinner);
  }
}

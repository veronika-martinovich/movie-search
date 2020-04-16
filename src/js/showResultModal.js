

  let closeModalButton = document.createElement("button");
  closeModalButton.classList.add("button");
  closeModalButton.classList.add("button_primary");
  closeModalButton.textContent = "OK";
  closeModalButton.addEventListener("click", closeModal);

  modal.append(quoteStatement, quoteTheme, quoteDetails, closeModalButton);
  overlay.append(modal);
  document.body.prepend(overlay);


function closeModal() {
  document.querySelector(".overlay").remove();
  document.querySelector(".form__name").value = "";
  document.querySelector(".form__email").value = "";
  document.querySelector(".form__subject").value = "";
  document.querySelector(".form__details").value = "";
}


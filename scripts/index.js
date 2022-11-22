const editButton = document.querySelector(".profile__edit-button");
const closeIcon = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const formElement = document.querySelector(".form");
const name = document.querySelector(".profile__name");
const description = document.querySelector(".profile__job");

function showPopup() {
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
  popup.classList.add("popup_open");
}

function hidePopup() {
  popup.classList.remove("popup_open");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  hidePopup();
}

editButton.addEventListener("click", showPopup);
closeIcon.addEventListener("click", hidePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);

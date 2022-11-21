let editButton = document.querySelector(".profile__edit-button");
let closeIcon = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");
let nameInput = document.querySelector("#name");
let descriptionInput = document.querySelector("#description");
let formElement = document.querySelector(".form");
let name = document.querySelector(".profile__name");
let description = document.querySelector(".profile__job");

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

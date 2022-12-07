const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeIcon = document.querySelectorAll(".popup__close-icon");
const editPopup = document.querySelector("#edit_popup");
const addPopup = document.querySelector("#add_popup");
const imgPopup = document.querySelector("#img_popup");
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const editForm = document.querySelector("#edit_form");
const addForm = document.querySelector("#add_form");
const name = document.querySelector(".profile__name");
const description = document.querySelector(".profile__job");
const cardTemplate = document.querySelector("#card-template").content;
const cardsContent = document.querySelector(".cards-content");

const showEditPopup = () => {
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
  openPopup(editPopup);
};

const hidePopup = (e) => {
  const poupContainer = e.target.closest(".popup");
  poupContainer.classList.remove("popup_open");
};

const handleImgPopup = (e) => {
  openPopup(imgPopup);
  imgPopup.querySelector(".popup__img").src = e.target.src;
  imgPopup.querySelector(".popup__title").textContent =
    e.target.alt.substring(10);
};

const handleLikeButton = (e) => {
  e.target.classList.toggle("card__heart-icon_active");
};

const handleDeleteButton = (e) => {
  e.target.closest(".card").remove();
};

const setCardValues = (card, cardElement) => {
  const { name, link } = card;
  const image = cardElement.querySelector(".card__img");
  image.src = link;
  image.alt = `Imagen de ${name}`;
  cardElement.querySelector(".card__title").textContent = card.name;
};

const addCardEventHandlers = (cardElement) => {
  cardElement
    .querySelector(".card__heart-icon")
    .addEventListener("click", handleLikeButton);
  cardElement
    .querySelector(".card__delete")
    .addEventListener("click", handleDeleteButton);
  cardElement
    .querySelector(".card__img")
    .addEventListener("click", handleImgPopup);
};

const createCardElement = (card, content) => {
  const cardElement = cardTemplate.cloneNode(true);
  setCardValues(card, cardElement);
  addCardEventHandlers(cardElement);
  content.prepend(cardElement);
};

const handleEditProfileFormSubmit = (e) => {
  e.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  hidePopup(e);
};

const handleAddCardFormSubmit = (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#title");
  const linkInput = document.querySelector("#enlace");
  createCardElement(
    { name: titleInput.value, link: linkInput.value },
    cardsContent
  );
  titleInput.value = "";
  linkInput.value = "";
  hidePopup(e);
};
document.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((card) => {
    console.log(card);
    createCardElement(card, cardsContent);
  });
});
const openPopup = (popup) => {
  popup.classList.add("popup_open");
};
editButton.addEventListener("click", showEditPopup);
editForm.addEventListener("submit", handleEditProfileFormSubmit);
addForm.addEventListener("submit", handleAddCardFormSubmit);
addButton.addEventListener("click", () => openPopup(addPopup));
Array.from(closeIcon).forEach((button) => {
  button.addEventListener("click", hidePopup);
});

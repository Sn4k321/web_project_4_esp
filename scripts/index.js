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

const cardTemplate = document.querySelector('.card-template').content;
const cardsContent = document.querySelector('.cards-content');
const popupImage = document.querySelector('.popup_img');
const closeImage = popupImage.querySelector('.popup__close-icon');
closeImage.addEventListener('click', () => closePopUp(popupImage));


initialCards.forEach((item) => {
  addCard(item);
});

function handleCardSubmit(evt) {
  evt.preventDefault();
  const nameElement = document.querySelector('#title');
  const linkElement = document.querySelector('#enlace');
  const item = {
    name: nameElement.value,
    link: linkElement.value,
  };
  if (!nameElement.validity.valid) {
    return;
  }
  if (!linkElement.validity.valid) {
    return;
  }
  addCard(item);
  closePopUp(popupAddCard);
}

function addCard(item) {
  const cardNode = cardTemplate.querySelector('.card').cloneNode(true);

  cardNode.querySelector('.card__title').textContent = item.name;
  cardNode.querySelector('.card__img').src = item.link;

  const deleteBtn = cardNode.querySelector('.card__delete');
  deleteBtn.addEventListener('click', () => {
    cardNode.remove();
  });

  const heartICon = cardNode.querySelector('.card__heart-icon');
  heartICon.addEventListener('click', () => {
    heartICon.classList.toggle('card__heart-icon_active');
  });

  const cardImage = cardNode.querySelector('.card__img');
  cardImage.addEventListener('click', () => openPopUp(popupImage));

  cardNode.querySelector('.card__img').addEventListener('click', function () {
    const popupImg = document.querySelector('.popup__img');
    const popupTitle = document.querySelector('.popup__title');

    popupImg.src = item.link;
    popupTitle.textContent = item.name;
  });
  cardsContent.prepend(cardNode);
}

const submitCardButton = document.querySelector('.form__button-create-card');

submitCardButton.addEventListener('click', handleCardSubmit);

const openAddCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_newPlace');
const closeAddCardButton = popupAddCard.querySelector('.popup__close-icon');

openAddCardButton.addEventListener('click', () => openPopUp(popupAddCard));
closeAddCardButton.addEventListener('click', () => closePopUp(popupAddCard));

const openFormButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_profile-edit');
const closeButton = popupEditProfile.querySelector('.popup__close-icon');

openFormButton.addEventListener('click', () => openPopUp(popupEditProfile));
closeButton.addEventListener('click', () => closePopUp(popupEditProfile));

const form = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const inputName = document.getElementById('name');
const inputAbout = document.getElementById('description');


function handleFormSubmit(evt) {
  evt.preventDefault();
  if (!inputName.validity.valid) {
    return;
  }
  if (!inputAbout.validity.valid) {
    return;
  }
  profileName.textContent = inputName.value;
  profileJob.textContent = inputAbout.value;
  closePopUp(popupEditProfile);
}

form.addEventListener('submit', handleFormSubmit);

function openPopUp(htmlObj) {
  htmlObj.classList.add('popup_open');
  document.addEventListener('keydown', escKey);
}

function closePopUp(htmlObj) {
  htmlObj.classList.remove('popup_open');
  document.removeEventListener('keydown', escKey);
}

function escKey(evt) {
  if (evt.key === 'Escape') {
    closePopUp(popupAddCard);
    closePopUp(popupImage);
    closePopUp(popupEditProfile);
  }
}

const imgPopup = document.querySelector('#frame-img');
const addPopup = document.querySelector('#frame-newPlace');
const editPopup = document.querySelector('#frame-profile-edit');

function closeClick(closeAdd) {
  closePopUp(closeAdd);
}

imgPopup.addEventListener('click', () => {
  closeClick(popupImage);
});

editPopup.addEventListener('click', () => {
  closeClick(popupEditProfile);
});

addPopup.addEventListener('click', () => {
  closeClick(popupAddCard);
});
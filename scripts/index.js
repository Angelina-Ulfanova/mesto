import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from "./constants.js";

const popupElementProfile = document.querySelector(".popup_profile");
const profileOpenButton = document.querySelector(".profile__edit-button");
const nameInput = popupElementProfile.querySelector("#name");
const jobInput = popupElementProfile.querySelector("#job");
const formName = document.querySelector(".profile__title");
const formJob = document.querySelector(".profile__subtitle");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupElementAdd = document.querySelector(".popup_element_add");
const titleInput = popupElementAdd.querySelector("#title");
const imageInput = popupElementAdd.querySelector("#image");
const formImage = document.querySelector(".element__img");
const formTitle = document.querySelector(".element__title");
const profileAddElementButton = document.querySelector(".profile__add-button");
const popupFormAdd = document.querySelector(".popup__form_element_add");
const elements = document.querySelector(".elements");
const template = document.querySelector(".template").content;
const popupImage = document.querySelector(".popup_image");
const popupCloseImageButton = document.querySelector(".popup__close_image");
const popupCloseButtons = document.querySelectorAll(".popup__close");
const popupImageTitle = popupImage.querySelector(".popup__title_image");
const popupImagePhoto = popupImage.querySelector(".popup__photo_image");
const allPopups = document.querySelectorAll(".popup");
const popupButtonAdd = document.querySelector(".popup__button_element_add");
const templateContainer = "#template";
const handleProfileForm = document.forms.profileForm;
const handleFormAdd = document.forms.addForm;

const activateValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible'
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

// открытие попапа профиля
const openPopupProfile = function () {
  nameInput.value = formName.textContent;
  jobInput.value = formJob.textContent;
  openPopup(popupElementProfile);
};

profileOpenButton.addEventListener("click", openPopupProfile);

// открытие попапа добавления картинки
const openPopupAdd = function () {
  openPopup(popupElementAdd);
};

profileAddElementButton.addEventListener("click", openPopupAdd);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

//универсальный обработчик крестиков
popupCloseButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// закрытие попапов кликом на overlay
allPopups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
    closePopup(popup);
    };
  });
});

//функция закрытия попапа на Esc
function closePopupEsc(evt) {  
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  };
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  formName.textContent = nameInput.value;
  formJob.textContent = jobInput.value;
  closePopup(popupElementProfile);
};

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

function renderCard(item) {
  const card = new Card(item, templateContainer, openPopupImage);
  const cardItem = card.createCard();
  return cardItem;
};

function addCard(cardsElement, card) {
  cardsElement.prepend(card);
};

initialCards.forEach(item => {
  addCard(elements, renderCard(item));
});

function openPopupImage(item) {
  popupImagePhoto.src = item.link;
  popupImagePhoto.alt = item.name;
  popupImageTitle.textContent = item.name;
  openPopup(popupImage);
};

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const cardValue = { name: titleInput.value, link: imageInput.value };
  addCard(elements, renderCard(cardValue));
  closePopup(popupElementAdd);
  evt.target.reset();  
};

popupFormAdd.addEventListener("submit", handleFormSubmitAdd);
  
const formProfileValidation = new FormValidator(activateValidation, handleProfileForm);
const formElementAddValidation = new FormValidator(activateValidation, handleFormAdd);

formProfileValidation.enableValidation();
formElementAddValidation.enableValidation();



const popupElement = document.querySelector(".popup");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const nameInput = popupElement.querySelector("#name");
const jobInput = popupElement.querySelector("#job");
const formName = document.querySelector(".profile__title");
const formJob = document.querySelector(".profile__subtitle");
const popupForm = document.querySelector(".popup__form");
const popupElementAdd = document.querySelector(".popup_element_add");
const titleInput = popupElementAdd.querySelector("#title");
const imageInput = popupElementAdd.querySelector("#image");
const formImage = document.querySelector(".element__img");
const formTitle = document.querySelector(".element__title");
const popupAddElementButton = document.querySelector(".profile__add-button");
const popupCloseAddElementButton = popupElementAdd.querySelector(".popup__close_element_add");
const popupFormAdd = document.querySelector(".popup__form_element_add");
const elements = document.querySelector(".elements");
const template = document.querySelector(".template").content;

const openPopup = function () {
        nameInput.value = formName.textContent;
        jobInput.value = formJob.textContent;
        popupElement.classList.add("popup_opened");
        };

const closePopup = function () {
        popupElement.classList.remove("popup_opened");
        };
 
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

function handleFormSubmit (evt) {
        evt.preventDefault();
        formName.textContent = nameInput.value;
        formJob.textContent = jobInput.value;
        closePopup();
        }

popupForm.addEventListener("submit", handleFormSubmit);

const initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
      ];

initialCards.forEach(renderItem);

function renderItem(item) {
        const card = createCard(item);
        elements.prepend(card);
      
const deleteElement = document.querySelector(".element__img-trash");
        deleteElement.addEventListener("click", function(){
const clearElement = deleteElement.closest(".element");
        clearElement.remove();
        });
              
const likeActive = document.querySelector(".element__like");
        likeActive.addEventListener("click", function(evt){
        evt.target.classList.toggle("element__like_active");
        });
        };
      
function createCard(item) {
const cardsElement = template.querySelector(".element").cloneNode(true);
        cardsElement.querySelector(".element__img").src = item.link;
        cardsElement.querySelector(".element__title").textContent = item.name;
        cardsElement.querySelector(".element__img").addEventListener("click", () => openPopupImage(item));
        return cardsElement;
        };
      
function openPopupImage(item) {
const popupImage = document.querySelector(".popup_image");
        popupImage.querySelector(".popup__photo_image").src = item.link;
        popupImage.querySelector(".popup__title_image").textContent = item.name;
        popupImage.classList.add("popup_opened");

const popupCloseImageButton = document.querySelector(".popup__close_image");
const closePopupImage = function () {
        popupImage.classList.remove("popup_opened");
        };
        popupCloseImageButton.addEventListener("click", closePopupImage);

        };

function addCard() {
        cardsElement.prepend(card);
        };

const openPopupAdd = function () {
        popupElementAdd.classList.add("popup_opened");
        };

const closePopupAdd = function () {
        popupElementAdd.classList.remove("popup_opened");
        };
 
popupAddElementButton.addEventListener("click", openPopupAdd);
popupCloseAddElementButton.addEventListener("click", closePopupAdd);

function handleFormSubmitAdd (evt) {
        evt.preventDefault();
const card = {name: titleInput.value, link: imageInput.value};
        renderItem(card);
        closePopupAdd();
        };

popupFormAdd.addEventListener("submit", handleFormSubmitAdd);

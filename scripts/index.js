
const popupElementProfile = document.querySelector(".popup_profile");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
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
const popupAddElementButton = document.querySelector(".profile__add-button");
const popupFormAdd = document.querySelector(".popup__form_element_add");
const elements = document.querySelector(".elements");
const template = document.querySelector(".template").content;
const popupImage = document.querySelector(".popup_image");
const popupCloseImageButton = document.querySelector(".popup__close_image");
const popupCloseButton = document.querySelectorAll(".popup__close");
const popupImageTitle = popupImage.querySelector(".popup__title_image");
const popupImagePhoto = popupImage.querySelector(".popup__photo_image");
const allPopup = document.querySelectorAll(".popup");
const popupButtonAdd = document.querySelector(".popup__button_element_add");


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

popupOpenButtonElement.addEventListener("click", openPopupProfile);

// открытие попапа добавления картинки
const openPopupAdd = function () {
        openPopup(popupElementAdd);
        // деактивация кнопки, если инпуты пустые
        disableButton(popupButtonAdd, enableValidation);
};

popupAddElementButton.addEventListener("click", openPopupAdd);

function closePopup(popup) {
        popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", closePopupEsc);
};

//универсальный обработчик крестиков
popupCloseButton.forEach((button) => {
        const popup = button.closest(".popup");
        button.addEventListener("click", () => closePopup(popup));
});

//закрытие попапов кликом на overlay
allPopup.forEach((overlay) => {
        const popup = overlay.closest(".popup");
        overlay.addEventListener("click", (evt) => {
                if (evt.target === evt.currentTarget) {
                        closePopup(popup);
                };
        });
});

//функция закрытия попапа на Esc
function closePopupEsc(evt) {
        const popupOpened = document.querySelector(".popup_opened");
        if (evt.key === "Escape") {
                closePopup(popupOpened);
        };
};

function handleFormSubmit(evt) {
        evt.preventDefault();
        formName.textContent = nameInput.value;
        formJob.textContent = jobInput.value;
        closePopup(popupElementProfile);
};

popupFormProfile.addEventListener("submit", handleFormSubmit);

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
};

function createCard(item) {
        const cardsElement = template.querySelector(".element").cloneNode(true);
        cardsElement.querySelector(".element__img").src = item.link;
        cardsElement.querySelector(".element__img").alt = item.name;
        cardsElement.querySelector(".element__title").textContent = item.name;
        cardsElement.querySelector(".element__img").addEventListener("click", () => openPopupImage(item));

        const deleteElement = cardsElement.querySelector(".element__img-trash");
        deleteElement.addEventListener("click", function () {
                const clearElement = deleteElement.closest(".element");
                clearElement.remove();
        });

        const likeActive = cardsElement.querySelector(".element__like");
        likeActive.addEventListener("click", function (evt) {
                evt.target.classList.toggle("element__like_active");
        });

        return cardsElement;
};

function openPopupImage(item) {
        popupImagePhoto.src = item.link;
        popupImagePhoto.alt = item.name;
        popupImageTitle.textContent = item.name;
        openPopup(popupImage);
};

function addCard() {
        cardsElement.prepend(card);
};

function handleFormSubmitAdd(evt) {
        evt.preventDefault();
        const card = { name: titleInput.value, link: imageInput.value };
        renderItem(card);
        closePopup(popupElementAdd);
        evt.target.reset();
};

popupFormAdd.addEventListener("submit", handleFormSubmitAdd);


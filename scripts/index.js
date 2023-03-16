
let popupElement = document.querySelector(".popup");
let popupOpenButtonElement = document.querySelector(".profile__edit-button");
let popupCloseButtonElement = popupElement.querySelector(".popup__close");
let nameInput = popupElement.querySelector("#name");
let jobInput = popupElement.querySelector("#job");
let formName = document.querySelector(".profile__title");
let formJob = document.querySelector(".profile__subtitle");
let popupForm = document.querySelector(".popup__form");
let popupSaveButtonElement = popupElement.querySelector(".popup__button");   ///кнопка закрытия попапа

let openPopup = function () {
        nameInput.value = formName.textContent;
        jobInput.value = formJob.textContent;
        popupElement.classList.add("popup_opened");
        };

let closePopup = function () {
        popupElement.classList.remove("popup_opened");
        };

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);


function handleFormSubmit (evt) {
        evt.preventDefault();
        formName.textContent = nameInput.value;
        formJob.textContent = jobInput.value;      

        popupSaveButtonElement.addEventListener("click", closePopup);  ///закрытие попапа
        }

popupForm.addEventListener("submit", handleFormSubmit);


  














let popupElement = document.querySelector(".popup");
let popupOpenButtonElement = document.querySelector(".profile__form_edit-button");
let popupCloseButtonElement = popupElement.querySelector(".popup__close");

let openPopup = function () {
        popupElement.classList.add("popup_is-opened");
        console.log("Open popup clicked");
        };

let closePopup = function () {
        popupElement.classList.remove("popup_is-opened");
        };

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

let nameInput = popupElement.querySelector(".popup__form_name");
let jobInput = popupElement.querySelector(".popup__form_job");
let formName = document.querySelector(".profile__form_title");
let formJob = document.querySelector(".profile__form_subtitle");
let popupForm = document.querySelector(".popup__form");
let popupSaveButtonElement = popupElement.querySelector(".popup__form_button");

nameInput.value = formName.textContent;
jobInput.value = formJob.textContent;

function handleFormSubmit (evt) {
        evt.preventDefault();
        let userNameInput = nameInput.value;
        let userJobInput = jobInput.value;
        formName.textContent = userNameInput;
        formJob.textContent = userJobInput;
        }

popupForm.addEventListener("submit", handleFormSubmit);
popupSaveButtonElement.addEventListener("click", closePopup);

  













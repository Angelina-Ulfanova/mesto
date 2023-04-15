const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible'
});

const activateValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, rest);
  });
};

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(formElement.querySelectorAll(inputSelector));
  const formButton = formElement.querySelector(submitButtonSelector);
  disableButton(formButton, rest);
  formElement.addEventListener("reset", () => {
    disableButton(formButton, rest);
  });
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, rest);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      };
    });
  });
};

const checkInputValidity = (input, { inputErrorClass, errorClass, ...rest }) => {
  const inputError = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    inputError.textContent = "";
    inputError.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  } else {
    inputError.textContent = input.validationMessage;
    inputError.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  };
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some((item) => !item.validity.valid);
};

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.disabled = false;
};

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
};

activateValidation(enableValidation);



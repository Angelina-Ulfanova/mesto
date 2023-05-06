export default class FormValidator {
    constructor (activateValidation, form) {
      this._formSelector = activateValidation.formSelector;
      this._inputSelector = activateValidation.inputSelector;
      this._submitButtonSelector = activateValidation.submitButtonSelector;
      this._inactiveButtonClass = activateValidation.inactiveButtonClass;
      this._inputErrorClass = activateValidation.inputErrorClass;
      this._errorClass = activateValidation.errorClass;
      this._form = form;
      this._formButton = form.querySelector(this._submitButtonSelector);
      this._formInputs = Array.from(form.querySelectorAll(this._inputSelector));
    };
  
    _hideInputError(inputError, input) {
      inputError.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
      inputError.textContent = "";
    };
  
    _showInputError(inputError, input) {
      inputError.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
      inputError.textContent = input.validationMessage;
    };
      
    _checkInputValidity(input) {
      const inputError = this._form.querySelector(`#${input.id}-error`);
      if (input.validity.valid) {
        this._hideInputError(inputError, input);
      } else {
        this._showInputError(inputError, input);
      };
    };
  
    _hasInvalidInput() {
      return this._formInputs.some(input => {
      return !input.validity.valid });
    };
  
    _enableButton() {
      this._formButton.classList.remove(this._inactiveButtonClass);
      this._formButton.disabled = false;
    };
  
    _disableButton() {
      this._formButton.classList.add(this._inactiveButtonClass);
      this._formButton.disabled = true;
    };
  
    _setEventListener() {
      this._disableButton();
      this._formInputs.forEach(input => {
        input.addEventListener("input", () => {
          this._checkInputValidity(input);
            if(this._hasInvalidInput()) {
              this._disableButton();
            } else {
            this._enableButton();
            };
        });
      });
    };
  
    enableValidation() {
      this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListener();
    };
  };
  
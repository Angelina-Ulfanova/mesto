export default class Card {
    constructor(item, templateContainer, openPopupImage) {
      this._item = item;
      this._link = item.link;
      this._name = item.name;
      this._templateContainer = templateContainer;
      this._openPopupImage = openPopupImage;    
    };
  
    _cloneCardsElement() {
      const template = document.querySelector(this._templateContainer).content;
      const cardElement = template.querySelector(".element").cloneNode(true);
      return cardElement;
    };
  
    _setEventListener() {
      // лайк
      this._likeElement.addEventListener("click", this._likeActive = () => {
      this._likeElement.classList.toggle("element__like_active");
      });
  
      // удаление карточек
      this._deleteElement.addEventListener("click", this._clearElement = () => {
      this._cardsElement.remove();
      this._cardsElement = null;
      });
  
      // открытие попапа с картинкой
      this._elementImagePhoto.addEventListener("click", this._openPopupImageElement = () => {
      this._openPopupImage(this._item);
      });
    };
  
    createCard() {
      this._cardsElement = this._cloneCardsElement();
      this._elementImagePhoto = this._cardsElement.querySelector(".element__img");
      this._likeElement = this._cardsElement.querySelector(".element__like");
      this._deleteElement = this._cardsElement.querySelector(".element__img-trash");
      this._elementTitle = this._cardsElement.querySelector(".element__title");
      this._elementImagePhoto.src = this._link;
      this._elementImagePhoto.alt = this._name;
      this._elementTitle.textContent = this._name;
      this._setEventListener();
      return this._cardsElement;
    };
  };
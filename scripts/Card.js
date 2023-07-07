import {
  openPopup,
  imagePopupFullScreen,
  popupFullScreen
} from "./index.js";

export class Card {
  constructor(data, selector) {
    this._link = data.link;
    this._name = data.name;
    this._selector = selector;
  }

  _getTemplete() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._addLikeToCard();
    this._removeCard();
    this._openFullScreenImage();
  }

  _toggleLike(event){
    event.target.classList.toggle("element__like_active"); 
}

  _addLikeToCard() {
    this._like
      .addEventListener("click", (event) => {
        this._toggleLike(event);
    });
  }

  _deleteCard(){
    this._basketButton.closest(".element").remove(); 
}

  _removeCard() {
    this._basketButton.addEventListener("click", () => {
      this._deleteCard();    
    });
  }

  _handleImageClick() {
    imagePopupFullScreen.src = this._image.src;
    imagePopupFullScreen.alt = this._titleCaption.textContent;
    this._sign.textContent = this._titleCaption.textContent;
  }

  _openFullScreenImage() {
    this._image.addEventListener("click", () => {
      openPopup(popupFullScreen);
      this._handleImageClick();
    });
  }

  generateCard() {
    this._element = this._getTemplete();
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    this._sign = popupFullScreen.querySelector(".popup__text");
    this._like = this._element.querySelector(".element__like");
    this._basketButton = this._element.querySelector(".element__basket-button");
    this._image = this._element.querySelector(".element__image");
    this._titleCaption = this._element.querySelector(".element__text");
    this._setEventListeners();
    return this._element;
  }
}


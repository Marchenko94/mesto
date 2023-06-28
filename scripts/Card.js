import {
  openPopup,
  closePopup,
  imagePopupFullScreen,
  popupCloseFullScreen,
  popupFullScreen,
  buttonOpenAddCardForm,
  buttonCloseAddCardForm,
  popupAddCards,
  elementsCards
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
    this._closeFullScreenPopup();
  }

  _addLikeToCard() {
    this._element
      .querySelector(".element__like")
      .addEventListener("click", function (event) {
        event.target.classList.toggle("element__like_active");
      });
  }

  _removeCard() {
    const basketButton = this._element.querySelector(".element__basket-button");
    basketButton.addEventListener("click", () => {
      basketButton.closest(".element").remove();
    });
  }

  _openFullScreenImage() {
    const image = this._element.querySelector(".element__image");
    const titleCaption = this._element.querySelector(".element__text");
    image.addEventListener("click", () => {
      openPopup(popupFullScreen);
      imagePopupFullScreen.src = image.src;
      imagePopupFullScreen.alt = titleCaption.textContent;
      popupFullScreen.querySelector(".popup__text").textContent =
        titleCaption.textContent;
    });
  }

  _closeFullScreenPopup() {
    popupCloseFullScreen.addEventListener("click", () =>
      closePopup(popupFullScreen)
    );
  }

  _openButtonAddCardForm() {
    buttonOpenAddCardForm.addEventListener("click", () => {
      openPopup(popupAddCards);
    });
  }

  _closeButtonAddCardForm() {
    buttonCloseAddCardForm.addEventListener("click", () => {
      closePopup(popupAddCards);
    });
  }

  _addCard() {
    elementsCards.insertBefore(this._element, elementsCards.firstChild);
    closePopup(popupAddCards);
  }


  generateCard() {
    this._element = this._getTemplete();
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    this._setEventListeners();
    this._openButtonAddCardForm();
    this._closeButtonAddCardForm();
    this._addCard();
    return this._element;
  }
}


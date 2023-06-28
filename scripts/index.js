import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const modalData = {
  inputSelector: ".popup__input-info",
  submitButtonSelector: ".popup__input-button",
  inactiveButtonClass: "popup__input-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__span-error",
}

const buttonOpenEditProfileForm = document.querySelector(".profile__popup-opened");
const buttonCloseEditProfileForm = document.querySelector(".popup__closed");
const formEditProfile = document.querySelector(".popup__input");
const nameInput = document.querySelector(".popup__input-info_type_name");
const jobInput = document.querySelector(".popup__input-info_type_hobby");
const textNameInput = document.querySelector(".profile__name");
const statusProfileInput = document.querySelector(".profile__status");
export const elementsCards = document.querySelector(".elements");
export const buttonOpenAddCardForm = document.querySelector(".profile__popup-opened-cards");
export const buttonCloseAddCardForm = document.querySelector(".popup__closed-cards");
export const buttonCreateCard = document.querySelector(".popup__input-button-create");
export const inputNamePlace = document.querySelector(".popup__input-info_type_place");
export const inputLinkImage = document.querySelector(".popup__input-info_type_link");
export const formElementReset = document.querySelector(".popup__input-reset");
const popupEditProfile = document.querySelector(".popup_edit-profile");
export const popupAddCards = document.querySelector(".popup_add_cards");
export const popupFullScreen = document.querySelector(".popup_full_screen");
export const imagePopupFullScreen = popupFullScreen.querySelector(".popup__image");
export const popupCloseFullScreen = popupFullScreen.querySelector(".popup__closed-button-full-screen");

function closePopupOnOverley(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
  popup.addEventListener("mousedown", closePopupOnOverley);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
  popup.removeEventListener("mousedown", closePopupOnOverley);
}

buttonOpenEditProfileForm.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = textNameInput.textContent;
  jobInput.value = statusProfileInput.textContent;
});

buttonCloseEditProfileForm.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
function submitEditProfileForm(evt) {
  evt.preventDefault();
  textNameInput.textContent = nameInput.value;
  statusProfileInput.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
formEditProfile.addEventListener("submit", submitEditProfileForm);

//добавление и сохранение карточки
buttonCreateCard.addEventListener("click", (event) => {
  event.preventDefault();
  const name = inputNamePlace.value;
  const link = inputLinkImage.value;
  formElementReset.reset();
  new Card ({name, link}, '.card').generateCard();
  const formValidator = new FormValidator(modalData, ".popup__input");
  formValidator.toggleButtonState([inputNamePlace, inputLinkImage], buttonCreateCard);
});
formElementReset.addEventListener("submit", buttonCreateCard);

const firstFormValidation = new FormValidator(modalData, ".popup__input");
firstFormValidation.enableValidation();

initialCards.forEach((item) => {
  const name = item.name;
  const link = item.link;
  new Card ({name, link}, '.card').generateCard();
});


import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const modalData = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-info",
  submitButtonSelector: ".popup__input-button",
  inactiveButtonClass: "popup__input-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__span-error",
};

const buttonOpenEditProfileForm = document.querySelector(".profile__popup-opened");
const buttonCloseEditProfileForm = document.querySelector(".popup__closed");
const formEditProfile = document.querySelector(".popup__input");
const nameInput = document.querySelector(".popup__input-info_type_name");
const jobInput = document.querySelector(".popup__input-info_type_hobby");
const textNameInput = document.querySelector(".profile__name");
const statusProfileInput = document.querySelector(".profile__status");
const elementsCards = document.querySelector(".elements");
const buttonOpenAddCardForm = document.querySelector(".profile__popup-opened-cards");
const buttonCloseAddCardForm = document.querySelector(".popup__closed-cards");
export const buttonCreateCard = document.querySelector(".popup__input-button-create");
export const inputNamePlace = document.querySelector(".popup__input-info_type_place");
export const inputLinkImage = document.querySelector(".popup__input-info_type_link");
export const formElementReset = document.querySelector(".popup__input-reset");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddCards = document.querySelector(".popup_add_cards");
export const popupFullScreen = document.querySelector(".popup_full_screen");
export const imagePopupFullScreen = popupFullScreen.querySelector(".popup__image");
const popupCloseFullScreen = popupFullScreen.querySelector(".popup__closed-button-full-screen");

const formValidators = {};
const enableValidation = (modalData) => {
  const formList = Array.from(
    document.querySelectorAll(modalData.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(modalData, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(modalData);

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

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
  popup.removeEventListener("mousedown", closePopupOnOverley);
}

buttonOpenEditProfileForm.addEventListener("click", () => {
  formValidators["form_profile"].resetValidation();
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

buttonOpenAddCardForm.addEventListener("click", () => {
  formValidators["form_card"].resetValidation();
  openPopup(popupAddCards);
});

buttonCloseAddCardForm.addEventListener("click", () =>
  closePopup(popupAddCards)
);

popupCloseFullScreen.addEventListener("click", () =>
  closePopup(popupFullScreen)
);

//добавление и сохранение карточки
buttonCreateCard.addEventListener("click", (event) => {
  event.preventDefault();
  const name = inputNamePlace.value;
  const link = inputLinkImage.value;
  formElementReset.reset();
  closePopup(popupAddCards);
  const itemElement = new Card({ name, link }, ".card").generateCard();
  addCard(itemElement);
});
formElementReset.addEventListener("submit", buttonCreateCard);

function addCard(itemElement) {
  elementsCards.insertBefore(itemElement, elementsCards.firstChild);
}

initialCards.forEach((item) => {
  const name = item.name;
  const link = item.link;
  const itemElement = new Card({ name, link }, ".card").generateCard();
  addCard(itemElement);
});

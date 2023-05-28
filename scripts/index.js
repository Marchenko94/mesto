const buttonOpenEditProfileForm = document.querySelector('.profile__popup-opened'); 
const buttonCloseEditProfileForm = document.querySelector('.popup__closed'); 
const formEditProfile = document.querySelector('.popup__input');  
const nameInput = document.querySelector('.popup__input-info_type_name');  
const jobInput = document.querySelector('.popup__input-info_type_hobby');  
const textNameInput = document.querySelector('.profile__name'); 
const statusProfileInput = document.querySelector('.profile__status'); 
const elementsCards = document.querySelector('.elements'); 
const templateCard = document.querySelector('.card').content; 
const buttonOpenAddCardForm = document.querySelector('.profile__popup-opened-cards'); 
const buttonCloseAddCardForm = document.querySelector('.popup__closed-cards'); 
const buttonCreateCard = document.querySelector('.popup__input-button-create'); 
const inputNamePlace = document.querySelector('.popup__input-info_type_place'); 
const inputLinkImage = document.querySelector('.popup__input-info_type_link');
const formElementReset = document.querySelector('.popup__input-reset');
const popupEditProfile = document.querySelector('.popup_edit-profile'); 
const popupAddCards = document.querySelector('.popup_add_cards'); 
const popupFullScreen = document.querySelector('.popup_full_screen'); 
const imagePopupFullScreen = popupFullScreen.querySelector('.popup__image'); 
const textPopupFullScreen = popupFullScreen.querySelector('.popup__text'); 
const popupCloseFullScreen = popupFullScreen.querySelector('.popup__closed-button-full-screen');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

buttonOpenEditProfileForm.addEventListener('click', () => { 
    openPopup(popupEditProfile);
    nameInput.value = textNameInput.textContent; 
    jobInput.value = statusProfileInput.textContent; 
} 
); 

buttonCloseEditProfileForm.addEventListener('click', () => closePopup(popupEditProfile)); 
function submitEditProfileForm (evt) { 
    evt.preventDefault(); 
       textNameInput.textContent = nameInput.value; 
       statusProfileInput.textContent = jobInput.value; 
       closePopup(popupEditProfile);
} 
formEditProfile.addEventListener('submit', submitEditProfileForm); 

// кнопка открытия(закрытия) попапа для добавления карточек 

buttonOpenAddCardForm.addEventListener('click', () => {
    openPopup(popupAddCards);
}); 
buttonCloseAddCardForm.addEventListener('click', () => closePopup(popupAddCards)); 

//добавление и сохранение карточки  
buttonCreateCard.addEventListener('click', (event) => { 
    event.preventDefault(); 
    const itemElement = createCard(inputNamePlace.value, inputLinkImage.value);
    addCard(itemElement);
    formElementReset.reset();
    closePopup(popupAddCards);
}) 
formElementReset.addEventListener('submit', buttonCreateCard);

//добавление карточек через template 
function createCard(name, link) {
    const itemElement = templateCard.cloneNode(true); 
    const imageCard = itemElement.querySelector('.element__image');
    itemElement.querySelector('.element__text').innerText = name;
    imageCard.src = link; 
    imageCard.alt = name;
    addLikeToCard(itemElement);
    openFullScreenImage(itemElement);
    removeCard(itemElement);
    return itemElement;
}

 function addCard(itemElement) {
    elementsCards.insertBefore(itemElement, elementsCards.firstChild); 
 }

initialCards.forEach((item) => { 
    const itemElement = createCard(item.name, item.link);
    addCard(itemElement);
}); 

function addLikeToCard(itemElement){
    itemElement.querySelector('.element__like').addEventListener('click', function(event){ 
    event.target.classList.toggle('element__like_active'); 
  }) 
}

function removeCard(itemElement) {
    const basketButton = itemElement.querySelector('.element__basket-button'); 
    basketButton.addEventListener('click', () => { 
    basketButton.closest('.element').remove();
}) 
}

function openFullScreenImage(itemElement) { 
    const image = itemElement.querySelector('.element__image'); 
    const titleCaption = itemElement.querySelector('.element__text'); 
    image.addEventListener('click', () => { 
    openPopup(popupFullScreen);
    imagePopupFullScreen.src = image.src; 
    imagePopupFullScreen.alt = titleCaption.textContent;
    textPopupFullScreen.textContent = titleCaption.textContent; 
}); 
} 

popupCloseFullScreen.addEventListener('click', () => closePopup(popupFullScreen));

 


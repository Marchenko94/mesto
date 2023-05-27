const buttonPopupOpened = document.querySelector('.profile__popup-opened'); 
const popupEditProfile = document.querySelector('.popup_edit-profile'); 
const buttonPopupClosed = document.querySelector('.popup__closed'); 
const formElement = document.querySelector('.popup__input');  
const nameInput = document.querySelector('.popup__input-info_type_name');  
const jobInput = document.querySelector('.popup__input-info_type_hobby');  
const textNameInput = document.querySelector('.profile__name'); 
const statusProfileInput = document.querySelector('.profile__status'); 
const popupFullScreen = document.querySelector('.popup_full_screen'); 
const imagePopupFullScreen = popupFullScreen.querySelector('.popup__image'); 
const textPopupFullScreen = popupFullScreen.querySelector('.popup__text'); 
const popupCloseFullScreen = popupFullScreen.querySelector('.popup__closed-button-full-screen'); 
const elementsCards = document.querySelector('.elements'); 
const templateCard = document.querySelector('.card').content; 
const buttonPopupOpenedCards = document.querySelector('.profile__popup-opened-cards'); 
const popupAddCards = document.querySelector('.popup_add_cards'); 
const buttonPopupClosedCards = document.querySelector('.popup__closed-cards'); 
const buttonCreateCard = document.querySelector('.popup__input-button-create'); 
const inputNamePlace = document.querySelector('.popup__input-info_type_place'); 
const inputLinkImage = document.querySelector('.popup__input-info_type_link');
const formElementReset = document.querySelector('.popup__input-reset');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened') 
buttonPopupOpened.addEventListener('click', () => { 
    togglePopupState(popupEditProfile); 
    nameInput.value = textNameInput.textContent; 
    jobInput.value = statusProfileInput.textContent; 
} 
); 

buttonPopupClosed.addEventListener('click', () => togglePopupState(popupEditProfile)); 
function handleFormSubmit (evt) { 
    evt.preventDefault(); 
       textNameInput.textContent = nameInput.value; 
       statusProfileInput.textContent = jobInput.value; 
       togglePopupState(popupEditProfile);
} 
formElement.addEventListener('submit', handleFormSubmit); 

// кнопка открытия(закрытия) попапа для добавления карточек 
const togglePopupCards = (popupToToggleCards) => popupToToggleCards.classList.toggle('popup_opened'); 

buttonPopupOpenedCards.addEventListener('click', () => {
    togglePopupCards(popupAddCards);
}); 
buttonPopupClosedCards.addEventListener('click', () => togglePopupCards(popupAddCards)); 

//добавление и сохранение карточки  
buttonCreateCard.addEventListener('click', (event) => { 
    event.preventDefault(); 
    createCard(inputNamePlace.value, inputLinkImage.value); 
    formElementReset.reset();
    togglePopupCards(popupAddCards);
}) 
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
    addCar(itemElement);
    return itemElement;
}

 function addCar(itemElement) {
    elementsCards.insertBefore(itemElement, elementsCards.firstChild); 
 }

initialCards.forEach((item) => { 
    const itemElement = createCard(item.name, item.link);
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

const togglePopupFullScreen = (popupToToggleFullScreen) => popupToToggleFullScreen.classList.toggle('popup_opened'); 

function openFullScreenImage(itemElement) { 
    const image = itemElement.querySelector('.element__image'); 
    const titleCaption = itemElement.querySelector('.element__text'); 
    image.addEventListener('click', () => { 
    togglePopupFullScreen(popupFullScreen);
    imagePopupFullScreen.src = image.src; 
    textPopupFullScreen.textContent = titleCaption.textContent; 
}); 
} 

popupCloseFullScreen.addEventListener('click', () => togglePopupFullScreen(popupFullScreen));

 


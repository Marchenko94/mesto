const buttonPopupOpened = document.querySelector('.profile__popup-opened'); 
const popup = document.querySelector('.popup_edit-profile'); 
const buttonPopupClosed = document.querySelector('.popup__closed'); 
const formElement = document.querySelector('.popup__input');  
const nameInput = document.querySelector('.popup__input-info_type_name');  
const jobInput = document.querySelector('.popup__input-info_type_hobby');  
const title = document.querySelector('.profile__name'); 
const job = document.querySelector('.profile__status'); 
const popupFullScreen = document.querySelector('.popup_full_screen'); 
const imagePopupFullScreen = popupFullScreen.querySelector('.popup__image'); 
const textPopupFullScreen = popupFullScreen.querySelector('.popup__text'); 
const closePopupFullScreen = popupFullScreen.querySelector('.popup__closed'); 
const elementsCards = document.querySelector('.elements'); 
const templateCard = document.querySelector('.card').content; 
const buttonPopupOpenedCards = document.querySelector('.profile__popup-opened-cards'); 
const popupAddCards = document.querySelector('.popup_add_cards'); 
const buttonPopupClosedCards = document.querySelector('.popup__closed-cards'); 
const createCardButton = document.querySelector('.popup__input-button-create'); 
const inputName = document.querySelector('.popup__input-info_type_place'); 
const inputLink = document.querySelector('.popup__input-info_type_link');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened') 
buttonPopupOpened.addEventListener('click', () => { 
    togglePopupState(popup); 
    nameInput.value = title.textContent; 
    jobInput.value = job.textContent; 
} 
); 

buttonPopupClosed.addEventListener('click', () => togglePopupState(popup)); 
function handleFormSubmit (evt) { 
    evt.preventDefault(); 
       title.textContent = nameInput.value; 
       job.textContent = jobInput.value; 
       togglePopupState(popup);
} 
formElement.addEventListener('submit', handleFormSubmit); 

// кнопка открытия(закрытия) попапа для добавления карточек 
const togglePopupCards = (popupToToggleCards) => popupToToggleCards.classList.toggle('popup_opened'); 

buttonPopupOpenedCards.addEventListener('click', () => {
    inputName.value = '';
    inputLink.value = '';
    togglePopupCards(popupAddCards);
}); 
buttonPopupClosedCards.addEventListener('click', () => togglePopupCards(popupAddCards)); 

//добавление и сохранение карточки  
createCardButton.addEventListener('click', (event) => { 
    event.preventDefault(); 
    addCardsToTemplate(inputName.value, inputLink.value); 
    togglePopupCards(popupAddCards);
}) 
//добавление карточек через template 
function addCardsToTemplate(name, link) {
    const itemElement = templateCard.cloneNode(true); 
    itemElement.querySelector('.element__text').innerText = name;
    itemElement.querySelector('.element__image').src = link; 
    itemElement.querySelector('.element__image').alt = name;
    addLike(itemElement);
    openFullScreenImage(itemElement);
    removeCard(itemElement);
    elementsCards.insertBefore(itemElement, elementsCards.firstChild); 
}

initialCards.forEach((item) => { 
    const itemElement = addCardsToTemplate(item.name, item.link);
}); 

function addLike(itemElement){
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
    imagePopupFullScreen.src = image.src; 
    textPopupFullScreen.textContent = titleCaption.textContent; 
    popupFullScreen.classList.add('popup_opened'); 
}); 
} 

function closePopupFullScreenModal() {
    closePopupFullScreen.addEventListener('click', () => { 
    popupFullScreen.classList.remove('popup_opened'); 
}); 
}
closePopupFullScreenModal()

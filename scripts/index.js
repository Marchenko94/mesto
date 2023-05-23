const buttonPopupOpened = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__input'); 
const nameInput = document.querySelector('.popup__input-info_type_name'); 
const jobInput = document.querySelector('.popup__input-info_type_hobby'); 
const title = document.querySelector('.profile__name');
const job = document.querySelector('.profile__status');


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
const buttonPopupOpenedCards = document.querySelector('.profile__popup-opened-cards');
const popupAddCards = document.querySelector('.popup_add_cards');
const buttonPopupClosedCards = document.querySelector('.popup__closed-cards');

const togglePopupCards = (popupToToggleCards) => popupToToggleCards.classList.toggle('popup_opened');

buttonPopupOpenedCards.addEventListener('click', () => togglePopupCards(popupAddCards));

buttonPopupClosedCards.addEventListener('click', () => togglePopupCards(popupAddCards));


//добавление и сохранение карточки
const createCardButton = document.querySelector('.popup_add_cards .popup__input-button');
createCardButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputName = document.querySelector('.popup_add_cards .popup__input-info_type_name');
    const inputLink = document.querySelector('.popup_add_cards .popup__input-info_type_hobby');
    addCardsToTemplate(inputName.value, inputLink.value);
})


//добавление карточек через template
const elementsCards = document.querySelector('.elements');
const templateCard = document.querySelector('.card').content;


initialCards.forEach((item) => {
  const itemElement = templateCard.cloneNode(true);
  itemElement.querySelector('.element__text').innerText = item.name;
  itemElement.querySelector('.element__image').src = item.link;
  
//возможность ставить лайк этим карточкам
  itemElement.querySelector('.element__like').addEventListener('click', function(event){
    event.target.classList.toggle('element__like_active');
 })
 elementsCards.append(itemElement);
});

//добавление новый карточек
function addCardsToTemplate (name, link) {
    const templateCard = document.querySelector('.card').content;
    const cloneCard = templateCard.cloneNode(true);
    const cloneCardImage = cloneCard.querySelector('.element__image');
    const cloneCardText = cloneCard.querySelector('.element__text');
    const elementsCards = document.querySelector('.elements');
    
//воззможность им ставить лайк
    cloneCard.querySelector('.element__like').addEventListener('click', function(event){
        event.target.classList.toggle('element__like_active');
     })

    cloneCardText.textContent = name;
    cloneCardImage.src = link;
    elementsCards.insertBefore(cloneCard, elementsCards.firstChild);
    togglePopupCards(popupAddCards); 
    openFullScreenImage();
}

const popupFullScreen = document.querySelector('.popup_full_screen');
const imagePopupFullScreen = popupFullScreen.querySelector('.popup__image');
const textPopupFullScreen = popupFullScreen.querySelector('.popup__text');
const closePopupFullScreen = popupFullScreen.querySelector('.popup__closed');

function openFullScreenImage() {
    const allCards = document.querySelectorAll('.element');
    allCards.forEach((card) => {
        const image = card.querySelector('.element__image');
        const titleCaption = card.querySelector('.element__text');
        const basketButton = card.querySelector('.element__basket-button');
        basketButton.addEventListener('click', () => {
            card.remove();
        })
        image.addEventListener('click', () => {
            imagePopupFullScreen.src = image.src;
            textPopupFullScreen.textContent = titleCaption.textContent;
            popupFullScreen.classList.add('popup_opened');
        });
    })
    closePopupFullScreen.addEventListener('click', () => {
        popupFullScreen.classList.remove('popup_opened');
    });
}
openFullScreenImage();



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

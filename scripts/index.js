const buttonPopupOpened = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened')

buttonPopupOpened.addEventListener('click', () => togglePopupState(popup));

buttonPopupClosed.addEventListener('click', () => togglePopupState(popup));

popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        togglePopupState(popup)
    }
});

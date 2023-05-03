const buttonPopupOpened = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__input'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input-name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input-status'); // Воспользуйтесь инструментом .querySelector()
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

// popup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//         togglePopupState(popup)
//     }
// });

// Находим форму в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
       // Получите значение полей jobInput и nameInput из свойства value
       title.textContent = nameInput.value;
       job.textContent = jobInput.value;
       togglePopupState(popup);
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

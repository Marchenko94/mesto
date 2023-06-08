const modalData = {
  formSelector: ".popup__input",
  inputSelector: ".popup__input-info",
  submitButtonSelector: ".popup__input-button",
  inactiveButtonClass: "popup__input-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__span-error",
};

function enableValidation(obj) {
  const formList = document.querySelectorAll(obj.formSelector);
  formList.forEach((form) => {
    const inputList = form.querySelectorAll(obj.inputSelector);
    const buttonPopup = form.querySelector(obj.submitButtonSelector);
    inputList.forEach((input) => {
      const formError = document.querySelector(`#${input.id}-error`);
      input.addEventListener("input", function () {
        isValid(input, formError);
        toggleButtonState(inputList, buttonPopup);
      });
    });
  });
}
enableValidation(modalData);

//показывает элемент ошибки
const showInputError = (input, formError) => {
  input.classList.add(modalData.inputErrorClass);
  formError.textContent = input.validationMessage;
  formError.classList.add(modalData.errorClass);
};
//скрывает элемент ошибки
const hideInputError = (input, formError) => {
  input.classList.remove(modalData.inputErrorClass);
  formError.classList.remove(modalData.errorClass);
  formError.textContent = "";
};

//проверяет валидность поля, внутри вызывает showInputError или hideInputError
const isValid = (input, formError) => {
  if (!input.validity.valid) {
    showInputError(input, formError);
  } else {
    hideInputError(input, formError);
  }
};

//  Функция принимает массив полей, проходим по этому массиву методом some
const hasInvalidInput = (formInputs) => {
  const formList = Array.from(formInputs);
  return formList.some((input) => {
    return !input.validity.valid;
  });
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (formInputs, buttonPopup) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(formInputs)) {
    // сделай кнопку неактивной
    buttonPopup.classList.add(modalData.inactiveButtonClass);
    buttonPopup.disabled = true;
  } else {
    // иначе сделай кнопку активной
    buttonPopup.classList.remove(modalData.inactiveButtonClass);
    buttonPopup.disabled = false;
  }
};

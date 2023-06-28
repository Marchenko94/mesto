export class FormValidator {
    constructor(modalData, formSelector) {
        this._formSelector = formSelector;
        this._inputSelector = modalData.inputSelector;
        this._submitButtonSelector = modalData.submitButtonSelector;
        this._inactiveButtonClass = modalData.inactiveButtonClass;
        this._inputErrorClass = modalData.inputErrorClass;
        this._errorClass = modalData.errorClass;
    }

    //показывает элемент ошибки
    _showInputError(input, formError) {
        input.classList.add(this._inputErrorClass);
        formError.textContent = input.validationMessage;
        formError.classList.add(this._errorClass); 
    }

    //скрывает элемент ошибки
    _hideInputError(input, formError) {
        input.classList.remove(this._inputErrorClass);
        formError.classList.remove(this._errorClass);
        formError.textContent = "";
      };
    
    //проверяет валидность поля, внутри вызывает showInputError или hideInputError
    _checkIsValid(input, formError) {
        if (!input.validity.valid) {
          this._showInputError(input, formError);
        } else {
          this._hideInputError(input, formError);
        }
      };

    //Метод принимает массив полей, проходим по этому массиву методом some
    _hasInvalidInput(formInputs) {
        const formList = Array.from(formInputs);
        return formList.some((input) => {
          return !input.validity.valid;
        });
      };

      // Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
    toggleButtonState(formInputs, buttonPopup) {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(formInputs)) {
      // сделай кнопку неактивной
      buttonPopup.classList.add(this._inactiveButtonClass);
      buttonPopup.disabled = true;
    } else {
      // иначе сделай кнопку активной
      buttonPopup.classList.remove(this._inactiveButtonClass);
      buttonPopup.disabled = false;
    }
  };

     enableValidation() {
        const formList = document.querySelectorAll(this._formSelector);
        formList.forEach((form) => {
          const inputList = form.querySelectorAll(this._inputSelector);
          const buttonPopup = form.querySelector(this._submitButtonSelector);
          inputList.forEach((input) => {
            const formError = document.querySelector(`#${input.id}-error`);
            input.addEventListener("input",  () => {
              this._checkIsValid(input, formError);
              this.toggleButtonState(inputList, buttonPopup);
            });
          });
        });
      }
}


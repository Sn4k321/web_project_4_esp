const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};
const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      selectors
    );
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    selectors.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, selectors);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    });
  });
};
const enableValidation = (selectors) => {
  const formList = Array.from(
    document.querySelectorAll(selectors.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  try {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
  } catch (error) {
    console.log(error);
  }
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

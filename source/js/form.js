const form = document.querySelector('.form');
const inputPhone = form.querySelector('.form__phone');
const inputName = form.querySelector('.form__name');
const allInputs = form.querySelectorAll('.form__input');
const MAX_LETTERS_COUNT = 25;
let fixPhoneValue;

const errorText = {
  EMPTY_NAME: 'Введите ваше имя',
  EMPTY_PHONE: 'Введите номер телефона',
  INVALID_NAME: 'Разрешены только буквы и пробелы',
  INVALID_PHONE: 'Разрешены цифры, пробелы и скобки',
  INVALID_COUNT: `Разрешено максимум ${MAX_LETTERS_COUNT} символов`,
};

const validateNumbers = (phone) => {
  const reg = /^[+0-9][-0-9()\s]*$/;
  return reg.test(String(phone));
};

const validateLetters = (name) => {
  const reg = /^[a-zа-яё\s]*$/i;
  return reg.test(String(name));
};

const replacePhone = (phone) => {
  fixPhoneValue = phone.toString().replace(/[-()\s]/g, '');
  return fixPhoneValue;
};

function removeError(input) {
  const parent = input.parentNode;

  if (input.classList.contains('form__input--error')) {
    parent.querySelector('.form__error-text').remove();
    input.classList.remove('form__input--error');
  }
}

function createError(input, text) {
  const parent = input.parentNode;
  const errorSpan = document.createElement('span');

  errorSpan.classList.add('form__error-text');
  errorSpan.textContent = text;
  parent.appendChild(errorSpan);
  input.classList.add('form__input--error');
}

const onInputName = () => {
  const nameValue = inputName.value;
  removeError(inputName);
  if (!validateLetters(nameValue) && (nameValue.length > 0)) {

    createError(inputName, errorText.INVALID_NAME);
  }
  if (inputName.value.length > MAX_LETTERS_COUNT) {
    removeError(inputName);
    createError(inputName, errorText.INVALID_COUNT);
  }
};

const onInputPhone = () => {
  const phoneValue = inputPhone.value;
  removeError(inputPhone);
  if (!validateNumbers(phoneValue) && (phoneValue.length > 0)) {

    createError(inputPhone, errorText.INVALID_PHONE);
  }
  if (inputPhone.value.length > MAX_LETTERS_COUNT) {
    removeError(inputPhone);
    createError(inputPhone, errorText.INVALID_COUNT);
  }
  replacePhone(phoneValue);
};

const validationForm = () => {

  let result = true;

  const nameValue = inputName.value;
  const phoneValue = inputPhone.value;

  for (const input of allInputs) {
    removeError(input);

    if (input.classList.contains('form__phone')) {
      removeError(input);
      if (phoneValue.length === 0) {
        createError(input, errorText.EMPTY_PHONE);
        result = false;
      }

      if (!validateNumbers(phoneValue) && (phoneValue.length > 0)) {
        createError(input, errorText.INVALID_PHONE);
        result = false;
      }
    }

    if (input.classList.contains('form__name')) {
      removeError(input);
      if (nameValue.length === 0) {

        createError(input, errorText.EMPTY_NAME);
        result = false;
      }

      if (!validateLetters(nameValue) && (nameValue.length > 0)) {

        createError(input, errorText.INVALID_NAME);
        result = false;
      }
    }


    if (input.value.length > MAX_LETTERS_COUNT) {
      removeError(input);
      createError(input, errorText.INVALID_COUNT);
      result = false;
    }

  }

  return result;
};

const onSubmitForm = async (evt) => {
  evt.preventDefault();

  if (validationForm(form)) {
    inputPhone.value = fixPhoneValue;
    form.submit();
    form.reset();
  }
};

inputPhone.addEventListener('input', onInputPhone);
inputName.addEventListener('input', onInputName);
form.addEventListener('submit', onSubmitForm);

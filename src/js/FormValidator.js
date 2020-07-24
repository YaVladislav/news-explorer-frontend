export default class {
  constructor(form) {
    this.form = form;
  }

  checkInputValidity() {
    const { input } = this;
    const error = input.nextElementSibling;
    if (input.validity.valid) {
      error.innerText = '';
      error.className = 'popup__error';
    } else if (input.name === 'password') {
      error.innerText = input.validity.tooShort ? `Пароль должен быть больше ${input.minLength} символов` : '';
      error.classList.add('popup__error_active');
    } else {
      let errorMessage;
      switch (true) {
        case input.validity.typeMismatch:
          errorMessage = `Неправильный формат ${input.type}`;
          break;
        case input.validity.tooLong:
          errorMessage = `Поле должно содержать от ${input.minLength} до ${input.maxLength} символов`;
          break;
        case input.validity.tooShort:
          errorMessage = `Поле должно содержать больше ${input.minLength} символов`;
          break;
        default:
          errorMessage = 'Обязательное поле';
      }
      error.innerText = errorMessage;
      error.classList.add('popup__error_active');
    }
    this.setSubmitButtonState();
  }

  setSubmitButtonState() {
    const submitButton = this.form.querySelector('.popup__button');
    submitButton.removeAttribute('disabled');
    this.form.elements.forEach((element) => {
      if (!element.validity.valid) {
        submitButton.setAttribute('disabled', '');
      }
    });
  }

  setEventListeners() {
    const { form } = this;
    form.addEventListener('input', (e) => {
      this.input = e.target;
      this.checkInputValidity();
    });
  }
}

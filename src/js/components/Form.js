export default class {
  constructor(api, popap, form) {
    this.api = api;
    this.popap = popap;
    this.form = form;
  }

  setServerError(message) {
    this.form.querySelector('.error').textContent = message;
  }

  setEventListeners() {
    const { form } = this;
    form.addEventListener('input', (e) => {
      this.input = e.target;
      this._checkInputValidity();
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitSignin(e);
      this._submitSignup(e);
    });
  }

  _submitSignin(e) {
    if (this.form.classList.contains('popup__form_signin')) {
      this.api.signin(
        e.target.email.value,
        e.target.password.value,
      )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => { this.setServerError(err.message); });
    }
  }

  _submitSignup(e) {
    if (this.form.classList.contains('popup__form_signup')) {
      this.api.signup(
        e.target.email.value,
        e.target.password.value,
        e.target.name.value,
      )
        .then(() => { this.popap.setContentSucceful(); })
        .catch((err) => { this.setServerError(err.message); });
    }
  }

  _checkInputValidity() {
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
    this._setSubmitButtonState();
  }

  _setSubmitButtonState() {
    const submitButton = this.form.querySelector('.popup__button');
    submitButton.removeAttribute('disabled');
    this.form.elements.forEach((element) => {
      if (!element.validity.valid) {
        submitButton.setAttribute('disabled', '');
      }
    });
  }
}

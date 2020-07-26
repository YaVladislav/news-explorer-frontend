import '../pages/index.css';
import 'normalize.css';

import Header from './components/Header';
import Popup from './components/Popup';
import Form from './components/Form';
import Api from './api/Api';

(function () {
  // Buttons
  const headerButton = document.querySelector('.header__button');
  // Api
  const api = new Api({
    baseUrl: 'https://api.jswa.online',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  // Header
  const header = new Header(document.querySelector('.header'));
  // Popups
  const popupSignin = new Popup(document.querySelector('.popup_signin'));
  const popupSignup = new Popup(document.querySelector('.popup_signup'));
  // Form
  const form = new Form(api, { popupSignin, popupSignup });
  // Events
  headerButton.addEventListener('click', () => {
    if (!localStorage.isLoggedIn) {
      popupSignin.toggle();
    } else {
      localStorage.clear();
      header.render();
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__checkout')) {
      popupSignin.toggle();
      popupSignup.toggle();
      form.setServerError('');
    }
  });
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetForm = e.target;
    if (targetForm.classList.contains('popup__form_signin')) {
      api.signin(
        targetForm.email.value,
        targetForm.password.value,
      )
        .then((result) => {
          localStorage.isLoggedIn = true;
          localStorage.userName = result.user.name;
          popupSignin.toggle();
          header.render();
        })
        .catch((err) => { form.setServerError(err.message); });
    }
    if (targetForm.classList.contains('popup__form_signup')) {
      api.signup(
        targetForm.email.value,
        targetForm.password.value,
        targetForm.name.value,
      )
        .then(() => popupSignup.setContentSucceful())
        .catch((err) => { form.setServerError(err.message); });
    }
  });
  document.addEventListener('input', (e) => {
    if (!e.target.classList.contains('search__input')) {
      form.validation(e.target);
      form.setServerError('');
    }
  });
  // Render
  header.render();
}());

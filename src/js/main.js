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
  //
  const header = new Header(document.querySelector('.header'));
  // Popups
  const popupSignin = new Popup(document.querySelector('.popup_signin'));
  const popupSignup = new Popup(document.querySelector('.popup_signup'));
  // const popupSuccessful = new Popup(document.querySelector('.popup_successful'));
  // Forms
  const signinForm = new Form(api, popupSignin, document.querySelector('.popup__form_signin'));
  const signupForm = new Form(api, popupSignup, document.querySelector('.popup__form_signup'));
  // Events
  headerButton.addEventListener('click', () => { popupSignin.toggle(); });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__checkout')) {
      popupSignin.toggle();
      popupSignup.toggle();
    }
  });
  signinForm.setEventListeners();
  signupForm.setEventListeners();
}());

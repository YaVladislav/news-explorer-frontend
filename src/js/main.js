import '../pages/index.css';
import 'normalize.css';

import Popup from './Popup';
import FormValidator from './FormValidator';

(function () {
  // buttons
  const headerButton = document.querySelector('.header__button');
  // popups
  const popupSignin = new Popup(document.querySelector('.popup_signin'));
  const popupSignup = new Popup(document.querySelector('.popup_signup'));
  // const popupSuccessful = new Popup(document.querySelector('.popup_successful'));
  // validation
  const signinValidator = new FormValidator(document.querySelector('.popup__form_signin'));
  const signupValidator = new FormValidator(document.querySelector('.popup__form_signup'));
  signinValidator.setEventListeners();
  signupValidator.setEventListeners();
  // events
  headerButton.addEventListener('click', () => { popupSignin.toggle(); });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__checkout')) {
      popupSignin.toggle();
      popupSignup.toggle();
    }
  });
}());

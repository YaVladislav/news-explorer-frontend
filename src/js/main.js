import '../pages/index.css';
import 'normalize.css';

import Popup from './Popup';

(function () {
  // buttons
  const headerButton = document.querySelector('.header__button');
  // popups
  const popupSignin = new Popup(document.querySelector('.popup_signin'));
  const popupSignup = new Popup(document.querySelector('.popup_signup'));
  const popupSuccessful = new Popup(document.querySelector('.popup_successful'));

  headerButton.addEventListener('click', () => { popupSignin.toggle(); });
  popupSignin.setEventListener();
  popupSignup.setEventListener();
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__checkout')) {
      popupSignin.toggle();
      popupSignup.toggle();
    }
  });
}());

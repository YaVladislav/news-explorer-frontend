export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this.setEventListener();
  }

  toggle() {
    this.popup.classList.toggle('popup_is-opened');
  }

  setContentSucceful() {
    const form = this.popup.querySelector('.popup__form');
    const title = this.popup.querySelector('.popup__title');
    const checkoutText = this.popup.querySelector('.popup__checkout-text');
    form.style.display = 'none';
    title.textContent = 'Пользователь успешно зарегистрирован!';
    checkoutText.textContent = '';
    checkoutText.classList.add('popup__checkout-text_success');
    checkoutText.insertAdjacentHTML('beforeend', `
      <button class="popup__checkout">Выполнить вход</button>
    `);
  }

  setEventListener() {
    this.popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup__close')) {
        this.toggle();
      }
    });
    this.popup.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.toggle();
      }
    });
  }
}

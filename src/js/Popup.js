export default class {
  constructor(popup) {
    this.popup = popup;
  }

  toggle() {
    this.popup.classList.toggle('popup_is-opened');
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

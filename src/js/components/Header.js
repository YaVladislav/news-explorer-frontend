export default class {
  constructor(header) {
    this.header = header;
  }

  render() {
    const { isLoggedIn, userName } = localStorage;
    const button = this.header.querySelector('.header__button');
    const linkSecondary = this.header.querySelector('.navigation__item_secondary');
    button.textContent = '';
    if (isLoggedIn) {
      button.insertAdjacentHTML('beforeend', `
      ${userName}
      <svg class="button__image" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z" />
      </svg>
      `);
      linkSecondary.style.display = 'flex';
    } else {
      button.textContent = 'Авторизоваться';
      linkSecondary.style.display = 'none';
    }
  }
}

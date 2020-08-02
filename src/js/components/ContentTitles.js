import sortArr from '../utils/sortArr';

export default class ContentTitles {
  constructor(container) {
    this.container = container;
  }

  renderTitle() {
    const title = this.container.querySelector('.content__title');
    title.textContent = `${localStorage.userName}, у вас ${this.cards.length} статей`;
  }

  renderSubtitle() {
    const keys = sortArr(this.cards);
    const subtitle = this.container.querySelector('.content__subtitle');
    subtitle.textContent = '';
    if (keys.length < 4) {
      subtitle.insertAdjacentHTML('beforeend', `
        По ключевым словам:
        <span class="articles__key">${keys.join(', ')}</span>
      `);
    } else {
      subtitle.insertAdjacentHTML('beforeend', `
        По ключевым словам:
        <span class="articles__key">${keys[0]},${keys[1]}</span>
        и
        <span class="articles__key">${keys.length - 2} другим</span>
    `);
    }
  }
}

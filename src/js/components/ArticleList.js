import notFoundImage from '../../images/preloader/not-found.svg';

export default class {
  constructor(container, articleMethod, preloader) {
    this.container = container;
    this.preloader = preloader;
    this.articleMethod = articleMethod;
  }

  renderResults() {
    const {
      container,
      articleMethod,
      cards,
    } = this;
    container.parentElement.classList.add('articles_active');
    const cardsQuantity = container.childElementCount;
    for (let i = cardsQuantity; i <= cardsQuantity + 2; i += 1) {
      const article = articleMethod.create(cards[i]);
      if (!article) {
        return;
      }
      container.appendChild(article);
    }
  }

  renderLoader(status) {
    this.preloader.innerHTML = '';
    this.preloader.insertAdjacentHTML('beforeend', `
      <i class="preloader__circle"></i>
      <h2 class="preloader__text">Идет поиск новостей...</h2>
    `);
    if (status === 'active') {
      this.preloader.classList.add('preloader_active');
    } else if (status === 'inactive') {
      this.preloader.classList.remove('preloader_active');
    }
  }

  renderError() {
    this.preloader.innerHTML = '';
    this.preloader.insertAdjacentHTML('beforeend', `
      <img class="preloader__image" src="${notFoundImage}" alt="not-found">
      <h2 class="preloader__title">Ничего не найдено</h2>
      <h3 class="preloader__text">К сожалению по вашему запросу ничего не найдено.</h3>
    `);
  }

  showMore() {
    this.renderResults(this.articles);
  }

  // eslint-disable-next-line no-unused-vars
  addCard(link, image, date, title, text, source, keyword, _id) {
    this.cards.push({
      link,
      image,
      date,
      title,
      text,
      source,
      keyword,
      _id,
    });
  }
}

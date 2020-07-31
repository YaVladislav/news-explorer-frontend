import notFoundImage from '../../images/preloader/not-found.svg';

export default class {
  constructor(container, preloader, articleMethod, apiMethod) {
    this.container = container;
    this.preloader = preloader;
    this.articleMethod = articleMethod;
    this.apiMethod = apiMethod;
  }

  renderResults() {
    const {
      container,
      articleMethod,
      apiMethod,
      cards,
    } = this;
    container.parentElement.classList.add('articles_active');
    const cardsQuantity = container.childElementCount;
    for (let i = cardsQuantity; i <= cardsQuantity + 2; i += 1) {
      const article = articleMethod.create(cards[i]);
      container.appendChild(article);
      article.querySelector('.article__button').addEventListener('click', () => {
        apiMethod.createArticle(cards[i]);
      });
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

  addCard(article, keyword) {
    const card = {
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      title: article.title,
      description: article.description,
      source: article.source.name,
      keyword,
    };
    // eslint-disable-next-line no-restricted-syntax
    for (const key in card) {
      if (!card[key]) {
        return;
      }
    }
    this.cards.push(card);
  }
}

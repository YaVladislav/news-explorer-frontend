export default class {
  constructor(container, articleMethod, apiMethod) {
    this.container = container;
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
    const cardsQuantity = container.childElementCount;
    for (let i = cardsQuantity; i <= cardsQuantity + 2; i += 1) {
      const article = articleMethod.create(cards[i]);
      container.appendChild(article);
      article.querySelector('.article__button').addEventListener('click', () => {
        apiMethod.createArticle(cards[i]);
      });
    }
  }

  renderLoader() {

  }

  renderError() {

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

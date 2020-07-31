export default class {
  constructor(container, articleMethod, apiMethod) {
    this.container = container;
    this.articleMethod = articleMethod;
    this.apiMethod = apiMethod;
    this.cards = [];
  }

  renderResults() {
    const { container, articleMethod } = this;
    console.log(container);
    const cardsQuantity = container.childElementCount;
    for (let i = cardsQuantity; i <= cardsQuantity + 2; i += 1) {
      const article = articleMethod.create(this.cards[i]);
      container.appendChild(article);
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
    const { cards } = this;
    const card = {
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      title: article.title,
      description: article.description,
      source: article.source.name,
      keyword,
    };
    cards.push(card);
  }
}

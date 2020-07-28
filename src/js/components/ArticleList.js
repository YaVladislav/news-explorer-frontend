export default class {
  constructor(container, articleMethod) {
    this.container = container;
    this.articleMethod = articleMethod;
  }

  renderResults(articles) {
    this.articles = articles;
    const { container, articleMethod } = this;
    for (let i = 0; i < 3; i += 1) {
      const article = this.articles.splice(1, 1)[0];
      container.appendChild(
        articleMethod.create(
          article.urlToImage,
          article.publishedAt,
          article.title,
          article.description,
          article.source.name,
        ),
      );
    }
  }

  renderLoader() {

  }

  renderError() {

  }

  showMore() {
    this.renderResults(this.articles);
  }

  addCard() {

  }
}

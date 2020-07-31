import setDate from '../utils/formatDate';

export default class {
  constructor(pageKey) {
    this.pageKey = pageKey;
  }

  create(card) {
    const article = document.createElement('div');
    article.className = 'article';
    article.insertAdjacentHTML('beforeend', `
      <a class="article__link" href="${card.url}">
        <img  class="article__image" src="${card.urlToImage}" alt="article-image">
        <time class="article__data" datetime="${card.publishedAt}">${setDate(card.publishedAt)}</time>
        <h2 class="article__title">${card.title}</h2>
        <p class="article__text">${card.description}</p>
        <span class="article__source">${card.source}</span>
      </a>
    `);
    article.append(this.renderIcon());
    return article;
  }

  renderIcon() {
    const button = document.createElement('button');
    button.className = 'article__button';
    if (this.pageKey === 'index') {
      button.insertAdjacentHTML('beforeend', `
        <svg class="article__icon" width="14px" height="19px" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" />
        </svg>
      `);
      button.classList.add('article__button_flag');
    } else {
      button.insertAdjacentHTML('beforeend', `
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" />
        </svg>
      `);
      button.classList.add('article__button_trash');
    }
    return button;
  }
}

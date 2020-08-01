import setDate from '../utils/formatDate';

export default class {
  constructor(pageKey, apiMethod) {
    this.pageKey = pageKey;
    this.apiMethod = apiMethod;
  }

  create(card) {
    if (!card) {
      return undefined;
    }
    const article = document.createElement('div');
    article.className = 'article';
    article.insertAdjacentHTML('beforeend', `
      <a class="article__link" href="${card.link}" target="_blank">
        <img  class="article__image" src="${card.image}" alt="article-image">
        <time class="article__data" datetime="${card.date}">${setDate(card.date)}</time>
        <h2 class="article__title">${card.title}</h2>
        <p class="article__text">${card.text}</p>
        <span class="article__source">${card.source}</span>
      </a>
    `);
    article.append(this.renderIcon(card));
    if (this.pageKey === 'articles') article.append(this.renderKeyword(card));
    return article;
  }

  renderKeyword(card) {
    const keywords = document.createElement('div');
    keywords.className = 'article__keys';
    keywords.insertAdjacentHTML('beforeend', `
      <span class="article__key">${card.keyword}</span>
    `);
    return keywords;
  }

  renderIcon(card) {
    const button = document.createElement('button');
    const message = document.createElement('p');
    button.className = 'article__button';
    message.className = 'article__message';
    message.classList.add('article__message_active');

    if (this.pageKey === 'index') {
      message.innerText = 'Войдите, чтобы сохранять статьи';
      button.insertAdjacentHTML('beforeend', `
        <svg class="article__icon" width="14px" height="19px" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" />
        </svg>
      `);
      button.classList.add('article__button_flag');
    } else if (this.pageKey === 'articles') {
      message.innerText = 'Убрать из сохранённых';
      button.insertAdjacentHTML('beforeend', `
        <svg class="article__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" />
        </svg>
      `);
      button.classList.add('article__button_trash');
    }

    button.appendChild(message);
    this._setEvent(button, card);
    return button;
  }

  _setEvent(element, card) {
    const { apiMethod } = this;

    element.addEventListener('click', () => {
      const icon = element.querySelector('.article__icon');
      const marker = icon.classList.contains('article__icon_marked');
      if (localStorage.isLoggedIn) {
        if (!marker && element.classList.contains('article__button_flag')) {
          apiMethod.createArticle(card)
            .then((result) => {
              // eslint-disable-next-line no-param-reassign
              card._id = result._id;
              icon.classList.add('article__icon_marked');
            });
        } else {
          apiMethod.deleteArticle(card);
          // eslint-disable-next-line no-unused-expressions
          this.pageKey === 'articles' ? element.parentElement.remove() : icon.classList.remove('article__icon_marked');
        }
      }
    });

    element.addEventListener('mouseover', () => {
      if (localStorage.isLoggedIn) {
        if (element.classList.contains('article__button_flag')) {
          element.querySelector('.article__message').classList.remove('article__message_active');
        }
      }
    });
  }
}

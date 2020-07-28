import setDate from '../utils/formatDate';
import imageDefault from '../../images/article/__images/newspaper.svg';

export default class {
  create(imageUrl, data, title, text, source) {
    const article = document.createElement('div');
    const image = (imageUrl === null) ? imageDefault : imageUrl;
    const icon = `
      <svg class="article__icon" width="14px" height="19px" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" />
      </svg>`;
    article.classList.add('article');
    article.insertAdjacentHTML('beforeend', `
      <img  class="article__image" src="${image}" alt="article-image">
      <time class="article__data" datetime="${data}">${setDate(data)}</time>
      <h2 class="article__title">${title}</h2>
      <p class="article__text">${text}</p>
      <span class="article__source">${source}</span>
      <button class="article__button article__button_flag">
        ${icon}
      </button>
    `);
    return article;
  }

  renderIcon() {

  }
}

import '../pages/articles.css';
import 'normalize.css';

import Header from './components/Header';
import Api from './api/Api';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

(function () {
  // Buttons
  const headerButton = document.querySelector('.header__button');
  // Api
  const api = new Api({
    baseUrl: 'https://api.jswa.online',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // Header
  const header = new Header(document.querySelector('.header'));
  // Article
  const article = new Article('articles', api);
  const articleContainer = document.querySelector('.articles__grid');
  const articleList = new ArticleList(articleContainer, article);
  // Events
  headerButton.addEventListener('click', () => {
    localStorage.clear();
    api.signout();
    window.location.reload();
  });
  // Render
  header.render();
  api.getArticles()
    .then((result) => {
      articleList.cards = [];
      result.articles.forEach((card) => {
        articleList.addCard(
          card.link,
          card.image,
          card.date,
          card.title,
          card.text,
          card.source,
          card.keyword,
          card._id,
        );
        articleList.renderResults();
      });
    });
}());

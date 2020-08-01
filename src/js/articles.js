import '../pages/articles.css';
import 'normalize.css';

import Header from './components/Header';
import Api from './api/Api';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import ContentTitles from './components/ContentTitles';

(function () {
  if (!localStorage.isLoggedIn) window.location.href = '/';
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
  const header = new Header(document.querySelector('.header'), 'articles');
  // Titles
  const contentTitles = new ContentTitles(document.querySelector('.articles'));
  // Article
  const articleContainer = document.querySelector('.articles__grid');
  const article = new Article('articles', api, contentTitles);
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
      contentTitles.cards = result.articles.map((card) => card.keyword);
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
      contentTitles.renderTitle();
      contentTitles.renderSubtitle();
    });
}());

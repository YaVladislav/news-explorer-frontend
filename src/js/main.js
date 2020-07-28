import '../pages/index.css';
import 'normalize.css';

import Header from './components/Header';
import Popup from './components/Popup';
import Form from './components/Form';
import Api from './api/Api';
import NewsApi from './api/NewsApi';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

(function () {
  // Buttons
  const headerButton = document.querySelector('.header__button');
  const articlesButton = document.querySelector('.articles__button');
  // Api
  const api = new Api({
    baseUrl: 'https://api.jswa.online',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newsApi = new NewsApi({
    baseUrl: 'http://newsapi.org/v2',
    headers: {
      'X-Api-Key': 'b6f680c65e9f44fbb3fdd0031c6694d0',
    },
  });
  // Header
  const header = new Header(document.querySelector('.header'));
  // Popups
  const popupSignin = new Popup(document.querySelector('.popup_signin'));
  const popupSignup = new Popup(document.querySelector('.popup_signup'));
  // Form
  const form = new Form(api, { popupSignin, popupSignup });
  // Article
  const article = new Article();
  const articleList = new ArticleList(document.querySelector('.articles__grid'), article);
  // Events
  headerButton.addEventListener('click', () => {
    if (!localStorage.isLoggedIn) {
      popupSignin.toggle();
    } else {
      localStorage.clear();
      header.render();
    }
  });
  articlesButton.addEventListener('click', () => {
    articleList.showMore();
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__checkout')) {
      popupSignin.toggle();
      popupSignup.toggle();
      form.setServerError('');
    }
  });
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetForm = e.target;
    // SIGNIN
    if (targetForm.classList.contains('popup__form_signin')) {
      api.signin(
        targetForm.email.value,
        targetForm.password.value,
      )
        .then((result) => {
          localStorage.isLoggedIn = true;
          localStorage.userName = result.user.name;
          popupSignin.toggle();
          header.render();
        })
        .catch((err) => { form.setServerError(err.message); });
    }
    // SIGNUP
    if (targetForm.classList.contains('popup__form_signup')) {
      api.signup(
        targetForm.email.value,
        targetForm.password.value,
        targetForm.name.value,
      )
        .then(() => popupSignup.setContentSucceful())
        .catch((err) => { form.setServerError(err.message); });
    }
    // SEARCH
    if (targetForm.classList.contains('search__form')) {
      newsApi.getNews(
        targetForm.keyword.value,
      )
        .then((results) => articleList.renderResults(results.articles))
        .catch((err) => console.log(err));
    }
  });
  document.addEventListener('input', (e) => {
    if (!e.target.classList.contains('search__input')) {
      form.inputValidation(e.target);
      form.setServerError('');
    }
  });
  // Render
  header.render();
}());

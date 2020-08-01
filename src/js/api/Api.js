import responseHandler from '../utils/responseHandler';

export default class {
  constructor(option) {
    this.baseUrl = option.baseUrl;
    this.headers = option.headers;
  }

  signup(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }

  signout() {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }

  signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }

  // eslint-disable-next-line no-unused-vars
  createArticle(card) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        link: card.link,
        image: card.image,
        date: card.date,
        title: card.title,
        text: card.text,
        source: card.source,
        keyword: card.keyword,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }

  deleteArticle(article) {
    return fetch(`${this.baseUrl}/articles/${article._id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }
}

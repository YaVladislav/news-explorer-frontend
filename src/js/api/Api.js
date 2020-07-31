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

  createArticle(article) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        link: article.url,
        image: article.urlToImage,
        date: article.publishedAt,
        title: article.title,
        text: article.description,
        source: article.source,
        keyword: article.keyword,
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
}

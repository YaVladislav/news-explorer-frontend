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
    })
      .then((res) => {
        responseHandler(res);
      })
      .catch((err) => Promise.reject(err));
  }
}

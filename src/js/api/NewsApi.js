import setDate from '../utils/setTodayDate';

export default class {
  constructor(option) {
    this.baseUrl = option.baseUrl;
    this.headers = option.headers;
  }

  getNews(keyword) {
    const url = `${this.baseUrl}/everything?`
                + `q=${keyword}&`
                + `from=${setDate(-7)}&`
                + `to=${setDate()}&`
                + 'pageSize=100&'
                + 'apiKey=b6f680c65e9f44fbb3fdd0031c6694d0';

    return fetch(url, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  }
}

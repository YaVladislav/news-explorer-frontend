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
                + 'pageSize=100';

    return fetch(url, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

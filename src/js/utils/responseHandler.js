export default (response) => {
  switch (response.status) {
    case 409:
      throw new Error('Такой пользователь уже существует');
    case 401:
      throw new Error('Неправильная почта или пароль');
    case 400:
      throw new Error('Неправильный запрос');
    default:
      return response.json();
  }
};

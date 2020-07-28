export default function (value) {
  const date = Date.parse(value);
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  const allMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const month = allMonth[formatDate.getMonth()];
  const day = formatDate.getDate();
  return `${day} ${month},${year}`;
}

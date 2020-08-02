export default function (value = 0) {
  const date = new Date();
  date.setDate(date.getDate() + value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

/* eslint-disable no-param-reassign */

export default function (obj) {
  switch (null) {
    case obj.urlToImage:
      obj.urlToImage = 'https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_960_720.jpg';
      break;
    case obj.title:
      obj.title = 'Неизвестный заголовок';
      break;
    case obj.description:
      obj.description = 'Неизвестный заголовок';
      break;
    case obj.source.name:
      obj.source.name = 'Неизвестный источник';
      break;
    default:
      break;
  }
}

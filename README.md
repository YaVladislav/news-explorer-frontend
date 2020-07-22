# Проект News-explorer
##### Актуальная версия 0.0.2

### [Cсылка](https://yavladislav.github.io/news-explorer-frontend/) на Github pages.

---
### Описание

Итоговая дипломная работа на пути к становлению web разработчика.
News-explorer - это сервис, в котором можно найти новости по запросу и сохранить в личном кабинете.

##### Как это работает?
Пользователь вводит в строку поиска ключевые слова, по которым хочет найти статьи.
По нажатию кнопки «Искать» сайт выполняет два действия:
1. отправляет запрос к сервису NewsAPI, находит все статьи по запросу за последнюю неделю и отображает карточки с найденными статьями;
2. после этого пользователь может сохранять понравившиеся статьи, они будут отображаться в отдельном разделе на сайте.

---
### Установка:
Клонируем репозиторий
>`$ git clone git@github.com:YaVladislav/news-explorer-frontend.git`

Открываем проект в терминале и устанавливаем зависимости
>`$ npm install`

---
### Запуск:
Собирает проект и минифицирует код в директорию dist. В режиме production.
>`$ npm run start`

Запускает проект на локальном сервере (По умолчанию это localhost:8080). В режиме development c хотрелоудом.
>`$ npm run build`

Копирует собранный проект из папки dist в ветку gh-pages репозитория.
>`$ npm run deploy`

---
### Планы:

Основные:
1. Победить JS
2. Рефакторинг кода
3. Исправления багов
4. Если дошел до этого пункта, то начать с пункта 2

Что добавить: 
1. Основной функционал работы со статьями (JS)
2. Выпадающее меню в хедере (JS)
3. Выпадающие сообщения возле иконок в карточках статей (JS)
4. Валидация всех форм и инпутов (JS)
5. +++
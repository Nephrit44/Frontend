//============================================Формат JSON========================================
//Пример:

[
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky",
  },
];

//Обратите внимание, что ключи взяты в двойные кавычки — в JSON это обязательно

//=============================================Методы JSON.stringify и JSON.parse======================================

//Метод JSON.stringify делает из объекта строку JSON:
const songs = [
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky",
  },
];

const songsJSON = JSON.stringify(songs);

console.log(songsJSON);
console.log(typeof songsJSON); // "string"

//Метод JSON.parse делает обратное — преобразовывает JSON-строку в объект JavaScript:
const songs = [
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky",
  },
];

const songsJSON = JSON.stringify(songs);

console.log(typeof songsJSON); // "string"

const songsObject = JSON.parse(songsJSON);

console.log(typeof songsObject); // "object"
console.log(songsObject[0].title); // "Вектора"

/*
Методу JSON.parse нельзя передать какую угодно строку
Строка должна быть JSON-совместимой, то есть:
на верхнем уровне должен быть объект или массив;
ключи и значения-строки должны быть в двойных кавычках;
кроме строк JSON может содержать числовые, булевы значения или null.
*/

//============================================Метод res.json===========================
//Метод fetch возвращает объект ответа
fetch("https://praktikum.yandex.ru").then((res) => {
  console.log(res); // В консоли окажется объект ответа от сервера
});

//Пример:
fetch("https://praktikum.yandex.ru")
  .then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then((data) => {
    console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log("Ошибка. Запрос не выполнен");
  });

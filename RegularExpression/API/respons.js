//======================================= Ответ JSON ============================
//Пример:
const quoteElement = document.querySelector("div.quote");

fetch("https://api.kanye.rest")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }

    /* отклоняем промис, чтобы перейти
    в блок catch, если сервер вернул ошибку */
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .then((data) => {
    quoteElement.textContent = data.quote;
  })
  .catch((err) => {
    console.log(err); // "Что-то пошло не так: ..."
  });

//======================================= ЗАГОЛОВКИ ОТВЕТА ============================
fetch("https://api.kanye.rest").then((res) => {
  if (res.headers.get("Content-Type").contains("application/json")) {
    return res.json();
  }
});

//======================================= ТЕЛО ОТВЕТА ============================
res.json; // — разбирает JSON в объект, этот метод вы уже знаете;
res.text; // — разбирает тело как текст;
res.blob; // — разбирает тело ответа как бинарные данные: это нужно при получении файлов (изображений, видео, pdf-документов).

/* методы разбора тела возвращают промис
их нужно использовать асинхронно */

fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

fetch("https://api.kanye.rest")
  .then((res) => res.text())
  .then((result) => {
    console.log(result);
  });


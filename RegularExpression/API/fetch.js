//======================================Метод fetch===========================================
fetch("https://example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "ivan",
  }),
});
/*
Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда этот метод получает 
ответ, то переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch:
*/

fetch('https://example.com')
  .then((res) => {
    console.log(res); // если всё хорошо, получили ответ
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
const buttons = document.querySelectorAll(".button");
// Ссылка на вашу группу в Telegram (замените на свою)  
const telegramGroupURL = 'https://t.me/Deni77755';  // Ссылка на вашу группу в Telegram
// Добавляем обработчик событий для каждой кнопки
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Перенаправляем на Telegram      
    window.location.href = telegramGroupURL;
  });
});

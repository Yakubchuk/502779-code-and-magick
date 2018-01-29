var MY_CLOUD_WIDTH = 420;
var MY_CLOUD_HEIGHT = 270;
var MY_CLOUD_X = 100;
var MY_CLOUD_Y = 10;
var BAR_Y = 250;
var TEXT_CLOUD_Y = 270;
var GAP = 10;
var BAR_WIDTH = 40;
var MARGIN = 50;
var BAR_HEIGHT = -150;
var createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, MY_CLOUD_WIDTH, MY_CLOUD_HEIGHT);
};
// Функция Поиска Максимального Элемента
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, names, times) {
  var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  //  ------------рисуем Тень
  createCloud(ctx, MY_CLOUD_X + GAP, MY_CLOUD_Y + GAP, SHADOW_COLOR);
  //  -------------рисуем облако
  createCloud(ctx, MY_CLOUD_X, MY_CLOUD_Y, CLOUD_COLOR);
  // ------------рисуем Текст о Победе
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono #000';
  ctx.fillText('Ура вы победили!', MY_CLOUD_X * 2 + GAP, 30);
  ctx.fillText('Список результатов:', MY_CLOUD_X * 2 + GAP, 45);
  // ------------- Переменные Игроков
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random().toFixed(2) || 0.1) + ' )';
    //  ------------ отрисовка графика
    ctx.fillText(names[i], BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), TEXT_CLOUD_Y);
    ctx.fillRect(BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), MY_CLOUD_HEIGHT + ((BAR_HEIGHT * times[i]) / maxTime) - GAP * 3);
  }
};

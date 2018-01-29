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
var myCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, MY_CLOUD_WIDTH, MY_CLOUD_HEIGHT);
};
// Функция Поиска Максимального Элемента
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
//  ------------рисуем Тень
  myCloud(ctx, MY_CLOUD_X + GAP, MY_CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  // ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  // ctx.fillRect(110, 20, 420, 270);
  //  -------------рисуем облако
  myCloud(ctx, MY_CLOUD_X, MY_CLOUD_Y, 'rgba(255, 255, 255, 1)');
  // ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  // ctx.fillRect(100, 10, 420, 270);
  // ------------рисуем Текст о Победе
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono #000';
  ctx.fillText('Ура вы победили!', MY_CLOUD_X * 2 + GAP, 30);
  ctx.fillText('Список результатов:', MY_CLOUD_X * 2 + GAP, 45);
  // ------------- Переменные Игроков


  var Players = ['Вы', 'Маша', 'Кекс'];
  var maxTime = getMaxElement(times);
  if (Players.length < times.length) {
    for (var i = 1; times.length - Players.length; i++) {
      Players[Players.length - 1 + i] = 'noname' + i;
    }
  }
  for (var i = 0; i < Players.length; i++) {
    if (Players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ' )';
    }

    ctx.fillText(Players[i], BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), TEXT_CLOUD_Y);
    ctx.fillRect(BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), BAR_WIDTH + MY_CLOUD_X + (MARGIN * i) + (BAR_WIDTH * i), MY_CLOUD_HEIGHT + ((BAR_HEIGHT * times[i]) / maxTime) - GAP * 3);
  }
  //  ------------ отрисовка графика
  // var playerIndex =0;
  // var playerName = 'Вы';
  // ctx.fillText(playerName, 40 + 100 + (50 * playerIndex) + (40 * playerIndex), 270);
  // ctx.fillRect(40 + 100 + (50 * playerIndex) + (40 * playerIndex), 250, 40, -Statistics);
  // playerIndex = 1;
  // playerName = 'Кекс';
  // ctx.fillText(playerName, 40 + 100 + (50 * playerIndex) + (40 * playerIndex), 270);
  // ctx.fillRect(40 + 100 + (50 * playerIndex) + (40 * playerIndex), 250, 40, -Statistics);
  // // playerIndex = 3;
  // playerName = 'Пётр';
  // ctx.fillText(Players[i], MY_CLOUD_X + MARGIN * playerIndex, TEXT_CLOUD_Y);
  // ctx.fillRect(MY_CLOUD_X + MARGIN * playerIndex, BAR_Y, BAR_WIDTH, -Statistics);
  // playerIndex = 4;
  // playerName = 'Настя';
  // ctx.fillText(Players[i], MY_CLOUD_X + MARGIN * playerIndex, TEXT_CLOUD_Y);
  // ctx.fillRect(MY_CLOUD_X + MARGIN * playerIndex, BAR_Y, BAR_WIDTH, -Statistics);
};

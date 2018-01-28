var MY_CLOUD_WIDTH = 420;
var MY_CLOUD_HEIGHT = 270;

var myCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, MY_CLOUD_WIDTH, MY_CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  //------------рисуем Тень
  myCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  // ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  // ctx.fillRect(110, 20, 420, 270);

  //-------------рисуем облако
  myCloud(ctx, 100, 10, 'rgba(255, 255, 255, 1)');
  // ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  // ctx.fillRect(100, 10, 420, 270);
  //------------рисуем Текст о Победе
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 210, 30);
  ctx.fillText('Список результатов:', 210, 45);
};

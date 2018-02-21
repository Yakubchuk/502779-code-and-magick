'use strict';

var moveHandler = document.querySelector('.setup-user-pic');
moveHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoord = {
    x: evt.clientX,
    y: evt.clientY
  };
  console.log(startCoord);
  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = {
      x: startCoord.x - moveEvt.clientX,
      y: startCoord.y - moveEvt.clientY
    };
    startCoord = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    window.SETUP.style.top = (window.SETUP.offsetTop - shift.y) + 'px';
    window.SETUP.style.left = (window.SETUP.offsetLeft - shift.x) + 'px';
  };
  var onMouseUp = function () {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

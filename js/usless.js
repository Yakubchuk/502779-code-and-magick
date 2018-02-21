(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.usless = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
  window.SETUP = document.querySelector('.setup');
})();

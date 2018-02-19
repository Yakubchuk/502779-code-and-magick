'use strict';
(function () {

  // document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Дензель'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['red', 'blue', 'yellow', 'green'];

  //  ---функция вычисления случайных значений

  function getRandomNum(max, min) {
    return Math.floor(Math.random() * (max + 1 - min));
  }
  //  ---создаем массив объектов со случайными значениями
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] =
      {
        name: WIZARD_NAMES[getRandomNum(WIZARD_NAMES.length, 1)] + ' ' + WIZARD_SURNAMES[getRandomNum(WIZARD_SURNAMES.length, 1)],
        coatColor: COAT_COLORS[getRandomNum(COAT_COLORS.length, 1)],
        eyesColor: EYES_COLORS[getRandomNum(EYES_COLORS.length, 1)]
      };
  }
  //  ---Заполняем карточки магов
  var renderWizard = function (item) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = item.name;
    wizardElement.querySelector('.wizard-coat').style.fill = item.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
    return wizardElement;
  };
  var renderAll = function (items) {
    for (var i = 0; i < items.length; i++) {
      fragment.appendChild(renderWizard(items[i]));
    }
  };
  var fragment = document.createDocumentFragment();
  renderAll(wizards);
  similarListElement.appendChild(fragment);
  document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');
  // ---module4-task1
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  // --- Открытие окна
  var openSettings = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  // --- Закрытие окна
  var closeSettings = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  // --- удаление обработчика
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSettings();
    }
  };
  // --- описание функций
  setupOpen.addEventListener('click', function () {
    openSettings();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE){openSettings();}
  });
  setupClose.addEventListener('click', function () {
    closeSettings();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE){closeSettings();}
  });
  // --- WIZARD CLOTHES
  var WIZARD_COAT = document.querySelector('.wizard-coat');
  var WIZARD_EYES = document.querySelector('.wizard-eyes');
  var BALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_WEAPON = document.querySelector('.setup-fireball-wrap');
  var NAME_FILL = document.querySelector('.setup-user-name');
  var SUBBMIT = document.querySelector('.setup-submit');
  var changeColor = function (el, obj) {
    el.style.fill = obj[getRandomNum(obj.length, 1)];
  };
  var changeWeapon = function (el, obj) {
    el.style.background = obj[getRandomNum(obj.length, 1)];
  };
  WIZARD_EYES.addEventListener('click', function () {
    changeColor(WIZARD_EYES, EYES_COLORS);
  });
  WIZARD_COAT.addEventListener('click', function () {
    changeColor(WIZARD_COAT, COAT_COLORS);
  });
  WIZARD_WEAPON.addEventListener('click', function () {
    changeWeapon(WIZARD_WEAPON, BALL_COLOR);
  });
  NAME_FILL.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
  SUBBMIT.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE){
      this.submit();
    }
  });
})();

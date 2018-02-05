'use strict';
document.querySelector('.setup').classList.remove('hidden');
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

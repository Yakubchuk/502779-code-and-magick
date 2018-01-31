'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Дензель'];
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// var coatColor = 'rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)';
// var eyesColor = 'eyesColor','red','blue','yellow','green';
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardNames[Math.round(Math.random() * (wizardNames.length - 1) + 1)] + ' ' + wizardSurName[Math.round(Math.random() * (wizardSurName.length - 1) + 1)];
  // console.log(Math.round(Math.random() * (9 - 1) + 1));
  wizardElement.querySelector('.wizard-coat').setAttribute( "fill", "yellow");
  wizardElement.querySelector('.wizard-eyes').setAttribute( "fill", "green");
  similarListElement.appendChild(wizardElement);
}

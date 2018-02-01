'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Дензель'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['red', 'blue', 'yellow', 'green'];

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
var wizards = [];
for( var i = 0; i < 4; i++){
  wizards[i] =
    {
      name: wizardNames[getRandomNum(wizardNames.length - 1, 1)] + ' ' + wizardSurName[getRandomNum(wizardSurName.length - 1, 1)],
      coatColor: coatColors[getRandomNum(coatColors.length - 1, 1)],
      eyesColor: eyesColors[getRandomNum(eyesColors.length - 1, 1)]
    }
}
// console.log(mag);
// var wizards = [
//   {
//     name: wizardNames[getRandomNum(wizardNames.length - 1, 1)] + ' ' + wizardSurName[getRandomNum(wizardSurName.length - 1, 1)],
//     coatColor: coatColors[getRandomNum(coatColors.length - 1, 1)],
//     eyesColor: eyesColors[getRandomNum(eyesColors.length - 1, 1)]
//   },
//   {
//     name: wizardNames[getRandomNum(wizardNames.length - 1, 1)] + ' ' + wizardSurName[getRandomNum(wizardSurName.length - 1, 1)],
//     coatColor: coatColors[getRandomNum(coatColors.length - 1, 1)],
//     eyesColor: eyesColors[getRandomNum(eyesColors.length - 1, 1)]
//   },
//   {
//     name: wizardNames[getRandomNum(wizardNames.length - 1, 1)] + ' ' + wizardSurName[getRandomNum(wizardSurName.length - 1, 1)],
//     coatColor: coatColors[getRandomNum(coatColors.length - 1, 1)],
//     eyesColor: eyesColors[getRandomNum(eyesColors.length - 1, 1)]
//   },
//   {
//     name: wizardNames[getRandomNum(wizardNames.length - 1, 1)] + ' ' + wizardSurName[getRandomNum(wizardSurName.length - 1, 1)],
//     coatColor: coatColors[getRandomNum(coatColors.length - 1, 1)],
//     eyesColor: eyesColors[getRandomNum(eyesColors.length - 1, 1)]
//   },
// ];
console.log(wizards);
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);


  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
function createRandomWizards(){

}


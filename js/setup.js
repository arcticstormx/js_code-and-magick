'use strict';

function showSetup() {
  var setup = document.querySelector(".setup");
  setup.classList.remove("hidden");
}

showSetup();

var NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

var wizardsArray = [];

function getRandomElement(arr) {
  var min = 0;
  var max = arr.length - 1;
  var randomElement = Math.floor(Math.random() * (max + 1));
  return arr[randomElement];
}

function createWizard(num) {
  if (num != undefined) {
    var wizards = [];
    for (var i = 0; i < num; i++) {
      var wizard = {};
      wizard.name = getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES);
      wizard.coatColor = getRandomElement(COAT_COLORS);
      wizard.eyesColor = getRandomElement(EYES_COLORS);
      wizards.push(wizard);
    }
    return wizards;
  }
  else {
    var wizard = {};
    wizard.name = getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES);
    wizard.coatColor = getRandomElement(COAT_COLORS);
    wizard.eyesColor = getRandomElement(EYES_COLORS);
    return wizard;
  }
}

wizardsArray = createWizard(4);

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}

similarListElement.appendChild(fragment);

document.querySelector(".setup-similar").classList.remove("hidden");

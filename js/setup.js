'use strict';


var NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];
var FIREBALL_COLORS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"]
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardsArray = [];

var wizardCoat = document.querySelector(".wizard-coat");
var wizardEyes = document.querySelector(".wizard-eyes");
var wizardFireball = document.querySelector(".setup-fireball-wrap");

var setup = document.querySelector(".setup");
var setupOpen = document.querySelector(".setup-open");
var setupClose = setup.querySelector(".setup-close");
var submitBtn = document.querySelector(".setup-submit");
var setupForm = document.querySelector(".setup-wizard-form");
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

var fragment = document.createDocumentFragment();

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

submitBtn.addEventListener('keydown', function(evt) {
  if ((evt.keyCode === ENTER_KEYCODE) && (!setup.classList.contains('hidden'))) {
    setupForm.submit();
  }
});

wizardCoat.addEventListener('click', function() {
  var coatColor = getRandomElement(COAT_COLORS);
  var coatColorInput = setup.querySelector('input[name="coat-color"]');
  wizardCoat.setAttribute('style', 'fill: ' + coatColor);
  coatColorInput.setAttribute('value', coatColor);
});

wizardEyes.addEventListener('click', function() {
  var eyesColor = getRandomElement(EYES_COLORS);
  var eyesColorInput = setup.querySelector('input[name="eyes-color"]');
  wizardEyes.setAttribute('fill', eyesColor);
  eyesColorInput.setAttribute('value', eyesColor);
});

wizardFireball.addEventListener('click', function() {
  var fireballColor = getRandomElement(FIREBALL_COLORS);
  var fireballColorInput = setup.querySelector('input[name="fireball-color"]');
  wizardFireball.setAttribute('style', 'background: ' + fireballColor);
  fireballColorInput.setAttribute('value', fireballColor);
});

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

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
}

wizardsArray = createWizard(4);

for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}

similarListElement.appendChild(fragment);

document.querySelector(".setup-similar").classList.remove("hidden");



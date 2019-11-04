'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireballSpeed = function (left) {
  if (left == true) {
    return 5;
  }
  else {
    return 2;
  }
};

var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

var getWizardX = function (width) {
  return (width / 2) - (wizardWidth / 2);
};

var getWizardY = function (height) {
  return (height / 3) - getWizardHeight();
};

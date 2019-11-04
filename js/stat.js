'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

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

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  for (var i = 0; i < players.length; i++) {
    if (players[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle =
    }
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_HEIGHT + CLOUD_Y) - 30);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT + CLOUD_Y - BAR_WIDTH, BAR_WIDTH, (barHeight * times[i] / maxTime) * -1);
  }
};


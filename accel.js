document.addEventListener('DOMContentLoaded', function() {

  var alphaEl = document.querySelector('#alpha');
  var betaEl = document.querySelector('#beta');
  var gammaEl = document.querySelector('#gamma');
  var absoluteEl = document.querySelector('#absolute');

  var planeEl = document.querySelector('#plane');
  var ballEl = document.querySelector('#ball');

  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  };

  init();
  wire();

  function init() {
    ballCenter();
  }

  function wire() {
    window.addEventListener('deviceorientation', orientationH, true);
  }

  function orientationH(e) {
    var absolute = e.absolute;
    var alpha = e.alpha;
    var beta = e.beta;
    var gamma = e.gamma;

    if (alpha === null && beta === null && gamma === null) return;

    dataUpd(absolute, alpha, beta, gamma);
    ballUpd(beta, gamma);
  }

  function dataUpd(absolute, alpha, beta, gamma) {
    absoluteEl.innerHTML = absolute;
    alphaEl.innerHTML = alpha;
    betaEl.innerHTML = beta;
    gammaEl.innerHTML = gamma;
  }

  function ballUpd(beta, gamma) {
    var y = Math.round(beta) + 90;
    var x = Math.round(gamma) + 90;

    var ballLeft = size.width * x/180 - 10;
    var ballTop = size.height * y/180 - 10;

    ballMove(ballLeft, ballTop);
  }

  function ballMove(left, top) {
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';
  }

  function ballCenter() {
    var ballLeft = size.width/2 - 10;
    var ballTop = size.height/2 - 10;

    ballMove(ballLeft, ballTop);
  }
});

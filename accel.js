document.addEventListener('DOMContentLoaded', function() {

  var alphaEl = document.querySelector('#alpha');
  var betaEl = document.querySelector('#beta');
  var gammaEl = document.querySelector('#gamma');
  var absoluteEl = document.querySelector('#absolute');

  var planeEl = document.querySelector('#plane');
  var ballEl = document.querySelector('#ball');

  wire();

  function wire() {
    window.addEventListener('deviceorientation', orientationH, true);
  }

  function orientationH(e) {
    var absolute = e.absolute;
    var alpha = e.alpha;
    var beta = e.beta;
    var gamma = e.gamma;

    dataUpd(absolute, alpha, beta, gamma);
  }

  function dataUpd(absolute, alpha, beta, gamma) {
    absoluteEl.innerHTML = absolute;
    alphaEl.innerHTML = alpha;
    betaEl.innerHTML = beta;
    gammaEl.innerHTML = gamma;
  }
});

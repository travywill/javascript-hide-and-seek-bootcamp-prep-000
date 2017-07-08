function getFirstSelector(selector) {
  //
  var firstSelector = document.querySelector(selector);
  return firstSelector
}

function nestedTarget() {
  //
  var nested = document.getElementsByClassName('target')[0];
  return nested
}

function increaseRankBy(n) {
  //
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  } return lis
}

function deepestChild() {
  //
  var grandNode = document.getElementById('grand-node').querySelectorAll('div');
  var deepest = grandNode[grandNode.length -1];
  return deepest
}

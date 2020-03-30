// NodeList.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Shuffle
document.querySelectorAll('ul.shuffle').forEach(function (listElt) {
  if (listElt.children.length) {
    for (var i = listElt.children.length; i >= 0; i--) {
      listElt.appendChild(listElt.children[Math.random() * i | 0]);
    }
  }
});

'use strict';

let ttlSlider = document.getElementById('ttlSlider');
let ttlMsg = document.getElementById('ttlMsg');

chrome.storage.sync.get(['ZoomTtl'], function (result) {
  ttlMsg.innerHTML = 'zoom tabs will close in ' + result.ZoomTtl + 'ms';
});

ttlSlider.addEventListener('click', function () {
  let message = 'zoom tabs will close in ' + this.value + 'ms';

  chrome.storage.sync.set({ ZoomTtl: this.value }, function () {
    ttlMsg.innerHTML = message;
    console.log(message);
  });
});

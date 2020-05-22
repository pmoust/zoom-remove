'use strict';

chrome.runtime.onInstalled.addListener(function () {
  let ttl = 10000; // ms
  chrome.storage.sync.set({ ZoomTtl: ttl }, function () {
    console.log('removing Zoom tabs after ' + ttl + 'ms');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlMatches: '(.*)(zoom\.us\/)[j|s|postattendee](.*)', schemes: ['https'] },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener(
  function (req, sender) {
    let tabId = sender.tab.id;
    chrome.tabs.remove(tabId, function () {
      console.log('removed up Zoom tab ' + tabId);
    });
  }
);

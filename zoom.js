chrome.storage.sync.get(['ZoomTtl'], function (result) {
    setTimeout(function () {
        chrome.runtime.sendMessage({}, function () { });
    }, result.ZoomTtl);
});

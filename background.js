'use strict';

chrome.runtime.onInstalled.addListener(function() {
  console.log('Start primeBk');

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'likebk.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});



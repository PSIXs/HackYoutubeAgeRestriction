chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo == "showPageAction") {
          chrome.pageAction.show(sender.tab.id);
  }
});
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    var new_url = changeInfo.url;
    if (new_url != undefined && new_url.indexOf('youtube') !==-1 ) {
      chrome.tabs.sendMessage(tabId, {todo: "reloadPage"});
    }
  }
);

chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});

chrome.runtime.requestUpdateCheck(function(status) {
  if (status == "update_available") {
    console.log("update pending...");
  } else if (status == "no_update") {
    console.log("no update found");
  } else if (status == "throttled") {
    console.log("Oops, I'm asking too frequently - I need to back off.");
  }
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo == "showPageAction")
  {
      chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
          chrome.pageAction.show(tabs[0].id);
      });
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
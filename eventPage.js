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
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    // todo implement page restoring
  }
);
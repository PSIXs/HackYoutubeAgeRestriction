chrome.runtime.sendMessage({todo: "showPageAction"});
/**
 * 
 * @param {string} v_url 
 * @returns {string};
 */
function get_video_id(v_url){
  if (v_url.indexOf("watch") == -1) {
    return "-1";
  }
  var i = v_url.indexOf("v=");
  if (i == -1) return "-1";
  var ans = "";
  for (i = i + 2; i < v_url.length; i++) {
    if (v_url[i] == '?' || v_url[i] == '/' || v_url[i] == '&') {
      return ans;
    }
    ans += v_url[i];
  }
  return ans;
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "unblockVideo") {
      var page_href = window.location.href;
      new_code = '<iframe class="unblocked" width="971" height="546" src="https://www.youtube.com/embed/'+get_video_id(page_href)+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      alert(get_video_id(page_href));
      var new_player = this.document.createElement("span");
      new_player.innerHTML = new_code;
      var myNode = this.document.getElementById("player-container-outer");
      myNode = myNode.parentNode;
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      myNode.appendChild(new_player);  
    }
    if (request.todo == "reloadPage") {
      document.location.reload(true);
    }
});
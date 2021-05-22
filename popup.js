var i=0;
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
//		alert("前端/后端/Popup收到");
	//	sendResponse("popup返回值");
 // alert(i)
  i=i+1;
  if(i<10){
  //  alert("Open"+i)
 // window.location.href="https://s.weibo.com/weibo?q=%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8&typeall=1&suball=1&timescope=custom:2021-01-06-16:2021-01-07-16&Refer=g&display=0&retcode=6102"
 //window.location.href="https://s.weibo.com/weibo?q=%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8&typeall=1&suball=1&timescope=custom:2021-01-0"+i+"-16:2021-01-0"+(i+1)+"-16&Refer=g&display=0&retcode=6102"
    
}
	}
);
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
   i=1;
   //for(i=1;i<9;i++){
       window.location.href="https://s.weibo.com/weibo?q=%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8&typeall=1&suball=1&timescope=custom:2021-01-0"+i+"-16:2021-01-0"+(i+1)+"-16&Refer=g&display=0&retcode=6102"
    //  alert(i)
     // }
}


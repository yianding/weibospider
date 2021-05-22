//alert("Hello");
/*
function doSave(value, type, name) {
    var blob;
    if (typeof window.Blob == "function") {
        blob = new Blob([value], {type: type});
    } else {
        var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
        var bb = new BlobBuilder();
        bb.append(value);
        blob = bb.getBlob(type);
    }
    var URL = window.URL || window.webkitURL;
    var bloburl = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    if ('download' in anchor) {
        anchor.style.visibility = "hidden";
        anchor.href = bloburl;
        anchor.download = name;
        document.body.appendChild(anchor);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        anchor.dispatchEvent(evt);
        document.body.removeChild(anchor);
    } else if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, name);
    } else {
        location.href = bloburl;
    }
}*/
$( document ).ready(function() {
   // console.log( document.innerHTML);
    //alert(document.body.innerHTML);
    aaa=document.getElementById('pl_feedlist_index').getElementsByClassName('ctips')[0].textContent
    try {
        bbb=document.getElementById('pl_feedlist_index').getElementsByClassName('s-scroll')[0].getElementsByTagName('li').length
    }
    catch(err) {
        bbb=0
    }
    try {
        
         ccc=document.getElementsByClassName('search-input')[0].getElementsByTagName('input')[0].value
    }
    catch(err) {
        ccc=""
    }
   // alert(ccc+bbb+aaa)
   // doSave(ccc+aaa+bbb, "text/latex", "hello.txt");
   /* 
   chrome.runtime.sendMessage({
        info: "我是 content.js"
    }, res => {
        // 答复
        //alert(res)
    })
*/
    var arrys=window.location.href.split(":")
   
    var  ds=arrys[2].substring(0,10)

    console.log('日期: |'+ds+'|  数量:'+bbb+'页'+'关键词:'+ccc)
    $.get("https://fuckut.xyz/s.php?q="+ds+" "+ccc+" "+bbb,function(data,status){
       // alert("数据: " + data + "\n状态: " + status);
    });
    console.log(arrys[2])
   
    var datetim =new Date(ds)
    var day = new Date(ds);
    var yestoDay = new Date(day);
    yestoDay.setDate(day.getDate()-1);
    var yyestoDay = new Date(day);
    yyestoDay.setDate(day.getDate()-2);
    yestodaystring=yestoDay.toISOString().substring(0,10)
    yyestodaystring=yyestoDay.toISOString().substring(0,10)
    console.log(yestodaystring); // May 01 2000 
    
    console.log(yyestodaystring); // May 01 2000 
     var newurl=arrys[0]+":"+arrys[1]+":"+yestodaystring+arrys[2].substring(10)+":"+ds+arrys[3].substring(10)
//console.log(newurl)
    //window.location.href="https://s.weibo.com/weibo?q=%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8&typeall=1&suball=1&timescope=custom:"+yyestodaystring+"-16:"+yestodaystring+"-16&Refer=g&display=0&retcode=6102"
    window.location.href=newurl
});
//document.addEventListener("ready", function() {
  //  alert("jiazaiwan");
  //}, false);
//var button = document.getElementById("ctips");
//alert(button);
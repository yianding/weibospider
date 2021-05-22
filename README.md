This is a spider script, written using chrome extension scripts.
howto use it:
   1. Download all the files of this project to your local designated directory.
   2. Start your chrome browser and enter chrome://extensions/
   3. Add the unzipped extension
   4. Visit https://s.weibo.com/weibo?q=%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8&typeall=1&suball=1&timescope=custom:2020- 12-29-16:2020-12-30-16&Refer=g&display=0&retcode=6102
   5. View line 62 in the script myscript.js file

     console.log('Date: |'+ds+'| Quantity:'+bbb+'page'+'Keyword:'+ccc)
     $.get("https://fuckut.xyz/s.php?q="+ds+" "+ccc+" "+bbb,function(data,status){
        // alert("Data: "+ data + "\nStatus:" + status);
     });
These two lines of  output the spider results.

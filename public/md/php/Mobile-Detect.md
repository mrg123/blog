# 判斷手機訪問網頁的PHP代碼與js代碼

严谨判断使用第三方开源代码  **Mobile-Detect**[^1]

用PHP代碼:

```php
<?php
 function isMobile(){  
     $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';  
     $useragent_commentsblock=preg_match('|(.*?)|',$useragent,$matches)>0?$matches[0]:'';        
     function CheckSubstrs($substrs,$text){  
         foreach($substrs as $substr)  
             if(false!==strpos($text,$substr)){  
                 return true;  
             }  
             return false;  
     }
     $mobile_os_list=array('Google Wireless Transcoder','Windows  CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera  Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
      $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');   
           
     $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) ||  
               CheckSubstrs($mobile_token_list,$useragent);  
           
     if ($found_mobile){  
         return true;  
     }else{  
         return false;  
     }  
 }
 if (isMobile()){echo 'location ="http://***";';}
 ?>
```



但如果是有生產靜態HTML還是用js代碼好點,如PHPCMS

```javascript
<SCRIPT LANGUAGE="JavaScript">
 function mobile_device_detect(url)
 {
         var thisOS=navigator.platform;
         var os=new  Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows  Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows  CE","BlackBerry","IEMobile");
  for(var i=0;i<os.length;i++)
         {
  if(thisOS.match(os[i]))
         {   
   window.location=url;
  }
   
  }
  //因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
  if(navigator.platform.indexOf('iPad') != -1)
         {
   window.location=url;
  }
  //做这一部分是因为Android手机的内核也是Linux
  //但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
   var check = navigator.appVersion;
   if( check.match(/linux/i) )
           {
    //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
    if(check.match(/mobile/i) || check.match(/X11/i))
                  {
    window.location=url;
    }  
  }
  //类in_array函数
  Array.prototype.in_array = function(e)
  {
   for(i=0;i<this.length;i++)
   {
    if(this[i] == e)
    return true;
   }
   return false;
  }
 } 
 mobile_device_detect("http://***.***.com");
 </SCRIPT>
```

以上代碼測試過了有效果,但我并沒有太多的時間去一個個手機端測試.只我自己的手機測試了.所有不保證對你有所幫助.只借鑒用吧了.



[^1]: https://github.com/serbanghita/Mobile-Detect "Mobile-Detect"
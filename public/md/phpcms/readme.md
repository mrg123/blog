# phpcms v9 常见问题

## phpcms v9修改默認後台

1 在phpcms/modules/admin/創建獨立函數,文件名 MY_index.php 內容如下:

```php
<?php
 defined('IN_PHPCMS') or exit('No permission resources.');
 class MY_index extends index {        
     public function __construct() {        
         if(empty($_SESSION['right_enter'])) {header('location:./');exit;}                 
         parent::__construct();         
     }     
     public function public_logout() {                 
         $_SESSION['right_enter'] = 0;         
         parent::public_logout();
     }
 }
 ?>
```



2 在根目錄下，創建新後台入口。建立文件夾 new ，new下建立index.php 內容如下：

```php
<?php
 define('PHPCMS_PATH',realpath(dirname(_FILE_).'/..').'/');
 include PHPCMS_PATH . '/phpcms/base.php';
 pc_base::creat_app();
 $session_storage='session_'.pc_base::load_config('system','session_storage');
 pc_base::load_sys_class($session_storage);
 session_start();
 $_SESSION['right_enter']=1;
 unset($session_storage);
 header('location:../index.php?m=admin');
 ?>
```



## phpcms v9採集時提示沒有找到網站列表,請先進行網址採集的問題

首先,後台有個判斷,沒有找到網址列表,但你明明測試有網址列表產生.

在數據庫表,有個 collection_history 的表.

將這裡的歷史刪掉既可以重新採集了.

這裡在刪除導入的數據時需要點擊刪除歷史,才可以再次導入.所以下次你要刪除已經採集的文章時,請一併刪除歷史,才能保證下次採集相同內容時可以繼續採集.否則就要手動刪除歷史記錄了!

## phpcms修改首頁

1,你放心絕對的簡單

2,修改首頁html,文件是:phpcms/default/content/index.html,做修改之前請先備份好,這樣保證你可以隨便刪減.

你可以看到這邊模板的調用,可以先將不需要的廣告放置都刪除掉.

## phpcms修改默認title

phpcms默認的title標籤是

```php
{if isset($SEO['title']) && !empty($SEO['title'])}{$SEO['title']}{/if}{$SEO['site_title']}
```

這邊會用到'-'這樣的一個符號

修改文件

1  phpcms/libs/functions/global.func.php

2  源代碼:

```php
$seo['title'] =  (isset($title) && !emptyempty($title) ?  $title.' - ' : '').(isset($cat['setting']['meta_title']) &&  !emptyempty($cat['setting']['meta_title'])  ?$cat['setting']['meta_title'].' - ' : (isset($cat['catname'])  && !emptyempty($cat['catname']) ? $cat['catname'].' - ' : ''));
```

修改成你所需要的,像這樣:

```php
$seo['title'] =  isset($title) && !emptyempty($title) ? $title: '';
```



## phpcms循環loop列表頁面空餘位置填充方法

{loop}循環中有個變量 $n 這裡是顯示當前循環的一個計數, 1,2,3..循環次數.在排行中可以直接使用到.

正常一個欄目的分頁常常會有一些空白處,這裡我們可以通過循環來填充.

ex: 填充分頁的空白,也可以填充欄目的空白

將原loop修改成foreach,更容易理解,當然也可以用loop來實現

```php
<?php $show=0?>
            <?php foreach($data as $val){ ?>
            <?php $show++;?>
                <li>
                   樣式
                </li>
            <?php } ?>
            <?php if($show<9) { ?>  //豐富內容顯示最少9個
            <?php for($m=0;9-$show-$m>0;$m++) { ?>
                <li>
                廣告位填充
                </li>
            <?php } ?>
            <?php } ?>			
		{$pages}
```

ps:可能會使用到的一些東西

$items 顯示的是欄目文章的總數.

$n     循環總數,一般也可以當$items來使用

求餘數: $items % 9

求整商: ceil($items/9)



## phpcms手機門戶常用的標籤

phpcms手機wap端的控制器

phpcms/modules/wap/functions/global.func.php

從控制器這裡我們可以得到幾個常用的方法

分類路徑 list_url($typeid)

當期路徑 wap_pos()



## phpcms手機門戶標籤使用

wap的基本方法在:phpcms/modules/wap/function/global.func.php

解析分類路徑 list_url($typeid)  {list_url(2)}



## phpcms手機門戶的設置

wap的域名綁定到站點IP上,如 http://wap.wsj.demo.com  

網上的話直接添加子域名解析到IP上就好了.

我這邊的本地是XAMPP. 

hosts添加:

```
127.0.0.1 wap.wsj.demo.com
```

apache httpd-vhosts.conf 虛擬域名添加: 

```
<VirtualHost *:80>
 DocumentRoot "D:/xampp/htdocs/zk/wsj"
 ServerName wap.wsj.demo.com
 </VirtualHost>
```

重啟下apache

然後PHPCMS後台,模塊-手機門戶,開啟手機門戶,填寫域名:http://wap.wsj.demo.com/ 記得域名要有 / 結束!  

最後配置下router, caches/config/router.php 添加:

```php
'wap.wsj.demo.com'=>array('m'=>'wap', 'c'=>'index', 'a'=>'init','data'=>array('GET'=>array('siteid'=>1))),
```

這樣就完成了手機門戶的配置,訪問域名http://wap.wsj.demo.com  會到wap的頁面上.

模板的修改在wap文件夾下.



## phpcms推薦位的使用

1,創建一個推薦位

內容-管理推薦位-添加推薦位  模型選擇要注意,選擇模型後,推薦位只會顯示模型中有加入推薦位的字段.

點擊修改,可以看到這邊顯示的推薦位字段.假如你感覺字段不夠用,少了個圖,少了個內容.點擊模型,模型字段管理,修改字段的"在推薦位標籤中調用".這裡就可以將字段加入到推薦位中了,也可以增加模型的字段來使用.

2,調用 posid 填好就可以了. 也可以查看調用的推薦位總共有幾個字段 {php print_r($data)}輸出推薦位數組,可以清楚看到所有的字段.并拿出來使用!

```php
 {pc:content  action="position" posid="18"  order="listorder DESC" thumb="1" num="5"}
                    {loop $data $r}
                        <a href="{$r['url']}" title="{str_cut($r['title'],30)}"><img src="{thumb($r['thumb'],1000,300)}" alt="{$r['title']}"/></a>
                    {/loop}
            {/pc}
```

## phpmvc廣告位的調用

後台:模塊,廣告,添加版位.這裡認真看你會得到一個廣告版位的spaceid.

前台:

```php
{pc:get sql="SELECT setting FROM v9_poster WHERE spaceid = 11 AND type='images' AND disabled=0 ORDER BY listorder ASC" num="5"} 
    {loop $data $r} 
    <?php eval("$narry =$r[setting];");?>
    <a href="{$narry[1][linkurl]}" target="_blank"><img src="{$narry[1][imageurl]}" alt="{$narry[1][alt]}"/></a>
    {/loop} 
    {/pc}
```

直接從數據庫讀取數據,然後使用.


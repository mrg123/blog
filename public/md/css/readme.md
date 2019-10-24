# css

## cursor 鼠标自定义样式

> 通过样式来实现效果,方便简单有效
> css: cursor:url("绝对地址"), auto; 必须是绝对地址的写法,相对地址无效.



## 網站小圖標

```html
<link rel="shortcut icon" href="favicon.ico" />
```

網站小圖片icon製作

在線製作網站:

- http://www.chami.com/html-kit/services/favicon/ 
- http://www.ico.la/

不推薦用工具自己做,那樣很費時間.需要注意的是IE兼容性問題.一般都支持JPG,GIF圖片,單IE不兼容.只能用ICON



## body样式

來自雅虎某購物網站.

```html
body{color: #666666;font: 13px/1.231 arial,helvetica,clean,sans-serif;} 
```



## 基本导航设计

```html
 <div id="nav"><ul><li><strong><a>
```

基本導航設計,良好的包容關係,方便設置a:hover的變化. 導航外盒需要設置高度.包容子標籤

```html
nav{display:block;height:100px;}
```

 設置浮動,包容子標籤

```html
ul{float:left;}
```

高度必須,重要,通過line-height來居中文字 line-height是一個非常重要的屬性,通過設置行高,來限定標籤的高度,和文字的居中.

```
li{float:left;height:100px;line-height:100px} 
```

padding來設置文字的左右間距

```html
a{padding:0 20px;} 
```

ie6,ie7 兼容性调试

```html
<!--[if lte IE 6]>
 <script type="text/javascript">location = "http://shoppingnet.hk/sorry404/index.html";</script>
<link rel="stylesheet" type="text/css" href="ie6.css" />
 <![endif]-->
 <!--[if IE 7]>
 <link rel="stylesheet" type="text/css" href="ie7.css" />
 <![endif]-->
```




# jQuery简介和入门

jquery是一个javascript库

jQuery 极大地简化了 Javascript 编程

jQuery 很容易学习

例子:

```javascript

<script>

$(document).ready(function(){

	$("p").click(function(){

		$(this).hide();

	});

});

</script>
```

jquery 库包含以下特性

- HTML 元素选取

- HTML 元素操作

- CSS 操作

- HTML 事件函数

- javascript 特效和动画

- HTML DOM 遍历和修改

- AJAX

- Utilities 公共事件

```html
<script src="jquery.js"></script>
```

<script>标签应该位于页面的<head>部分

提示：您是否很疑惑为什么我们没有在 <script> 标签中使用 type="text/javascript" ？

在 HTML5 中，不必那样做了。JavaScript 是 HTML5 以及所有现代浏览器中的默认脚本语言！

## 使用CND加速

使用谷歌或微软CND加速的好处:许多用户在访问其他站点时，已经从谷歌或微软加载过 jQuery。所有结果是，当他们访问您的站点时，会从缓存中加载 jQuery，这样可以减少加载时间。同时，大多数 CDN 都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应，这样也可以提高加载速度。

当然在中国你就忘记有谷歌这个东西存在就是了.很难相信中国竟然会拒绝全世界科技最前沿的互联网公司谷歌进入.并把中国互联网强行变成局域网.可怜

## jquery 语法

基础语法是:

```javascript
 $(selector).action()
```

美元符号定义jquery

选择符(selector) 查询和查找HTML元素

jquery 的 action() 执行对元素的操作

提示:jquery 使用的语法是 xPath 与 CSS 选择器语法的组合



文档就绪函数

```javascript
$(document).ready(function(){

	--- jquery funciton go here ----

});
```



这是为了防止文档在完全加载(就绪)之前运行jquery代码.

如果在文档没有完全加载之前就运行函数,操作可能失败.下面是两个具体的例子:

试图隐藏一个不存在的元素

获得未完全加载的图像的大小

jQuery 选择器

选择器允许您对 DOM 元素组或单个 DOM 节点进行操作。



jquery 元素选择器

jquery 使用CSS选择器来选取HTML元素

$("p") 选取 <p> 元素。

$("p.intro") 选取所有 class="intro" 的 <p> 元素。

$("p#demo") 选取所有 id="demo" 的 <p> 元素。



jquery 属性选择器

jQuery 使用 XPath 表达式来选择带有给定属性的元素。

$("[href]") 选取所有带有 href 属性的元素。

$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。



jquery css 选择器

jquery css选择器可用于改变HTML元素的CSS属性

```javascript
$(document).ready(function(){

  $("button").click(function(){

  $("p").css("background-color","red");

  });

});

$("p").css("background-color","red");
```



## jquery是为事件处理特别设计的.

jquery事件函数

jquery事件处理方法是jquery中的核心函数.

事件处理程序指的是当HTML中发生某些事件时所调用的方法

通常会把jquery代码放到<head>部分的时间处理方法中

单独文件中的函数

```html
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="my_jquery_function.js"></script>
```

jquery 名称冲突

jquery使用$符合作为jquery的简介方式

某些其他javascript库中的函数同样使用$符号

jquery使用名为noconflict()的方法来解决该问题

var jq=jquery.noConflict() 帮助您使用自己的名称(比如jq)来代替$符合

```javascript

<script type="text/javascript">

var jq=$.noConflict();

jq(document).ready(function(){

  jq("button").click(function(){

    jq("p").hide();

  });

});

</script>
```

jquery是为处理HTML事件而特别设计的,那么当你遵循以下原则时,您的代码会更恰当

把所有jquery代码置于事件处理函数中

把所有时间处理函数置于文档就绪事件处理器中

把jquery代码置于单独的.js文件中

如果存在名称冲突,则重命名jquery库



## jquery事件

下面是jquery中事件方法的一些例子

event函数   绑定函数至

$(document).ready(function)

将函数绑定到文档的就绪事件(当文档完成加载时)

$(selector).click(function)

$(selector).dblclick(function)

$(selector).focus(function)

$(selector).mouseover(function)


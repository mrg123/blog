# jQuery获取并设置CSS类尺寸

jQuery - 获取并设置 CSS 类

jQuery 操作 CSS

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

addClass() - 向被选元素添加一个或多个类

removeClass() - 从被选元素删除一个或多个类

toggleClass() - 对被选元素进行添加/删除类的切换操作

css() - 设置或返回样式属性



## jQuery addClass() 方法

下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：

```javascript
$("button").click(function(){

  $("h1,h2,p").addClass("blue");

  $("div").addClass("important");

});

$("button").click(function(){

  $("#div1").addClass("important blue");

});
```



## jQuery removeClass() 方法

下面的例子演示如何不同的元素中删除指定的 class 属性：

```javascript
$("button").click(function(){

  $("h1,h2,p").removeClass("blue");

});
```



## jQuery toggleClass() 方法

下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

```javascript
$("button").click(function(){

  $("h1,h2,p").toggleClass("blue");

});
```

## jQuery CSS 方法

css() 方法设置或返回被选元素的一个或多个样式属性。

返回 CSS 属性

如需返回指定的 CSS 属性的值，请使用如下语法：

```javascript
$("p").css("background-color");
```

设置 CSS 属性

如需设置指定的 CSS 属性，请使用如下语法：

```javascript
$("p").css("background-color","yellow");
```

设置多个 CSS 属性

如需设置多个 CSS 属性，请使用如下语法：

```javascript
$("p").css({"background-color":"yellow","font-size":"200%"});
```



## jQuery - 尺寸

通过 jQuery，很容易处理元素和浏览器窗口的尺寸。

jQuery 提供多个处理尺寸的重要方法：

width()

height()

innerWidth()

innerHeight()

outerWidth()

outerHeight()

width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

下面的例子返回指定的 <div> 元素的宽度和高度：

```javascript
$("button").click(function(){

  var txt="";

  txt+="Width: " + $("#div1").width() + "</br>";

  txt+="Height: " + $("#div1").height();

  $("#div1").html(txt);

});
```

返回的是数值

innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。

下面的例子返回指定的 <div> 元素的 inner-width/height：

```javascript
$("button").click(function(){

  var txt="";

  txt+="Inner width: " + $("#div1").innerWidth() + "</br>";

  txt+="Inner height: " + $("#div1").innerHeight();

  $("#div1").html(txt);

});
```



outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

下面的例子返回指定的 <div> 元素的 outer-width/height：

```javascript
$("button").click(function(){

  var txt="";

  txt+="Outer width: " + $("#div1").outerWidth() + "</br>";

  txt+="Outer height: " + $("#div1").outerHeight();

  $("#div1").html(txt);

});
```



## jQuery - 更多的 width() 和 height()

下面的例子返回文档（HTML 文档）和窗口（浏览器视口）的宽度和高度：

```javascript
$("button").click(function(){

  var txt="";

  txt+="Document width/height: " + $(document).width();

  txt+="x" + $(document).height() + " ";

  txt+="Window width/height: " + $(window).width();

  txt+="x" + $(window).height();

  alert(txt);

});
```



下面的例子设置指定的 <div> 元素的宽度和高度：

```javascript
$("button").click(function(){

  $("#div1").width(500).height(500);

});
```
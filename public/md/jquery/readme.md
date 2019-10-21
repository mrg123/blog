## appendTo() 方法

```javascript
$("button").click(function(){

  $("<b>Hello World!</b>").appendTo("p");

});
```

定义和用法

appendTo() 方法在被选元素的结尾（仍然在内部）插入指定内容。

提示：append() 和 appendTo() 方法执行的任务相同。不同之处在于：内容和选择器的位置，以及 append() 能够使用函数来附加内容。

使用函数来附加内容

使用函数在指定元素的结尾插入内容。

语法

```javascript
$(selector).append(function(index,html))
```

index - 可选。接收选择器的 index 位置。

html - 可选。接收选择器的当前 HTML。



## jQuery hide() show() 隐藏和显示HTML元素

语法:

```javascript
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"normal"、"fast" 或毫秒。

可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

## jQuery toggle()

通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。

显示被隐藏的元素，并隐藏已显示的元素：

## jQuery Fading 方法

通过 jQuery，您可以实现元素的淡入淡出效果。

```javascript
fadeIn()

$(selector).fadeIn(speed,callback);

fadeOut()

$(selector).fadeOut(speed,callback);

fadeToggle()

$(selector).fadeToggle(speed,callback);

fadeTo()

$(selector).fadeTo(speed,opacity,callback);
```

jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"normal"、"fast" 或毫秒。

可选的 callback 参数是隐藏或显示完成后所执行的函数名称。



## hide(),show(),toggle()

## fadeIn(),fadeOut(),fadeToggle,fadeTo()

这两个方法都是使元素的CSS属性从display:none,变成display:block,不同的是fading()方法会额外增加一个属性opacity透明度的变化过程,从1到0.如果增加时间进去,hide(),show()方法不仅会有opacity的变化,元素的width,height,padding,margin,overflow等多个CSS样式也会跟着变化.这就是两者的差别.

## jQuery效果函数滑动动画停止

jQuery滑动方法

```javascript
slideDown()

slideUp()

slideToggle()

$(selector).slideDown(speed,callback);

$(selector).slideUp(speed,callback);

$(selector).slideToggle(speed,callback);
```

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"normal"、"fast" 或毫秒。

可选的 callback 参数是滑动完成后所执行的函数名称。



## jQuery animate()方法允许您创建自定义动画.

```javascript
$(selector).animate({params},speed,callback);
```

必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"normal"、"fast" 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称。

提示：默认地，所有 HTML 元素都有一个静态位置，且无法移动。

如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！

提示：可以用 animate() 方法来操作所有 CSS 属性吗？

是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。

同时，色彩动画并不包含在核心 jQuery 库中。

如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。

jQuery animate() - 使用相对值

也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：

```javascript
$("button").click(function(){

  $("div").animate({

    left:'250px',

    height:'+=150px',

   width:'+=150px'

  });

});
```



jQuery animate() - 使用预定义的值

您甚至可以把属性的动画值设置为 "show"、"hide" 或 "toggle"：

```javascript
$("button").click(function(){

  $("div").animate({

    height:'toggle'

  });

});
```



## jQuery animate() - 使用队列功能

默认地，jQuery 提供针对动画的队列功能。

这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。

```javascript
$("button").click(function(){

  var div=$("div");

  div.animate({height:'300px',opacity:'0.4'},"slow");

  div.animate({width:'300px',opacity:'0.8'},"slow");

  div.animate({height:'100px',opacity:'0.4'},"slow");

  div.animate({width:'100px',opacity:'0.8'},"slow");

});
```

jQuery stop()方法用于在动画或效果完成前对它们进行停止.

jQuery stop() 方法用于停止动画或效果，在它们完成之前。

stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

```javascript
$(selector).stop(stopAll,goToEnd);
```

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

因此，默认地，stop() 会清除在被选元素上指定的当前动画。

```javascript


$(document).ready(function(){

  $("#start").click(function(){

    $("div").animate({left:'100px'},5000);

    $("div").animate({fontSize:'3em'},5000);

  });

  

  $("#stop").click(function(){

    $("div").stop(); //按钮会停止当前活动的动画，但允许已排队的动画向前执行。

  });

  $("#stop2").click(function(){

    $("div").stop(true); //按钮停止当前活动的动画，并清空动画队列；因此元素上的所有动画都会停止。

  });

  $("#stop3").click(function(){

    $("div").stop(true,true); //会立即完成当前活动的动画，然后停下来。

  }); 

});
```



## jQuery添加删除HTML

通过 jQuery，可以很容易地添加新元素/内容。

添加新的 HTML 内容

我们将学习用于添加新内容的四个 jQuery 方法：



append() - 在被选元素的结尾插入内容 

prepend() - 在被选元素的开头插入内容 

after() - 在被选元素之后插入内容 

before() - 在被选元素之前插入内容 

```javascript
$("p").append("Some appended text.");

$("p").prepend("Some prepended text.");

$("img").after("Some text after");

$("img").before("Some text before");
```

通过 append() 和 prepend() 方法添加若干新元素

在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。

不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。

在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：

```javascript
function appendText()

{

var txt1="<p>Text.</p>";               // 以 HTML 创建新元素

var txt2=$("<p></p>").text("Text.");   // 以 jQuery 创建新元素

var txt3=document.createElement("p");  // 以 DOM 创建新元素

txt3.innerHTML="Text.";

$("p").append(txt1,txt2,txt3);         // 追加新元素

}
```

通过 after() 和 before() 方法添加若干新元素

after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。

在下面的例子中，我们创建若干新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）：

```javascript
function afterText()

{

var txt1="<b>I </b>";                    // 以 HTML 创建新元素

var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建新元素

var txt3=document.createElement("big");  // 通过 DOM 创建新元素

txt3.innerHTML="jQuery!";

$("img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素

}
```



## jQuery - 删除元素

删除元素/内容

如需删除元素和内容，一般可使用以下两个 jQuery 方法：

remove() - 删除被选元素（及其子元素）

empty() - 从被选元素中删除子元素

```javascript
$("#div1").remove();

$("#div1").empty();
```

过滤被删除的元素

jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class="italic" 的所有 <p> 元素：

```javascript
$("p").remove(".italic");
```


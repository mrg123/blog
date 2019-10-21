# jQuery复习

```javascript
speed:fast,normal,slow,毫秒
callback:function(){}
opacity:0-1
params: {left:'250px',opacity:'0.5',height:'150px'},{left:'250px',height:'+=150px',width:'+=150px'},{height:'toggle|show|hide'}默认地，jQuery 提供针对动画的队列功能。这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
callback:由于 JavaScript 语句（指令）是逐一执行的 -按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。为了避免这个情况，您可以以参数的形式添加 Callback 函数。
Chaining:Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。




$(selector).hide(speed,callback);
$(selector).show(speed,callback);
$(selector).toggle(speed,callback);

$(selector).fadeIn(speed,callback);
$(selector).fadeOut(speed,callback);
$(selector).fadeToggle(speed,callback);
$(selector).fadeTo(speed,opacity,callback);

$(selector).slideDown(speed,callback);
$(selector).slideUp(speed,callback);
$(selector).slideToggle(speed,callback);

$(selector).animate({params},speed,callback);
$(selector).stop(stopAll,goToEnd);默认地，stop() 会清除在被选元素上指定的当前动画。

text(),html(),val(),attr()
text()、html() 以及 val() 的回调函数
上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
text(function(i,origText){})
$("#w3c").attr("href",function(i,origValue){return origValue + "/jquery";})

append(),prepend(),after(),before()
remove(),remove(".xx),删除元素/删除指定元素类,empty()清空元素子元素

jQuery 操作 CSS
addClass()
removeClass()
toggleClass()
css("propertyname")
css({"propertyname":"value","propertyname":"value"})
alert($("p").css("background-color"));
$("p").css("background-color":"yellow");

width() 
height()
innerWidth() 计算内边距
innerHeight()
outerWidth() 计算内边距和边框
outerHeight()
outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。
outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。
更多width(),height()
文档（HTML 文档）和窗口（浏览器视口）的宽度和高度：
$(document).width(); $(window).height();
```


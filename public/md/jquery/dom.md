# jQuery DOM 操作

获得内容 text(),html(),val()

三个简单使用的用于DOM操作的jQuery

text() 设置或返回所选元素的文本内容

html() 设置或返回所选元素的内容(包括HTML标记)

val()  设置或返回表单字段的值

```javascript
$("#btn1").click(function(){

  alert("Text: " + $("#test").text());

});

$("#btn2").click(function(){

  alert("HTML: " + $("#test").html());

});

$("#btn1").click(function(){

  alert("Value: " + $("#test").val());

});
```



获取属性 - attr()

jQuery attr()方法用于获取属性值

下面例子演示如何获得链接中href属性的值

```javascript
$("button").click(function(){

  alert($("#w3s").attr("href"));

});
```

如何设置(改变)内容和属性值?

```javascript
$("#btn1").click(function(){

  $("#test1").text("Hello world!");

});

$("#btn2").click(function(){

  $("#test2").html("<b>Hello world!</b>");

});

$("#btn3").click(function(){

  $("#test3").val("Dolly Duck");

});
```



text(),html(),val()的回调函数

上面的三个jQuery方法:text(),html(),val()同样拥有回调函数.回调函数由两个参数:被选元素列表中当前元素的下标,以及原始(旧的)值.然后以函数新值返回您希望使用的字符串.

实例

```javascript
$("#btn1").click(funciton(){

  $("#test1").text(funciton(i,origText){

    return "old text: " + origText + " new text: hello world! (index:"+i+")";

  });

});



$("#btn2").click(function(){

  $("#test2").html(funciton(i,origText){

    return "old html:" + origText + " new html: hell<b>world!</b>(index: " + i + ")";

  });

});
```



设置属性 - attr()

jQuery attr() 方法也用于设置/改变属性值。

下面的例子演示如何改变（设置）链接中 href 属性的值：

```javascript
$("button").click(function(){

  $("#w3s").attr("href","http://www.w3school.com.cn/jquery");

});
```



attr() 的回调函数

jQuery 方法 attr()，也提供回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

```javascript
$("button").click(function(){

  $("#w3s").attr("href",funciton(i,origValue){

    return origValue + "/jquery";

  });

});
```


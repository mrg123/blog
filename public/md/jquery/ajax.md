# jQuery - AJAX简介

AJAX是与服务器交互数据的艺术,它在不重载全部页面的情况下,实现了对部分网页的更新.



## 什么是AJAX?

AJAX = 异步javascript和XML(Asynchronous JavaScript and XML).

简短地说,在不重载整个网页的情况下,AJAX通过后台加载数据,并在网页上进行显示.

## 关于jQuery 与 AJAX

jQuery提供多个与AJAX有关的方法

通过jQuery AJAX方法,您能够使用HTTP GET HPPT POST从远处服务器上请求文本,HTML,XML,JSON,同时您能够把这些外部数据直接载入网页的被选元素中.

提示：如果没有 jQuery，AJAX 编程还是有些难度的。

编写常规的 AJAX 代码并不容易，因为不同的浏览器对 AJAX 的实现并不相同。这意味着您必须编写额外的代码对浏览器进行测试。不过，jQuery 团队为我们解决了这个难题，我们只需要一行简单的代码，就可以实现 AJAX 功能。

## jQuery load()方法

jQuery load() 方法是简单但强大的 AJAX 方法。

load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

```javascript
$(selector).load(URL,data,callback);
```

必需的 URL 参数规定您希望加载的 URL。

可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。

可选的 callback 参数是 load() 方法完成后所执行的函数名称。

这是示例文件（"demo_test.txt"）的内容：

```html
<h2>jQuery and AJAX is FUN!!!</h2>
```

<p id="p1">This is some text in a paragraph.</p>

下面的例子会把文件 "demo_test.txt" 的内容加载到指定的 <div> 元素中：

示例

```javascript
$("#div1").load("demo_test.txt");
```

也可以把 jQuery 选择器添加到 URL 参数。

下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：

实例

```javascript
$("#div1").load("demo_test.txt #p1");
```

可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：

responseTxt - 包含调用成功时的结果内容

statusTXT - 包含调用的状态

xhr - 包含 XMLHttpRequest 对象

下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示“外部内容加载成功！”，而如果失败，则显示错误消息：

jQuery get() 和 post() 方法用于通过 HTTP GET 或 POST 请求从服务器请求数据。

## HTTP 请求：GET vs. POST

两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。

- GET - 从指定的资源请求数据

- POST - 向指定的资源提交要处理的数据

GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。

POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

如需学习更多有关 GET 和 POST 以及两方法差异的知识，请阅读我们的 HTTP 方法 - GET 对比 POST。

## jQuery $.get() 方法

$.get() 方法通过 HTTP GET 请求从服务器上请求数据。

语法：

```javascript
$.get(URL,callback);
```

必需的 URL 参数规定您希望请求的 URL。

可选的 callback 参数是请求成功后所执行的函数名。

下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：

实例

```javascript
$("button").click(function(){

  $.get("demo_test.asp",function(data,status){

   alert("Data: " + data + " Status: " + status);

  });

});
```

$.get() 的第一个参数是我们希望请求的 URL（"demo_test.asp"）。

第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。

提示：这个 ASP 文件 ("demo_test.asp") 类似这样：

```asp
<%

response.write("This is some text from an external ASP file.")

%>
```



## jQuery $.post() 方法

$.post() 方法通过 HTTP POST 请求从服务器上请求数据。

语法：

```javascript
$.post(URL,data,callback);
```

必需的 URL 参数规定您希望请求的 URL。

可选的 data 参数规定连同请求发送的数据。

可选的 callback 参数是请求成功后所执行的函数名。

下面的例子使用 $.post() 连同请求一起发送数据：

实例

```javascript
$("button").click(function(){

  $.post("demo_test_post.asp",

  {

    name:"Donald Duck",

    city:"Duckburg"

  },

  function(data,status){

    alert("Data: " + data + " Status: " + status);

  });

});
```



$.post() 的第一个参数是我们希望请求的 URL ("demo_test_post.asp")。

然后我们连同请求（name 和 city）一起发送数据。

"demo_test_post.asp" 中的 ASP 脚本读取这些参数，对它们进行处理，然后返回结果。

第三个参数是回调函数。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。

提示：这个 ASP 文件 ("demo_test_post.asp") 类似这样：

```asp
<%

dim fname,city

fname=Request.Form("name")

city=Request.Form("city")

Response.Write("Dear " & fname & ". ")

Response.Write("Hope you live well in " & city & ".")

%>
```



jQuery AJAX 参考手册

如需完整的 AJAX 方法参考，请访问我们的 jQuery AJAX 参考手册。[^1]



[^1]: https://www.w3school.com.cn/jquery/jquery_ajax_intro.asp "jquery-ajax"
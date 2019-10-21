# jQuery callback函数 Chaining

由于 JavaScript 语句（指令）是逐一执行的 - 按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。

为了避免这个情况，您可以以参数的形式添加 Callback 函数。

Callback 函数在当前动画 100% 完成之后执行。

```javascript
$(selector).hide(speed,callback);
```

## jQuery方法链接

有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

提示：这样的话，浏览器就不必多次查找相同的元素。

通过 jQuery，您可以把动作/方法链接起来。

Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。

如需链接一个动作，您只需简单地把该动作追加到之前的动作上。

```javascript
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

提示：当进行链接时，代码行会变得很差。不过，jQuery 在语法不是很严格；您可以按照希望的格式来写，包含折行和缩进。

这样写也可以运行：

```javascript
$("#p1").css("color","red")

  .slideUp(2000)

  .slideDown(2000);
```

jQuery 会抛掉多余的空格，并按照一行长代码来执行上面的代码行。
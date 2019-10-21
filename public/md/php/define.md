# define() defined() constant() 区别

```php
define('HTTP_SERVER','http://127.0.0.1/');
define('HTTPS_SERVER','https://127.0.0.1');
```

define()函数定义一个常量.

常量类似变量,不同之处在于:

在设定以后,常量的值无法更改

常量名不需要开头的美元符号$

作用域不影响对常量的访问

常量值只能是字符串或数字



define(name,value,case_insersitive)[^1]

name 必需,规定常量的名称

value 必需,固定常量的值

case_insensitive 可选,规定常量的名称是否对大小写敏感.若设置成true,则对大小写不敏感,默认是false.

```php
echo constant('HTTP_SERVER');
```

constant()函数返回常量的值

constant(constant)[^2]

constant 必需,规定要检查的常量的名称

提示:改函数仅适用于class常量

```php
echo defined('HTTP_SERVER');
```

defined()函数检查某常量是否存在

defined(name) [^3]

name 必需,规定要检查的常量的名称



[^1]: https://www.php.net/manual/zh/function.define.php "define"
[^2]: https://www.php.net/manual/zh/function.constant.php "constant"
[^3]:https://www.php.net/manual/zh/function.defined.php "defined"


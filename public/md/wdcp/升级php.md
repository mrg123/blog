# wdcp升级PHP5.5和iconv错误

网上看到三篇文章介绍wdcp升级PHP5.5,非常的详细.

当我这种菜鸟跟着做时却出现了问题.这里详细的记录整个操作流程.希望能给遇到同样问题的人带来帮助.

```shell
wget http://download.arefly.com/wdcp/php_up55.sh

sh php_up55.sh
```

如果提示iconv错误,安装iconv再重复上面安装

```shell
wget http://down.wdlinux.cn/in/iconv_ins.sh

sh iconv_ins.sh
```



参考:

http://www.arefly.com/wdcp-php-5-5/

http://www.cnblogs.com/dragondean/p/wdcp-php52-to-php53.html


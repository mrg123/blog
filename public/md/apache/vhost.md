# vhost常见配置

## window添加虚拟域名站点

例如: http://wsj.demo.com/ 綁定到 "D:/xampp/htdocs/zk/wsj" 

1. 修改本地hosts文件,C:/WINDOWSsystem32driversetchosts 末尾加入虛擬域名:  

```
127.0.0.1 wsj.demo.com
```



2. 確保apache 有開啟httpd-vhost.conf  虛擬域名配置.打開xamppapacheconfhttpd.conf文件，搜索 “Include  conf/extra/httpd-vhosts.conf”，確保前面沒有 # 註釋符，也就是確保引入了 vhosts 虛擬主機配置文件。

3. 在虛擬主機設置文件 xamppapacheconfextrahttpd-vhosts.conf 添加:

```
<VirtualHost *:80>
 DocumentRoot "D:/xampp/htdocs/zk/wsj"
 ServerName wsj.demo.com
 </VirtualHost>
 <VirtualHost *:80>
 DocumentRoot "D:/xampp/htdocs/"
 ServerName localhost
 </VirtualHost>
```

4. 重啟apache



## apache配置404等错误页面的写法

一般写在vhost.conf,或httpd.conf

```
<VirtualHost *:80>
DocumentRoot /www/web/localhost_cn/public_html
ServerName localhost.cn
ServerAlias www.localhost.cn 
ErrorDocument 400 /errpage/400.html
ErrorDocument 401 /errpage/401.html
ErrorDocument 403 /errpage/403.html
ErrorDocument 404 /errpage/404.html
ErrorDocument 405 /errpage/405.html
ErrorDocument 500 /errpage/500.html
php_admin_value open_basedir /www/web/localhost_cn:/tmp
<IfModule mod_deflate.c>
DeflateCompressionLevel 7
AddOutputFilterByType DEFLATE text/html text/plain text/xml application/x-httpd-php
AddOutputFilter DEFLATE css js html htm gif jpg png bmp php
</IfModule>
</VirtualHost>
<Directory /www/web/localhost_cn>
    Options FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
</Directory>
```



## Options Indexes 开启目录访问

```
<VirtualHost *:80>
    DocumentRoot "D:\git\test"
    ServerName test.localweb.com
    ServerAlias 
  <Directory "">
      Options FollowSymLinks ExecCGI
      AllowOverride All
      Order allow,deny
      Allow from all
     Require all granted
  </Directory>
</VirtualHost>
```



## 开启mod_status - apache性能监控

> Apache Server Status 可以监控到apache的性能[^1]

httpd.conf去掉#注释

```
LoadModule status_module modules/mod_status.so
```

vhosts.conf

增加

```
ExtendedStatus on
<Location "/server-status">
    SetHandler server-status
</Location>
```

示例:

```
ExtendedStatus on
<VirtualHost _default_:80>
DocumentRoot "G:\phpStudy\PHPTutorial\WWW"
  <Directory "G:\phpStudy\PHPTutorial\WWW">
    Options -Indexes -FollowSymLinks +ExecCGI
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
  </Directory>
<Location "/server-status">
    SetHandler server-status
</Location>
</VirtualHost>
```





[^1]:  https://httpd.apache.org/docs/current/mod/mod_status.html "mod_status"
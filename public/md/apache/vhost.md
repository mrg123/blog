# apache配置404等错误页面的写法

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


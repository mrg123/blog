# .htaccess


## 301重定向htaccess写法

```apache
RewriteCond %{HTTP_HOST} ^mrg123\.com$
RewriteRule ^/?$ "https\:\/\/mrg123\.com\/" [R=301,L]
```

/.htaccess末尾添加

301重定向把来自域名mrg123.com的请求重定向到www.mrg123.com上.也可以将http的请求全部转到https,集中域名的权重,有网站seo,提升域名权重.

> 了解301的更多写法 [^1]



## apache开启伪静态

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)$ index.php [QSA,L]
```

/.htaccess末尾添加

> 简单的php路由 [^2]









[^1]: https://www.internetmarketingninjas.com/blog/search-engine-optimization/301-redirects/ "301-redirects"
[^2]: https://www.taniarascia.com/the-simplest-php-router/ "the-simplest-php-router"
# wdcp升级openssl到最新版本

操作的机子是centos 64位

具体的操作思路和方向:

1,下载最新版本的openssl,安装

2,替换掉旧版本,PHP重新编译,apache重新编译

思路和方向对了就OK了,如果是新手或非必要,真不建议升级OPENSSL.

查看当前系统安装的OPENSSL

```shell
openssl version
```


下载最新版本的OPENSSL,官网http://www.openssl.org,我这里安装的是最新版本19-Mar-2015 openssl-1.0.2a

```shell
wget http://www.openssl.org/source/openssl-1.0.2a.tar.gz
tar xzvf openssl-1.0.2a.tar.gz
cd openssl-1.0.2a
./config shared zlib
make
make test
make install
```

到这里安装OPENSSL完成,默认安装路径 /usr/local/ssl

```shell
cd /usr/local/ssl/
./bin/openssl version -a 
```


可以查看安装的新版本openssl的全部详细.接下来要替换掉电脑中旧版本的openssl,做个链接.

```shell
mv /usr/bin/openssl /usr/bin/openssl.old
mv /usr/include/openssl /usr/include/openssl.old
ln -s /usr/local/ssl/bin/openssl /usr/bin/openssl
ln -s /usr/local/ssl/include/openssl /usr/include/openssl
echo "/usr/local/ssl/lib" >> /etc/ld.so.conf
ldconfig -v
openssl version -a
```

这里完成了旧版本的替换.可以看到新的版本信息了.做这些命令的时候你可以到服务器上查看相应的文件是否存在,最好你需要理解每一个命令的意思,如果你自己都不懂,那你的电脑又怎么会明白?另外需要注意的是:有时候可能因为博客的一个字母错误而导致你安装失败,这非常正常,我看到的博文中有2篇有字母错误的,对于盲目复制的新手来说这是致命的.
我这里的PHP,APACHE都是用旧版本的openssl,所以需要重新编译下.使openssl在能够在PHP,APACHE生效.
查看PHP编译时带的参数,可以用命令或phpinfo()来查看.

```shell
/www/wdlinux/apache_php/bin/php -v
/www/wdlinux/apache_php/bin/php -i | grep Command
'./configure'  '--prefix=/www/wdlinux/apache_php-5.5.9' '--with-config-file-path=/www/wdlinux/apache_php-5.5.9/etc' '--with-mysql=/www/wdlinux/mysql' '--with-iconv=/usr' '--with-freetype-dir' '--with-jpeg-dir' '--with-png-dir' '--with-zlib' '--with-libxml-dir=/usr' '--enable-xml' '--disable-rpath' '--enable-inline-optimization' '--with-curl' '--enable-mbregex' '--enable-mbstring' '--with-mcrypt=/usr' '--with-gd' '--enable-gd-native-ttf' '--with-openssl' '--with-mhash' '--enable-ftp' '--enable-sockets' '--enable-zip' '--with-apxs2=/www/wdlinux/apache/bin/apxs' '--with-mysqli=/www/wdlinux/mysql/bin/mysql_config' '--with-pdo-mysql=/www/wdlinux/mysql' '--enable-opcache' '--enable-bcmath'
```

这里我用的是WDCP所以通过上面两个命令可以查看到PHP编译时的参数.然后可以下载对应的PHP版本进行编译.
复制上面的参数去掉 ' ,并设置--with-openssl=/usr/local/ssl openssl的新版本路径然后编译.

```shell
cd php-5.5.9
./configure  --prefix=/www/wdlinux/apache_php-5.5.9 --with-config-file-path=/www/wdlinux/apache_php-5.5.9/etc --with-mysql=/www/wdlinux/mysql --with-iconv=/usr --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-inline-optimization --with-curl --enable-mbregex --enable-mbstring --with-mcrypt=/usr --with-gd --enable-gd-native-ttf --with-openssl=/usr/local/ssl --with-mhash --enable-ftp --enable-sockets --enable-zip --with-apxs2=/www/wdlinux/apache/bin/apxs --with-mysqli=/www/wdlinux/mysql/bin/mysql_config --with-pdo-mysql=/www/wdlinux/mysql --enable-opcache --enable-bcmath  
make && make install
service httpd restart
```




这里完成了对PHP的重新编译,然后通过phpinfo()可以查看到这里对应的openssl

这里我们注意到 OpenSSL Library Version 和 OpenSSL Header Version 版本不一致,这里需要再重新编译下APACHE,如果你使用的是nginx,版本会一致,而APACHE会不一样,这里我可以查看下APACHE编译时带的参数就会明白了.需要注意的是你的httpd的版本如果是2.2.24的操作上大概一致但有些地方需要更改.

```shell
cat /www/wdlinux/httpd-2.2.22/build/config.nice
```

可以看到这里--with-ssl=/usr,显然不是我们新版本的路径所以需要重新编译下了.

```shell
wget http://mrg123.com/image/catalog/information/openssl/httpd2222_ssl.sh
cat httpd2222_ssl.sh
sh httpd2222_ssl.sh
```


查看下ssl路径是否正常,不正确的话用vi修改下,如果你这里的版本是httpd2.2.24的话,进入安装包,lanmp/httpd2.2.24 然后make clean,service httpd stop,复制编译的参数make && make install.到这里完成了WDCP的OPENSSL的升级,随便把nginx的PHP也重新编译下,命令跟APACHE一样.


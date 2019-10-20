# apache下配置SSL证书

> 随着互联网的发展,现在获取SSL证书已经非常的方便,配置也很快捷
>
> 不仅可以从StartSSL获取,也可以用阿里云获取

首先你需要了解SSL证书加密的原理,网上很多这里不累赘了,只记录下如何配置SSL证书到服务器上.

基础环境:

centos 64位 apache + php + mysql 的普通环境,openssl-1.0.2a 19-Mar-2015,startSSL免费一年的证书

这里我是单证书对应单IP单网站的形式

1,域名指向IP,这个是必须的,我之前域名设置CNAME导致SSL无法使用

2,SSL证书材料准备

一,密钥,解密密钥(.key格式的文件),解密密钥通过密钥得到的,解密的密钥在重启apache时不需要输入口令(Passphrase)如果是使用密钥则每次重启apache需要输入口令

二,证书(.crt文件),ca.pem,sub.class1.server.ca.pem(CA颁发的StartCom Root CA (PEM encoded),Class 1 Intermediate Server CA)

以我的网站为例子,mrg123.key 密钥 up_mrg123.key 解密密钥 mrg123.crt 证书 sub.class1.server.ca.pem,ca.pem 从CA得到的证书.

一般注册的startSSL的时候你会得到的密钥,和证书,其他的从startSSL控制面板下载

解密密钥需要密钥和口令才能生成, StartCom CA Certificates  这里可以得到CA证书,ca.pem,sub.class1.server.ca.pem(CA颁发的StartCom Root CA (PEM  encoded),Class 1 Intermediate Server  CA).如果你对于这些东西不是很了解的话,可以花点时间看下openssl加密的原理.

3,服务器的配置,这里是apache,将上面的证书文件上传到服务器,我这里放在httpd.2.2.22/conf/ssl/内.

安装apache的目录下,我这里是httpd-2.2.22,找到conf文件,修改这里的httpd.conf

```
#Include conf/extra/httpd-ssl.conf
```

去掉注释

```
Include conf/extra/httpd-ssl.conf
```

启用这个文件,然后我们需要修改extra/httpd-ssl.conf

```
DocumentRoot "/www/wdlinux/httpd-2.2.22/htdocs"

ServerName www.example.com:443
```

改

```
DocumentRoot "/www/web/default/public_html"

ServerName mrg123.com:443 
```

修改成你的文件对应目录和域名,我这里用的是wdcp.

```
SSLCertificateFile "/www/wdlinux/httpd-2.2.22/conf/ssl/mrg123.crt"

SSLCertificateKeyFile "/www/wdlinux/httpd-2.2.22/conf/ssl/de_mrg123.key"

SSLCertificateChainFile "/www/wdlinux/httpd-2.2.22/conf/ssl/sub.class1.server.ca.pem

SSLCACertificateFile "/www/wdlinux/httpd-2.2.22/conf/ssl/ca.pem"
```

这里密钥用解密密钥,重启apache时就不用输入口令了.

然后重启下

```shell
server httpd restart 
```

使用https访问你的网站试试,可以访问表示成功了.
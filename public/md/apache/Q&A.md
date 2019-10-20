# Q&A

## Q: apache logs 文件过大怎么办?

> 关于apache下logs文件过大的问题处理方式:
>
> 这里的文件主要有几个:
>
> logs/error.log 
>
> logs/access.log 
>
> 如果安装了ssl可能还会有
>
> logs/ssl_request_log
>
> logs/ssl_error.log
>
> logs/ssl_access.log
>
> 
>
> 这里的做法有2种
>
> 限制错误日志文件的大小为1M
>
> 每天生产一个错误日志文件
>
> 
>
> centos服务器下的具体操作:
>
> 修改 conf/httpd.conf , extra/httpd-ssl.conf 的文件
>
> 注释掉原本的ErrorLog,CustomLog
>
> ErrorLog “| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/error-%Y-%m-%d.log 1M”
>
> ErrorLog “| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/error-%Y-%m-%d.log 86400″
>
> 
>
> CustomLog “| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/access-%Y-%m-%d.log 1M” common
>
> CustomLog “| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/access-%Y-%m-%d.log 86400″ common
>
> 
>
> extra/httpd-ssl.conf
>
> ErrorLog "| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/error-%Y-%m-%d.log 1M"
>
> TransferLog "| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/access-%Y-%m-%d.log 1M"
>
> CustomLog "| /www/wdlinux/apache/bin/rotatelogs /www/wdlinux/apache/logs/ssl_request-%Y-%m-%d.log 1M" \
>
> 
>
> 这里命令中的路径/www/wdlinux/apache/根据你服务器的实际安装位置改变,必须要绝对地理位置.




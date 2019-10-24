# 企业邮箱IP被屏蔽

企业邮箱在设置的时候第一要素就是IP，你邮箱所在服务器的IP是否已经是黑IP了？如果是，那抱歉等着别拒吧！

企业邮箱发送IP被反垃圾邮件组织屏蔽后的解封步骤

当邮件发送方服务器的IP被国际反垃圾邮件组织屏蔽后解除封锁的步骤首先要做的事：

1、所做测试均在问题服务器上进行。

2、确认问题服务器的IP（或整个IP段）不在SBL、RBL、CBL中

关于国际黑名单查询，您可以在这里：

http://www.dnsstuff.com/tools/ip4r.ch?ip=（您的IP） 

或

http://www.kloth.net/services/dnsbl.php （推荐使用）进行查询。

其他应用范围较广泛的黑名单组织网站：

1.  http://www.spamhaus.org/sbl/index.lasso
2. http://www.spamhaus.org/xbl/index.lasso
3.  http://www.spamcop.net/bl.shtml
4.  http://anti-spam.org.cn/services/rbl.php
5. http://www.senderbase.org/search?page=senders
6. http://openrbl.org/

如果您很不幸的列在上述组织的黑名单中，那您就需要向他们申请解封。（全英文的，填申请资料过程很繁琐）

一般48小时内给予答复，若这个时间内您的邮件服务器依然向外发送垃圾邮件，而他们又接到举报，他们会在1小时之内把您Blocked 掉

3、确认发信域名能够解析，且问题服务器上设置的域名在有效期内并可正常使用。

4、在问题邮件服务器上完成测试

5、查看自己域名的MX记录

6、TELNET命令测试

根据返回的错误代码判断

3.1  错误代码：450 4.7.1 Client host rejected: cannot find your hostname

错误原因：对方服务器未设置反向解析

处理方式：请联络IDC进行处理。

可参考中国互联网协会反垃圾中心提供的设置方式：http://www.anti-spam.cn/ShowArticle.php?id=2269

3.2   错误代码：450 4.7.1 Helo command rejected: Host not found

错误原因：对方服务器在HELO命令中提供的域名不能被解析

处理方式：请检查其HELO命令提供的域名信息，且保证其符合RFC1035国际标准的规定。

3.3  错误代码：504 5.5.2 Helo command rejected: need fully-qualified hostname

错误原因：对方服务器的HELO信息不是完整的域名

处理方式：请检查HELO命令提供的域名信息，且保证其符合RFC1035国际标准的规定。

3.4   错误代码：501 5.5.2 Helo command rejected: Invalid name

错误原因：对方服务器的HELO信息包含非法的字符

处理方式：RFC规定，HELO命令提供的信息不得包含中文字符。

请对方按照RFC1035国际标准规定，对其HELO信息设置进行修改。

3.5  错误代码：554 5.7.1 Recipient address rejected: Dynamic IP

错误原因：对方服务器使用动态IP

处理方式：请对方查看中华人民共和国信息产业部令第38号《互联网电子邮件服务管理办法》中的第四条：第四条     提供互联网电子邮件服务，应当事先取得增值电信业务经营许可或者依法履行非经营性互联网信息服务备案手续。未取得增值电信业务经营许可或者未履行非经营性互联网信息服务备案手续，任何组织或者个人不得在中华人民共和国境内开展互联网电子邮件服务。

3.6   错误代码：554 5.7.1 Service unavailable;

错误原因：对方服务器IP被国际权威的反垃圾组织列入黑名单

处理方式：请对方访问http://www.dnsstuff.com/tools/ip4r.ch?ip=查询并申请解封。解封后即恢复正常。

7 最后将退信，TELNET测试结果，已经公司信息等要求的内容发送给相对应的组织，又是用英文邮件，对方如果审核解除后会给您回复邮件，一般您收到邮件后即可恢复正常。
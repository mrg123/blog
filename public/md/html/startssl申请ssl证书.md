# 通过StartSSL申请免费SSL证书

StartSSL是StartCom公司旗下的SSL证书,一家提供免费SSL证书服务并且被主流浏览器支持的免费SSL,包括Chrome,Firefox,IE等浏览器都可以正常识别StartSSL,任何个人都可以从StartSSL中申请到免费一年的SSL证书.当然了到期再续一年就是了.

StartSSL审核比较宽松,一般注册时认真填写就可以通过.我现在要做的是个人申请.

StartSSL网址:

http://www.startssl.com/

点击Sign-Up注册

昨天申请过一次,我资料乱填写.得到的邮件回复

然后我听成邮件建议 TRY AGAIN

填写完整后,会发一封带验证码的邮件到邮箱

然后等待邮件回复.正常一天内就可以得到回复了.根据提示安装Generate Private Key.安装个人操作证书成功!

上面的步骤是完成StartSSL个人操作使用权,接下来要用自己的域名申请一个StartSSL的免费SSL证书.

击Validations Wizard,选择Domain name validation,点击Continue,输入你想要使用SSL的域名,点击继续.然后会发送一份确认邮件到你的域名所有者的邮箱里进行确认.根据步骤操作.

输入密钥进行加密,并保持生产的密钥,需要注意的,最后备份下密钥和证书.StartSSL会发送一份邮件提醒你备份.

输入你要绑定的二级域名,一般是www.

接下来等待管理员审核域名.到这里完成.接下来就是要布置SSL证书到服务器上了.

参考:http://www.freehao123.com/startssl-ssl/ 这里步骤更全面.

最后,本站完成了加密,可惜的是IP是共享的,openssl版本是1.0.1e.

**如今ssl的证书获取已经非常简单化,可以通过阿里等平台获取一年的免费证书**


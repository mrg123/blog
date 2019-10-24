# 狐火PDFJS

最近做一个企业画册,PDF的文件,这里需要在网页上进行渲染.一方面网页上看效果差,因为文件进行过压缩,画质太糟了.这个很矛盾,如果不压缩文件,太大的文件会给服务器带来过多的负担,及糟糕的用户体验.

一般浏览器有内置的PDF查看器来打开PDF文件,但感觉好像PDFJS打开更快,这个我并不清楚是什么技术.但PDFJS真的是快很多.另外使用起来非常之简单.

[点击下载火狐PDFJS](https://mozilla.github.io/pdf.js/)(mozilla.github)

[备用地址](https://github.com/mrg123/pdf.js)

使用方法是:访问viewer.html?file=加上对应的PDF文件地址就行了.更多的帮助信息[点击这里](https://blog.oio.de/2014/04/11/integrating-pdf-js-pdf-viewer-web-application/).

帮助网址:https://blog.oio.de/2014/04/11/integrating-pdf-js-pdf-viewer-web-application/

```
http://127.0.0.1/learnphp/pdfjs/web/viewer.html?file=http://127.0.0.1/learnphp/pdfjs/example.pdf
```

另外IE不支持PDFJS

```html


<script type="text/javascript"><!--

function ShowPDF(){

	if(navigator.userAgent.indexOf("MSIE")>0){

	window.open("http://***.pdf");    

	}else{

	window.open("http://***/pdfjs/web/viewer.html?file=***.pdf");    

	}

}

--></script>
```

这是我能想到的最好的打开PDF的最好解决方案了.


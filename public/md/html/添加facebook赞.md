# 在網頁上添加facebook的贊按鈕

簡單的設置-like按鈕iframe代碼（寫詳細,附帶圖片,縮短文字描述）

1,faceboook的iframe格式,首先要先申請 JAVASCRIPT SDK 申請個人APP (https://developers.facebook.com/)

2,從網站https://developers.facebook.com/docs/reference/plugins/like/ 獲得代碼,這裡可以設置一些基本的選項,可以選擇like或其他按鈕的設置

3,send按鈕沒有iframe的代碼,獲得代碼直接嵌套iframe在網頁的位置.

4,這裡的是iframe的代碼,iframe的高度寬度可以自己設定

5,iframe会少一个http:开头需要自己添加

例子:

```html
<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.mrg123.com&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font=arial&amp;colorscheme=light&amp;action=like&amp;height=65&amp;appId=593735707326515" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:120px;" allowTransparency="true" style="border:1px solid red;"></iframe>
```

祝你早日添加贊到自己的網站上.


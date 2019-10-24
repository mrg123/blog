# 判斷IE瀏覽器僅對IE能識別

條件註釋判斷瀏覽器

<!--[if !IE]><!--> 除IE外都可識別 <!--<![endif]-->
 <!--[if IE]> 所有的IE可識別 <![endif]-->
 <!--[if IE 6]> 僅IE6可識別 <![endif]-->
 <!--[if lt IE 6]> IE6以及IE6以下版本可識別 <![endif]-->
 <!--[if gte IE 6]> IE6以及IE6以上版本可識別 <![endif]-->
 <!--[if IE 7]> 僅IE7可識別 <![endif]-->
 <!--[if lt IE 7]> IE7以及IE7以下版本可識別 <![endif]-->
 <!--[if gte IE 7]> IE7以及IE7以上版本可識別 <![endif]-->
 <!--[if IE 8]> 僅IE8可識別 <![endif]-->
 <!--[if IE 9]> 僅IE9可識別 <![endif]-->

| 項目 | 範例                     | 說明                                                         |
| ---- | ------------------------ | :----------------------------------------------------------- |
| !    | [if !IE]                 | The NOT operator. This is placed immediately in front of the *feature*, *operator*, or *subexpression* to reverse the Boolean meaning of the expression.  			NOT運算符。這是擺立即在前面的*功能*，*操作員*，或*子表達式*扭轉布爾表達式的意義。 |
| lt   | [if lt IE 5.5]           | The less-than operator. Returns true if the first argument is less than the second argument.  			小於運算符。如果第一個參數小於第二個參數，則返回true。 |
| lte  | [if lte IE 6]            | The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.  			小於或等於運算。如果第一個參數是小於或等於第二個參數，則返回true。 |
| gt   | [if gt IE 5]             | The greater-than operator. Returns true if the first argument is greater than the second argument.  			大於運算符。如果第一個參數大於第二個參數，則返回true。 |
| gte  | [if gte IE 7]            | The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.  			大於或等於運算。如果第一個參數是大於或等於第二個參數，則返回true。 |
| ( )  | [if !(IE 7)]             | Subexpression operators. Used in conjunction with boolean operators to create more complex expressions.  			子表達式運營商。在與布爾運算符用於創建更復雜的表達式。 |
| &    | [if (gt IE 5)&(lt IE 7)] | The AND operator. Returns true if all subexpressions evaluate to true  			AND運算符。如果所有的子表達式計算結果為true，返回true |
| \|   | [if (IE 6)\|(IE 7)]      | The OR operator. Returns true if any of the subexpressions evaluates to true.  			OR運算符。返回true，如果子表達式計算結果為true。 |

 

 ```html
<!--[if lt IE 9]>
 加載CSS1
 <!--[else]>
 加載CSS2
 <![endif]-->
 ```

 這樣有效是有效,但是用HTML VALIDATOR裏,報錯,因為這個不符合XHTML 1.1的規範,
 如果把ELSE語句去掉,則正確.

```html
 <!--[if lt IE 9]>
 加載CSS1(可以把要重寫的寫在這裏).
 <![endif]-->
```


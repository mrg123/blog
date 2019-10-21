## IE6兼容hover的解决办法

ie6不支持:hover的属性,所以解决办法是用样式来代替:hover
ex: 如下面,当然这里我懒,用JQ写简介多了. 将li:hover 改成li.hover就OK了.就是这么简单.

```html
<!--[if lte IE 6]>

<style type="text/css"> 
li.hover .hide{display:block;}
</style>
<script>
$(function(){
    $('li').mouseover(function(){
        $(this).addClass('hover');
    }).mouseleave(function(){
        $(this).removeClass('hover');
    });
});
</script>

<![endif]-->
```


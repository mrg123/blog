<?php
require '../php/init.inc.php';




/* menu */
$menus = Common::getDir(DIR_CATALOG_MD);
$smarty->assign('menus',$menus);

/* router */
$uri = $_SERVER['REQUEST_URI'];
$content = '';
if($uri!='/'){
    // 支持url的中文解码
    $uri = urldecode($uri);
    if(is_file(DIR_CATALOG_MD . $uri)){
        $content = $uri;    
    }else{
        $request = substr($uri, 1);
        $request_arr = explode('/', substr($uri, 1));
        // 考虑两层嵌套
        if(!empty($request_arr[1])){
            $content = $request_arr[0] . '/' . $request_arr[1];
        }else{
            $content = $request_arr[0];
        }
    }
}else{
    $content = '/jquery/ajax.md';
}
if(is_file(DIR_CATALOG_MD.$content)){
    $title = $content;
    $content = DIR_CATALOG_MD . $content;
}else{
    $title = '404';
    $content = DIR_CATALOG . '404.md';
}

/* title */
$title = str_replace('/','|',substr($title,1));
$title = str_replace('.md','',$title);
$smarty->assign('title',$title);
$smarty->assign('year',date('Y'));

/* controller */
$smarty->assign('webpack',false);
$smarty->assign('data',Common::getMd($content));
$smarty->display('index.tpl');





?>
<?php
require '../php/init.inc.php';


/* title */
$smarty->assign('title','Mrg123|私欲日生如地上尘,一日不扫便又有一层');
$smarty->assign('year',date('Y'));

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
}
if(is_file(DIR_CATALOG_MD.$content)){
    $content = DIR_CATALOG_MD . $content;
}else{
    $content = DIR_CATALOG . '404.md';
}


/* controller */
$smarty->assign('data',Common::getMd($content));
$smarty->display('index.tpl');





?>
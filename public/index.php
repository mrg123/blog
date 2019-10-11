<?php
require '../php/init.inc.php';


/* title */
$smarty->assign('title','Mrg123|私欲日生如地上尘,一日不扫便又有一层');
$smarty->assign('year',date('Y'));

/* menu */

$menus = Common::getDir(DIR_CATALOG_MD);
$smarty->assign('menus',$menus);

$data = file_get_contents(DIR_CATALOG . 'md/step.md');

$smarty->assign('data',str_replace(PHP_EOL,'\r\n',$data));




$smarty->display('index.tpl');





?>
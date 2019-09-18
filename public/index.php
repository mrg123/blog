<?php
require '../php/init.inc.php';


/* title */
$smarty->assign('title','Mrg123|私欲日生如地上尘,一日不扫便又有一层');
$smarty->assign('year',date('Y'));






$smarty->display('index.tpl');





?>
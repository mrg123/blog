<?php
require '../php/init.inc.php';


/* title */
$smarty->assign('title','Mrg123-身体健康');
$smarty->assign('year',date('Y'));






$smarty->display('index.tpl');





?>
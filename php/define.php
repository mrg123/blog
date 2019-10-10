<?php

// /php/
define('DIR_APPLICATION',__DIR__ . '/');
// 网站根目录
define('DIR_ROOT',DIR_APPLICATION . '../');
// /public/
define('DIR_CATALOG',DIR_ROOT . 'public/');
// /public/md/
define('DIR_CATALOG_MD',DIR_CATALOG . 'md/');


if(isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS'])){
    define('CATALOG_URL','https://'. $_SERVER['SERVER_NAME']);    
}else{
    define('CATALOG_URL','http://'. $_SERVER['SERVER_NAME']);      
}

require 'common.php';


?>
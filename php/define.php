<?php

define('DIR_APPLICATION',__DIR__ . '/');
define('DIR_ROOT',DIR_APPLICATION . '../');
define('DIR_CATALOG',DIR_ROOT . 'public/');


if(isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS'])){
    define('CATALOG_URL','https://'. $_SERVER['SERVER_NAME']);    
}else{
    define('CATALOG_URL','http://'. $_SERVER['SERVER_NAME']);      
}



?>
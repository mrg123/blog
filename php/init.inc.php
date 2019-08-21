<?php

// require config
require 'define.php';
require DIR_ROOT . 'vendor/autoload.php';

$smarty = new Smarty();
$smarty->setTemplateDir(DIR_APPLICATION . 'smarty/templates/');
$smarty->addTemplateDir(DIR_APPLICATION . 'smarty/admin_templates/');
$smarty->setCompileDir(DIR_APPLICATION . 'smarty/templates_c/');
$smarty->setPluginsDir(DIR_APPLICATION . 'smarty/plugins/');
$smarty->setCacheDir(DIR_APPLICATION . 'smarty/cache/');
$smarty->setConfigDir(DIR_APPLICATION . 'smarty/configs/');

$smarty->caching = false;
$smarty->cache_lifetime = 0;

//$smarty->left_delimiter = '<{';
//$smarty->right_delimiter = '}>';

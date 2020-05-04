<?
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
$url = $_GET['url'];
print_r(ROOT);
require_once (ROOT . DS . 'library' . DS . 'bootstrap.php');
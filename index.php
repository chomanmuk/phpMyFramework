<?
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)).DS.'public_html');
$url = $_GET['url'];

require_once (ROOT. DS . 'librarys' . DS . 'bootstrap.php');
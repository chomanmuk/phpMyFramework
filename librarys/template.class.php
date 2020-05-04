<?php
include 'Template_.class.php';
class Template {

    protected $variables = array();
    protected $_controller;
    protected $_action;
    protected $_tpl;

    function __construct($controller,$action) {
        $this->_controller = $controller;
        $this->_action = $action;
        $this->tpl = new Template_();
    }

    /** Set Variables **/

    function set($name,$value) {
        $this->variables[$name] = $value;
    }

    /** Display Template **/

    function render() {
        extract($this->variables);
        include (ROOT . DS . 'application' . DS . 'views' . DS . $this->_controller . DS . $this->_action . '.php');
    
    }

}
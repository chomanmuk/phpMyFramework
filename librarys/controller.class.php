<?php

class Controller {

	protected $_model;
	protected $_controller;
	protected $_action;
	protected $_tpl;

	function __construct($model, $controller, $action) {

		$this->_controller = $controller;
		$this->_action = $action;
		$this->_model = $model;

		$this->$model = new $model;
		$this->_tpl = new Template_();

	}

	function set($name,$value) {
	    print_r($name);
	    print_r($value);
		//$this->_template->set($name,$value);
	}

	function __destruct() {
	//	$this->_template->render();
	}

}
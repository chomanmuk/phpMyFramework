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
	   $this->_tpl->define('layout', domain.DS.$name.DS.$value.'.tpl');
	   $this->_tpl->assign(array('title'  =>'나의 php템플릿'));
	   $this->_tpl->print_('layout');
	}

	function __destruct() {
	//	$this->_template->render();
	}

}
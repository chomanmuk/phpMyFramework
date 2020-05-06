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
	    $this->_tpl->define(array('header'=>'../public/include'.DS.'_header.tpl'
	              , 'body'=> domain.DS.$name.DS.$value.'.tpl'
	              , 'footer'=>'../public/include'.DS.'_footer.tpl'
	    ));
	   $this->_tpl->assign(array('title'  =>'나의 php템플릿'));
	   $this->_tpl->print_('body');
	}

	function __destruct() {
	//	$this->_template->render();
	}

}
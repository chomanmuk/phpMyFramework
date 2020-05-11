/**
 *	본플러그인은 저작권자의 허락을 듣하여 블루비에서 판매하고 있으며 저작권표시를 삭제하거나 무단 배포 또는 카피하였을경우 저작권법에 따라 처벌 받으실수 있습니다.
 * @name jquery.main.slides.show.js
 * @description Slideshow
 * @author 조만묵 (muki2009@nate.com)
 */

(function($) {

	var number_skitter = 0,
	skitters = [];

	$.fn.slideshow = function(options) {
		return this.each(function() {
			$(this).data('skitter_number', number_skitter);
			skitters.push(new $ss(this, options, number_skitter));
			++number_skitter;
		});
	};

	var defaults = {
			opacity		: 				0.8,
			pauseTime	: 				4500,
			animation	: 				1000,
			timer		: 				0,
			imgheight	:				0,
			screenWidth :				$(window).width(),
			imgwidth	:				0,
			areawidth	:				0,
			heightcut	:				35,
			widthcut	:				20,
			boxwidth	:				200,
			boxheight	:				300,
			bultwidth	:				400,
			bultheight	:				30,
			boxtop		:				50,
			lineheight	:				20,
			boxright	:				10,
			bultTop		:				300,
			bultLeft	:				150,
			controllerboxWidth :		30,
			controllbar :			true,
			prevSlide	:				0,
			nextSlide	:				0,
			currentSlide:				0,
			oldprev		:				0,
			oldnext		:				0,
			oldSlide	:				0,
			totalSlides	:				0,
			maskcolor	:				"#FFFFFF",
			tmpboxwidth	:				42,
			tmpboxheight:				42,
			animation_type	:				"",
			viewbult	:			true,
			viewlist :				false,
			cntview	:				false,
			runing	:				false,
			bultruning	:			true
		};

	$.slideshow = function(obj, options, number) {
		this.slide = $(obj);
		this.timer = null;
		this.settings = $.extend({}, defaults,  options || {});
		this.setup();
	};

	// Shortcut
	var $ss = $.slideshow;

	$ss.fn = $ss.prototype = {};

	$ss.fn.extend = $.extend;

	$ss.fn.extend({
		setup: function()
		{
			var self = this;
			this.load();
		},
		load: function(options){
			var self = this;
			$(".box_skitter_data", self.slide).find("div").each(function() {
				$(this).attr('rel', self.settings.totalSlides);
				$(this).css({opacity: 0, zIndex:10});
				self.settings.totalSlides ++;
			});
		}

	});

})(jQuery);
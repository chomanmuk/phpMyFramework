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
			animationType: 				'fade',
			animationSubType: 			'fade',
			timer		: 				0,
			screenWidth :				$(window).width(),
			imgwidth	:				0,
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
			this.resize();
			this.Event();
			this.settings.timer = setInterval(function(){ self.animate(); }, this.settings.pauseTime);
		},
		load: function(options){
			var self = this;
			$(".box_skitter_data", self.slide).find("div").each(function() {
				$(this).attr('rel', self.settings.totalSlides);
				$(this).css({opacity: 0, zIndex:1});
				self.settings.totalSlides ++;
			});
			$(self.slide).css({width:$(window).width()+'px'});
			self.settings.imgheight = $(self.slide).height();

			$(".box_skitter_data div[rel='0']", self.slide).css({'opacity':1,'z-index':9}).attr('on', 'Y');
		},
		Event : function(){
			var self = this;
			$(window).resize(function(){
				self.resize();
			});
		},
		resize : function(){
			var self = this;
			if($(".box_skitter_data div[on='Y'] img",self.slide).height() < self.settings.imgheight){
				$(self.slide).css({width:$(window).width() +'px',height:$(".box_skitter_data div[on='Y'] img",self.slide).height() + 'px'})
			}else{
				$(self.slide).css({width:$(window).width() +'px',height:self.settings.imgheight + 'px'})
			}

		},
		fadeAnimat : function(){
			var self = this;
			$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).stop().animate({opacity:0,zIndex:1}, self.settings.animation);
			$(".box_skitter_data div[rel='" + self.settings.currentSlide + "']", self.slide).stop().animate({opacity:1,zIndex:9}, self.settings.animation);

		},
		fadeInAnimat : function(){
			var self = this;

			$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).attr('on', 'N').css({opacity:1,left:0+'px',width:100+'%'}).stop().animate({opacity:0,zIndex:1, left:'-'+($(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()*0.5)/2+'px',width:140 +'%'}, self.settings.animation);
			$(".box_skitter_data div[rel='" + self.settings.currentSlide + "']", self.slide).attr('on', 'Y').css({opacity:0,left:0+'px',width:100+'%'}).stop().animate({opacity:1,zIndex:9,left:0+'px', width:100 +'%'}, self.settings.animation);

		},
		fadeOutAnimat : function(){
			var self = this;

			$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).attr('on', 'N').css({left:0+'px',width:100+'%'}).stop().animate({opacity:0,zIndex:1, left:'0px',width:100 +'%'}, self.settings.animation);
			$(".box_skitter_data div[rel='" + self.settings.currentSlide + "']", self.slide).attr('on', 'Y').css({opacity:0,zIndex:1,left:'-'+($(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()*0.5)/2+'px',width:140+'%'}).stop().animate({opacity:1,zIndex:9,left:0+'px', width:100 +'%'}, self.settings.animation);

		},
		leftMoveAnimat : function(){
			var self = this;

			$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).attr('on', 'N').css({left:0+'px'}).stop().animate({opacity:1,zIndex:1, left:'-'+$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()+'px',width:100 +'%'}, self.settings.animation);
			$(".box_skitter_data div[rel='" + self.settings.currentSlide + "']", self.slide).attr('on', 'Y').css({opacity:1,zIndex:1,left:$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()+'px',width:100+'%'}).stop().animate({opacity:1,zIndex:9,left:0+'px', width:100 +'%'}, self.settings.animation);

		},
		rightMoveAnimat : function(){
			var self = this;

			$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).attr('on', 'N').css({left:0+'px', width:100+'%'}).stop().animate({opacity:1,zIndex:1, left:$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()+'px',width:100 +'%'}, self.settings.animation);
			$(".box_skitter_data div[rel='" + self.settings.currentSlide + "']", self.slide).attr('on', 'Y').css({opacity:1,zIndex:1,left:'-'+$(".box_skitter_data div[rel='" + self.settings.oldSlide + "']", self.slide).width()+'px',width:100+'%'}).stop().animate({opacity:1,zIndex:9,left:0+'px', width:100 +'%'}, self.settings.animation);

		},
		makeLayer : function(){
			var self = this;
			var layerWidth = $(self.slide).width()/self.settings.widthcut;
			var layerHeight = $(self.slide).height()/self.settings.heightcut;
			var step = 0;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".box_skitter_data", self.slide).append("<div class='block' rel='" + step + "' style='position:absolute;width:" + layerWidth + "px;left:" + (i*layerWidth) + "px;top:" + (j * layerHeight) + "px;z-index:9;height:" + layerHeight + "px;background-image:url(" + $(".box_skitter_data div[rel='" + self.settings.oldSlide + "'] > img", self.slide).attr('src') + ");background-position: -" +( i* layerWidth)+ "px -" + (j * layerHeight) + "px; '></div>");
					step++;
				}
			}

		},
		closeFadeLayer : function(){
			var self = this;
			var step = 0;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({width:0+'px',height:0+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { width: "linear", height: "linear" } , complete: function(){ $(this).remove(); }})
					step++;
				}
			}
		},
		closeFadeReverseLayer : function(){
			var self = this;
			var step = (self.settings.widthcut * self.settings.heightcut) -1;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({width:0+'px',height:0+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { width: "linear", height: "linear" } , complete: function(){ $(this).remove(); }})
					step--;
				}
			}
		},
		closeMosaicLayer : function(){
			var self = this;
			var step = 0;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({width:0+'px',height:0+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { width: "easeInOutBack", height: "easeInOutBack" } , complete: function(){ $(this).remove(); }})
					step++;
				}
			}
		},
		closeMosaicReverseLayer : function(){
			var self = this;
			var step = (self.settings.widthcut * self.settings.heightcut) -1;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({width:0+'px',height:0+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { width: "easeInOutBack", height: "easeInOutBack" } , complete: function(){ $(this).remove(); }})
					step--;
				}
			}
		},
		closeTwistLayer : function(){
			var self = this;
			var step = 0;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).transition({rotate:'45deg',opacity:0}).animate({transform:'rotate(180deg)'}, { duration: self.settings.animation,  specialEasing: { width: "easeInOutBack", height: "easeInOutBack" } , complete: function(){ $(this).remove(); }})
					step++;
				}
			}
		},
		closeTwistReverseLayer : function(){
			var self = this;
			var step = (self.settings.widthcut * self.settings.heightcut) -1;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).transition({rotate:'45deg',opacity:0}).animate({transform:'rotate(180deg)'}, { duration: self.settings.animation,  specialEasing: { width: "easeInOutBack", height: "easeInOutBack" } , complete: function(){ $(this).remove(); }})
					step--;
				}
			}
		},
		closeDownLayer : function(){
			var self = this;
			var step = 0;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({top:$(self.slide).height()+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { top: "easeInOutElastic" } , complete: function(){ $(this).remove(); }})
					step++;
				}
			}
		},
		closeDownReverseLayer : function(){
			var self = this;
			var step = (self.settings.widthcut * self.settings.heightcut) -1;
			for(var i=0;i<self.settings.widthcut;i++){
				for(var j=0;j<self.settings.heightcut;j++){
					$(".block[rel='" + step + "']", self.slide).stop().delay(((i+j)*80)).animate({top:$(self.slide).height()+'px',opacity:0}, { duration: self.settings.animation,  specialEasing: { top: "easeInOutElastic" } , complete: function(){ $(this).remove(); }})
					step--;
				}
			}
		},
		blindAnimat : function(){
			var self = this;
			self.makeLayer();
			$(".item[rel='" + self.settings.oldSlide + "']", self.slide).attr('on', 'N').css({left:0+'px',zIndex:1, width:100+'%',opacity:0});
			//clearInterval(self.settings.timer);
			self.closeLayerAnimat();
			$(".item[rel='" + self.settings.currentSlide + "']", self.slide).attr('on', 'Y').css({opacity:1,zIndex:1,left:0+'px',width:100+'%'}).stop().animate({opacity:1,zIndex:9,left:0+'px', width:100 +'%'}, self.settings.animation);

		},
		closeLayerAnimat : function(){
			var self = this;
			switch (self.settings.animationSubType)
			{
				case "fade":
					self.closeFadeLayer();
					break;
				case "fadeReverse":
					self.closeFadeReverseLayer();
					break;
				case "mosaic":
					self.closeMosaicLayer();
					break;
				case "mosaicReverse":
					self.closeMosaicReverseLayer();
					break;
				case "twist":
					self.closeTwistLayer();
					break;
				case "twistReverse":
					self.closeTwistReverseLayer();
					break;
				case "down":
					self.closeDownLayer();
					break;
				case "downReverse":
					self.closeDownReverseLayer();
					break;
				default :
					break;
			}
		},
		animate : function(){
			var self = this;
			self.resize();
			self.settings.oldSlide=self.settings.currentSlide;
			if(self.settings.currentSlide >= (self.settings.totalSlides-1)){ self.settings.currentSlide = 0; 	}else{ self.settings.currentSlide ++; }

			switch (self.settings.animationType)
			{
				case "fade":
					this.fadeAnimat();
					break;
				case "fadeIn":
					this.fadeInAnimat();
					break;
				case "fadeOut":
					this.fadeOutAnimat();
					break;
				case "leftMove":
					this.leftMoveAnimat();
					break;
				case "rightMove":
					this.rightMoveAnimat();
					break;
				case "blindEvent":
					this.blindAnimat();
					break;
				default :
					break;
			}
		}
	});

})(jQuery);
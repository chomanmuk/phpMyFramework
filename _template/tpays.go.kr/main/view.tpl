<!--{# header }-->
<!-- 네비게이션바  -->
	 <div class="navbar navbar-fixed-top">
	      <div class="container">
	        	<!-- 로고 -->
	        	<div class="logo" ><a href="#"><img src="{=image('/logo/logo.png')}" ></a></div>
	        	<!--// 로고 -->
				<ul class="memu" id="topmenu" >
					<li><a href="#" >회사소개</a>
						<div class="submenu">
							<ul>
								<li><a href="#">CEO인사말</a></li>
								<li><a href="#">연혁</a></li>
								<li><a href="#">VISION</a></li>
								<li><a href="#">조직도</a></li>
								<li><a href="#">CI</a></li>
								<li><a href="#">오시는길</a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" >사업영역</a>
						<div class="submenu">
							<ul>
								<li><a href="#">주요사업소계</a></li>
								<li><a href="#">계열사/제휴사</a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" >경영정보</a>
						<div class="submenu">
							<ul>
								<li><a href="#">공지사항</a></li>
								<li><a href="#">재무성과</a></li>
								<li><a href="#">공시정보</a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" >홍보센터</a></li>
					<li><a href="#" >채용정보</a></li>
				</ul>
	        	<!-- 모바일메뉴 -->
	        	<div class="mobile_menu" ><a href="#"><img src="{=image('/btn_allmenu.png')}" ></a></div>
	        	<!--// 모바일메뉴 -->
	      </div>
	      <div class="submenuBg" style="height: 0px; opacity: 0;"></div>
	</div>
	<script type="text/javascript">
			    $(document).ready(function(){
			    	$('.navbar').hover(function(){
			    		$(this).stop().animate({backgroundColor: "#FFFFFF"}, 500);
			    	},function(){
			    		$(this).stop().animate({backgroundColor: "rgba(0,0,0,0)"}, 500);
			    	})
					$('#topmenu').hover(function(){
						$('.submenuBg').stop().animate({height: "230px", opacity : 1}, 500, function(){$('.container .submenu').stop().animate({ opacity : 1, height:'230px'}, 100); });
					 },function(){
					    $('.submenu').stop().animate({ opacity : 0, height:'0px' }, 100, function(){
					    	$('.submenuBg').stop().animate({height: "0px", opacity : 0}, 500);
					    });
					 })
			    });
	</script>
<!--// 네비게이션바  -->
<!-- 본문비주얼  -->
	<div class="main_visual">
	   <div class="visual item" ><img src="{=image('/visual/mainvisual_01.jpg')}"></div>
	   <div class="visual item" ><img src="{=image('/visual/mainvisual_02.jpg')}"></div>
	   <div class="visual item" ><img src="{=image('/visual/mainvisual_03.jpg')}"></div>
	</div>
<!--// 본문비주얼  -->
<!--// 본문레이아웃  -->
 <!--{# footer }-->
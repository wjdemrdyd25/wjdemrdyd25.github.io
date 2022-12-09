/* 네비게이션 동작 코드 */
jQuery(function($){
	$(".menu_toggle_btn").click(function(){
		$('.gnb').stop().slideToggle('fast');
	});
});

/* 메인 영역의 bxslider 제이쿼리 플러그인 */
$(function() {
	$('.bxslider').bxSlider({
		slideWidth: 600,
		captions: true,
		auto: true,
		autoControls: true,
		stopAutoOnclick: true,
		speed: 3000
	});
});

/* 축제 영역의 owl 제이쿼리 플러그인 */ 
$(function() {
	$('.owl-carousel').owlCarousel({
		items:3,
		margin:10,
		loop:true,
		nav:true,
		navText:['이전','다음'],					
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true
	});
});
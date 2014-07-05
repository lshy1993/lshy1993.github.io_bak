// JavaScript Document
$(window).load(function() {
	setSize();
	$('#bg').fadeIn(1000);
	$('.pageTopLink').on('click', function() {
		$('body,html').stop(true,false).animate({scrollTop:0}, 1000, 'easeInOutCubic');
		return false;
	});
	
	var pagetop = $('#pageTopWrap');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	
	$('#pageTopWrap').on('click', function() {
		$('body,html').stop(true,false).animate({scrollTop:0}, 1000, 'easeInOutCubic');
		return false;
	});
	
	$(window).scroll(function() {
		setInfo();
	});
	
	$('.leftPart').css({'left':'-350px'});
	$('.rightPart').css({'right':'-350px'});
	$('.leftPart').animate({left:'0px'},1000,'easeOutQuint');
	$('.rightPart').animate({right:'0px'},1000,'easeOutQuint');
	
});
function setSize() {
	//img_origin_size
	var imgW = 1299;
	var imgH = 885;
	var winW = $(window).width();
	var winH = $(window).height();
	if(winW < 1024) { winW = 1024; }
	var scaleW = winW / imgW;
	var scaleH = winH / imgH;
	var fixScale = Math.max(scaleW, scaleH);
	var setW = imgW * fixScale;
	var setH = imgH * fixScale;
	var moveX = Math.floor((winW - setW) / 2);
	$('#siteWrap').css({'width': setW,'height': setH,'left' : moveX});
}
function setInfo(){
	var docH = $(document).height();
	var winH = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollPos = winH + scrollTop;
	if ((docH - scrollPos) <= 150) {
		bottomP = 160- (docH - scrollPos);
		$('#siteContent').css('bottom', bottomP +'px');
	} else {
		$('#siteContent').css('bottom', '10px');
	}
}
$(window).on('load resize', function(){
	setSize();
	setInfo();
});
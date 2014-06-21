// JavaScript Document
$(window).load(function() {
	$('#bg').maximage({
		onFirstImageLoaded: function() {
			//$('#bg').fadeIn(1000);
		}
	});
	$('#bg').fadeIn(1000);
	$('#globalEffect').snowfall({
		flakeCount: 8,
		flakeIndex: -1,
		maxSpeed: 5,
		minSpeed: 1,
		maxSize: 20,
		minSize: 4,
		image: './img/flake.png'
	});
	$('#globalEffect').fadeIn(2000);
	
	$("#sideNavEffect").hover(function(){
    	$(this).not(':animated').animate({left:'-700px'});
	}, function() {
		$(this).animate({left:'-960px'});
	});
	
	$('.subMenu').hover(function() {
		$('> ul:not(:animated)', this).slideToggle();
	}, function() {
		$('> ul:not(:animated)', this).slideToggle();
	});
	
	$('#topSlogan-01').delay(1500).animate({opacity:'1'}, {duration: 1500, easing: 'linear'});
	$('#topSlogan-02').delay(3000).animate({opacity:'1'}, {duration: 1500, easing: 'linear'});
	$('#topPost-01').delay(4500).animate({opacity:'1'}, {duration: 1000, easing: 'linear'});
	$('#topPost-02').delay(5500).animate({opacity:'1'}, {duration: 1000, easing: 'linear'});
	$('#topPost-03').delay(6500).animate({opacity:'1'}, {duration: 1000, easing: 'linear'});
	
	$('#topUpdateInfo').cycle({
		fx: 'scrollHorz',
		next: '#infoControlNext',
		prev: '#infoControlPrev',
		 // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	$('#topUpdateInfo').cycle('pause');
	
	//---------------------以下为测试用---------------------------
	/*$('#topCatch-01').delay(1500).animate({width: 370}, {duration: 2500, easing: 'linear'});
	$('#topCatch-02').delay(5000).animate({width: 250}, {duration: 1700, easing: 'linear'});
	$('#topCatch-03').delay(7700).animate({width: 250}, {duration: 1700, easing: 'linear'});
	$('#topOnair-01').delay(11400).animate({width: 280}, {duration: 1000, easing: 'linear'});
	$('#topOnair-02').delay(12900).animate({width: 390}, {duration: 1000, easing: 'linear'});*/

	//setGlobalNavPos();
	
	/*$('#sideNavEffect').hover(function() {
		navMoveWidth = $(this).offset().left + 260;
		navWidth = $(this).offset().left;
		$(this).not(':animated').animate({left: navMoveWidth }, '200');
	}, function() {
		$(this).animate({left: navWidth}, '200');
	});
	
	$('.subMenu').hover(function() {
		$('> ul:not(:animated)', this).toggle();
	}, function() {
		$('> ul:not(:animated)', this).toggle();
	});*/
	
});

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
		$('.subNav:not(:animated)', this).slideToggle();
	}, function() {
		$('.subNav:not(:animated)', this).slideToggle();
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
	
});

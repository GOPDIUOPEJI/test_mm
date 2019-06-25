$(document).ready(function(){
	$(".head-mobile").on('click', function() {
	    $(this).toggleClass('menu-opened');
	    $('.menu-box').toggleClass('cssmenu-o');
	    document.getElementsByClassName('menu-box')[0].scrollTop = 0;
	    $('header').toggleClass('open_bg');
	    $('body .blur-page').toggleClass('opened');
	   	$('body').toggleClass('menu-open');
	});

	$('body .blur-page').on('click', function(){
		$('.head-mobile').click();
	});
});

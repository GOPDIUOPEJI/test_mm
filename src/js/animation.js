$(document).ready(function(){
	$(".head-mobile").on('click', function() {
	    $(this).toggleClass('menu-opened');
	    $('.menu-box').toggleClass('cssmenu-o');
	    $('header').toggleClass('open_bg');
	});
});

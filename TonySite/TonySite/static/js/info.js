var clicked;
$(document).ready(function () {
	$('#home > h2').css('color','gray');
	$('#contact').click(function(){
		$('#contact > h2').css('color','gray');
		$('#home > h2').css('color','white');
		$('#info-box').fadeIn();
		$('#contact-info').fadeIn();
		clicked = "Contact";
			});
	$('#home').click(function(){
		$('#home > h2').css('color','gray');
		$('#contact > h2').css('color','white');
		$('#info-box').fadeOut();
		$('#contact-info').fadeOut();
		clicked = "Home";
	});
	$('#contact').hover(function(){
		$('#contact > h2').css('color','gray');
});
	$('#home').hover(function(){
		$('#home > h2').css('color','gray');
	});
	$('#contact').mouseleave(function(){
		if(clicked!="Contact"){
			$('#contact > h2').css('color','white');
		}
	});
	$('#home').mouseleave(function(){
		if(clicked!="Home"){
			$('#home > h2').css('color','white');
		}
	});
});
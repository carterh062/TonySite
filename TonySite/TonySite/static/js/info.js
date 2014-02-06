$(document).ready(function () {
	$('#home > h2').css('color','white');
	$('#contact').click(function(){
		$('#contact > h2').css('color','white');
		$('#home > h2').css('color','gray');
		$('#info-box').fadeIn();
		$('#contact-info').fadeIn();	});
	$('#home').click(function(){
		$('#home > h2').css('color','white');
		$('#contact > h2').css('color','gray');
		$('#info-box').fadeOut();
		$('#contact-info').fadeOut();
	});
});
var i;
var count;
$(document).ready(function () {
	count = $("#slideshow img").length;
	console.log(count);
	for(var i=1;i<=count;i++){
		$('#slideshow:nth-child(' + count +')').fadeTo(1000,0.0);
	}
		i = setInterval(function () {
			$('#slideshow :nth-child(' + count + ')').fadeTo(1000,0.0);
			$('#slideshow :nth-child(' + count + ')').prev('img').fadeTo(1000,1.0);
			setTimeout(function () {
			$('#slideshow :nth-child(' + count + ')').prependTo('#slideshow');
		},1000);
		},
		5000);
	
	$('#stop').click(function(){
		
		clearInterval(i);
	});
	$('#next').click(function(){
		
		$('#slideshow :nth-child(' + count + ')').fadeTo(1000,0.0);
		$('#slideshow :nth-child(' + count + ')').prev('img').fadeTo(1000,1.0);
		setTimeout(function () {
			$('#slideshow :nth-child(' + count + ')').prependTo('#slideshow');
		},1000);
		clearInterval(i);
		i = setInterval(function () {
			$('#slideshow :nth-child(' + count + ')').fadeTo(1000,0.0);
			$('#slideshow :nth-child(' + count + ')').prev('img').fadeTo(1000,1.0);
			setTimeout(function () {
			$('#slideshow :nth-child(' + count + ')').prependTo('#slideshow');
		},1000);
		},
		5000);
	});
	$('#prev').click(function(){
		$('#slideshow :nth-child(' + count + ')').fadeTo(1000,0.0);
		$('#slideshow :nth-child(' + count + ')').prev('img').prev('img').fadeTo(1000,1.0);
		setTimeout(function () {
			$('#slideshow :nth-child(' + count + ')').prependTo('#slideshow');
		},1000);	
		clearInterval(i);
		i = setInterval(function () {
			$('#slideshow :nth-child(' + count + ')').fadeTo(1000,0.0);
			$('#slideshow :nth-child(' + count + ')').prev('img').fadeTo(1000,1.0);
			setTimeout(function () {
			$('#slideshow :nth-child(' + count + ')').prependTo('#slideshow');
		},1000);
		},
		5000);
	});
});
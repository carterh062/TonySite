$(document).ready(function () {

    $('#slideshow :nth-child(3)').css('left', '0');
	    setInterval(function () {
	            $('#slideshow :nth-child(3)').animate({
	                left: '-1100px'
	            }, {
	                duration: 1000,
	                queue: false
	            })
	            setTimeout(function () {
	                $('#slideshow :nth-child(3)').prev('img').animate({
	                    left: '0'
	                }, {
	                    duration: 1000,
	                    queue: false
	                })
	            }, 1000);
	            setTimeout(function () {
	                $('#slideshow :nth-child(3)').prev().prev('img').css('left','0').animate({
	                    left: '30px'
	                }, {
	                    duration: 200,
	                    queue: false
	                })
	                    .end().end().prependTo('#slideshow');
	            }, 2000);
	        },
	        8000);
});
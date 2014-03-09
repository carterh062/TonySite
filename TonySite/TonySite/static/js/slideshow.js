var stopped = false;
var i;
$(document).ready(function () {
	console.log("stopped" + stopped);
if(!stopped){
    $('#slideshow :nth-child(3)').css('left', '0');
	    i = setInterval(function () {
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
}
	$('#stop').click(function(){
		 stopped = true;
		 clearInterval(i);
	});
	$('#next').click(function(){
		stopped = false;
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
	            clearInterval(i);
	            i = setInterval(function () {
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
	$('#prev').click(function(){
		stopped = false;
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
	            clearInterval(i);
	            i = setInterval(function () {
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
});
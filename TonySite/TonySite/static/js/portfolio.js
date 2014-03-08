$(document).ready(function () {

	$("#education").hover(function () {
		$('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#education').css('color', 'gray');
        $('#commercial').css('color', 'white');
        $('#residential').css('color', 'white');
        $('#cultural').css('color', 'white');
        $('#sports').css('color', 'white');
	});
	$("#commercial").hover(function () {
		$('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#education').css('color', 'white');
        $('#commercial').css('color', 'gray');
        $('#residential').css('color', 'white');
        $('#cultural').css('color', 'white');
        $('#sports').css('color', 'white');
	});
	$("#residential").hover(function () {
		$('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#education').css('color', 'white');
        $('#commercial').css('color', 'white');
        $('#residential').css('color', 'gray');
        $('#cultural').css('color', 'white');
        $('#sports').css('color', 'white');
	});
	$("#cultural").hover(function () {
		$('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#education').css('color', 'white');
        $('#commercial').css('color', 'white');
        $('#residential').css('color', 'white');
        $('#cultural').css('color', 'gray');
        $('#sports').css('color', 'white');
	});
	$("#sports").hover(function () {
		$('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#education').css('color', 'white');
        $('#commercial').css('color', 'white');
        $('#residential').css('color', 'white');
        $('#cultural').css('color', 'white');
        $('#sports').css('color', 'gray');
	});
	$("#education").click(function () {
		$('#list-education').animate({
            height: '100px'
        }, 100);
        $('#list-commercial').animate({
            height: '0px'
        }, 100);
        $('#list-residential').animate({
            height: '0px'
        }, 100);
        $('#list-cultural').animate({
            height: '0px'
        }, 100);
		$('#list-sports').animate({
            height: '0px'
        }, 100);
	});
	$("#commercial").click(function () {
		$('#list-education').animate({
            height: '0px'
        }, 100);
        $('#list-commercial').animate({
            height: '100px'
        }, 100);
        $('#list-residential').animate({
            height: '0px'
        }, 100);
        $('#list-cultural').animate({
            height: '0px'
        }, 100);
		$('#list-sports').animate({
            height: '0px'
        }, 100);
	});
	$("#residential").click(function () {
		$('#list-education').animate({
            height: '0px'
        }, 100);
        $('#list-commercial').animate({
            height: '0px'
        }, 100);
        $('#list-residential').animate({
            height: '100px'
        }, 100);
        $('#list-cultural').animate({
            height: '0px'
        }, 100);
		$('#list-sports').animate({
            height: '0px'
        }, 100);
	});
	$("#cultural").click(function () {
		$('#list-education').animate({
            height: '0px'
        }, 100);
        $('#list-commercial').animate({
            height: '0px'
        }, 100);
        $('#list-residential').animate({
            height: '0px'
        }, 100);
        $('#list-cultural').animate({
            height: '100px'
        }, 100);
		$('#list-sports').animate({
            height: '0px'
        }, 100);
	});
	$("#sports").click(function () {
		$('#list-education').animate({
            height: '0px'
        }, 100);
        $('#list-commercial').animate({
            height: '0px'
        }, 100);
        $('#list-residential').animate({
            height: '0px'
        }, 100);
        $('#list-cultural').animate({
            height: '0px'
        }, 100);
		$('#list-sports').animate({
            height: '100px'
        }, 100);
	});
});
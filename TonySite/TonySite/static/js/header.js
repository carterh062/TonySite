$(document).ready(function () {
    $("#profile").hover(function (e) {
        $('#profile > h2').css('color', 'gray');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
    });
    $("#portfolio").hover(function (e) {
        $('#portfolio > h2').css('color', 'gray');
        $('#profile > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
    });
    $("#persons").hover(function (e) {
        $('#persons > h2').css('color', 'gray');
        $('#portfolio > h2').css('color', 'white');
        $('#profile > h2').css('color', 'white');

    });
    $("#profile").click(function (e) {
        $('#profile > h2').css('color', 'gray');
        $('#portfolio > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#primary-list-portfolio').animate({
            height: '0px'
        }, 100);
        $('#primary-list-persons').animate({
            height: '0px'
        }, 100);
    });
    $("#portfolio").click(function (e) {
        $('#portfolio > h2').css('color', 'gray');
        $('#profile > h2').css('color', 'white');
        $('#persons > h2').css('color', 'white');
        $('#primary-list-portfolio').animate({
            height: '200px'
        }, 100);
        $('#primary-list-persons').animate({
            height: '0px'
        }, 100);
    });
    $("#persons").click(function (e) {
        $('#persons > h2').css('color', 'gray');
        $('#portfolio > h2').css('color', 'white');
        $('#profile > h2').css('color', 'white');
        $('#primary-list-portfolio').animate({
            height: '0px'
        }, 100);
        $('#primary-list-persons').animate({
            height: '200px'
        }, 100);
    });
});
$(document).ready(function () {
    $("#header").hover(function (e) {
        if ((!$(e.target).is('.list')) && (!$(e.target).is('#header'))) {
            $('.info').css('display', 'inline-block');
        }
        $('h2').css('background-color','transparent');
    });
    $("#profile").hover(function (e) {
        $('#profile > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'gray');
        $('.list-port > h3').css('font-size','0px');
        $('#s-p-list-pers > h4').css('font-size','0px');
        $('.list-spec').css('font-size','0px');
        $('#persons > h2').css('color', 'gray');
        $('.header-div').animate({
            width: '175px'
        }, 100);
        $('.list-pers').animate({
            width: '0%'
        }, 100);
        $('.list-port').animate({
            width: '0%'
        }, 100);
        $('.list-pers').animate({
            width: '0%'
        }, 100);
    });
    $("#portfolio").hover(function (e) {
        $('#portfolio > h2').css('color', 'white');
        $('#profile > h2').css('color', 'gray');
        $('#persons > h2').css('color', 'gray');
        $('.list-port').animate({
            width: '200px'
        }, 100);
        $('.header-div').animate({
            width: '100px'
        }, 100);
        $('.list-pers').animate({
            width: '0%'
        }, 100);
        $('#s-p-list-pers > h4').css('font-size','0px');
        $('.list-port > h3').css('font-size','20px');
        $('.list-spec').css('font-size','20px');
    });
    $("#persons").hover(function (e) {
        $('#persons > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'gray');
        $('#s-p-list-pers > h4').css('font-size','20px');
        $('.list-port > h3').css('font-size','0px');
        $('.list-spec').css('font-size','0px');
        $('#profile > h2').css('color', 'gray');
        $('.list-port').animate({
            width: '0%'
        }, 100);
        $('.header-div').animate({
            width: '125px'
        }, 100);
        $('.list-pers').animate({
            width: '350px'
        }, 100);
    });

    $("#header").mouseleave(function () {
        $('#persons > h2').css('color', 'gray');
        $('#portfolio > h2').css('color', 'gray');
        $('.list-port > h3').css('font-size','0px');
        $('#s-p-list-pers > h4').css('font-size','0px');
        $('.list-spec').css('font-size','0px');
        $('#profile > h2').css('color', 'gray');
        $('.list-port').animate({
            width: '0%'
        }, 100);
        $('.list-pers').animate({
            width: '0%'
        }, 100);
        $('.header-div').animate({
            width: '175px'
        }, 100);
    });
});
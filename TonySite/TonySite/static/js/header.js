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
    $("#header").mouseleave(function () {
        $('#persons > h2').css('color', 'white');
        $('#portfolio > h2').css('color', 'white');
        $('#profile > h2').css('color', 'white');
    });
    $("#profile").click(function (e) {
        $("#info-box").html("<h5>Home</h5><h5></h5><div id='info-content'><p>Established in 1992 by Anthony Weber AIA MRIAI, the firm of weberandcompany_architecture Incorporated provides professional design services both nationally and internationally that meet the programmatic needs of its clients through sensitive, responsible and innovative design. Located in Philadelphia, PA, the firm has successfully completed projects of diverse scope in the realms of higher education, private corporations and institutions, public and civic works, sporting and recreation, healthcare, hospitality, liturgical, multi-family mixed use development and private residential. While the firm’s portfolio exhibits projects of the range and size that a larger firm may offer, weberandcompany braska and the Republic of Ireland.</p></div>");

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
            height: '300px'
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
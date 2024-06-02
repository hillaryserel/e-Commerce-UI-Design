$(document).ready(function(){
    $( ".menu-toggle" ).click(function() {
        $('.menu ul').toggleClass('open');
    });
    $( ".search-toggle" ).click(function() {
        $('.search-bar').toggleClass('open');
    });
    $( ".search-close" ).click(function() {
        $('.search-bar').toggleClass('open');
    });
});
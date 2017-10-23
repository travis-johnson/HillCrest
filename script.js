$(document).ready(function() {
    $(".menu-button").click(function() {
        $(".menu-options").toggleClass("visible");
    });
    $('.sub-btn').click(function() {
        $(this).next('.sub-menu-opt').toggleClass('sub-drop');
        $(this).next('.sub-menu-opt').toggleClass('sub-drop-dt');
    });
})
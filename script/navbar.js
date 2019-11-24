hideScreens();

function hideScreens() {
    $(".content").hide();
}
$(document).ready(function() {
    $(".nav-link").on("click", function() {
        hideScreens();
        var target = $(this).attr("href");
        $(target).show();
        $(target).load("crime_database/"+target.replace("#", "") + ".html");
    });
});
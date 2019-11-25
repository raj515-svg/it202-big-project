hideScreens();

function hideScreens() {
    $(".content").hide();
}
$(document).ready(function() {
    $(".nav-link").on("click", function() {
        hideScreens();
        var target = $(this).attr("href");
        $(target).show();
        if(target == '#crimesearch') {
            $(target).load("crime_database/" + target.replace("#", "") + ".html");
            return false;
        }
        if(target == '#sexoffendersearch') {
            $(target).load("sex_offenders/" + target.replace("#", "") + ".html");
            return false;
        }
    });
});
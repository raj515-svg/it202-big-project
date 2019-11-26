$(document).ready(function() {
    $('#home').on('click', function() {
        $("#map").hide();
        $("#load").hide();
        $("#description").show();
        $("#load").load("index.html");
        return false;
    });
    $('#crimesearch').on('click', function() {
        $("#map").hide();
        $("#load").show();
        $("#load").load("crime_database/crimesearch.html");
        $("#description").hide();
        return false;
    });
    $('#sexoffendersearch').on('click', function() {
        $("#map").hide();
        $("#load").show();
        $("#load").load("sex_offenders/sexoffendersearch.html");
        $("#description").hide();
        return false;
    });
    $('#about').on('click', function() {
        $("#map").hide();
        $("#load").show();
        $("#load").load("about.html");
        $("#description").hide();
        return false;
    });
});
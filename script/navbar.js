$(document).ready(function() {
    $('#crimesearch').on('click', function() {
        $("#load").load("crime_database/crimesearch.html");
        return false;
    });
    $('#sexoffendersearch').on('click', function() {
        $("#load").load("sex_offenders/sexoffendersearch.html");
        return false;
    });
});
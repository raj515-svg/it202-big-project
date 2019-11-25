var x, y, k, j, a, b, c;
$(document).ready(function() {
    $("#numSearch").on('click', function() {
        x = $("#caseNum").val();
        $("#load").load("crime_database/" + "casenum.html");
        return false;
    });
});
$(document).ready(function() {
    $("#searchBy").on('click', function() {
        for(k = 2001; k <= 2019; k++) {
            if($('#is' + k + 'Selected').prop('checked')) {
                $("#load").load("crime_database/" + "year.html");
                return false;
            }
        }
    });
});
$(document).ready(function() {
    $("#search").on("click", function() {
        y = $("#crime").val();
        for(j = 2001; j <= 2019; j++) {
            if($('#is' + j + 'Selected').prop('checked')) {
                $("#load").load("crime_database/" + "caseyear.html");
                return false;
            } else {
                $("#load").load("crime_database/" + "caseyear.html");
                return false;
            }
        }
    });
});
$(document).ready(function() {
    $("#nameSearch").on('click', function() {
        a = $("#name").val();
        $("#load").load("sex_offenders/" + "name.html");
        return false;
    });
});
$(document).ready(function() {
    $("#raceSearch").on('click', function() {
        b = $("#race").val();
        $("#load").load("sex_offenders/" + "race.html");
        return false;
    });
});
$(document).ready(function() {
    $("#ageSearch").on('click', function() {
        c = $("#age").val();
        $("#load").load("sex_offenders/" + "age.html");
        return false;
    });
});
$(".dropdown dt a").on('click', function() {
    $(".dropdown dd ul").slideToggle('fast');
});
$(".dropdown dd ul li a").on('click', function() {
    $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if(!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});
$('.mutliSelect input[type="checkbox"]').on('click', function() {
    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";
    if($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown dt a').append(ret);
    }
});
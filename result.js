var x, y, k, j;
$(document).ready(function() {
    $("#numSearch").on('click', function() {
        x = $("#caseNum").val();
        $("body").load("search/" + "casenum.html");
        return false;
    });
});
$(document).ready(function() {
    $("#searchBy").on('click', function() {
        for(k = 2001; k <= 2019; k++) {
            if($('#is' + k + 'Selected').prop('checked')) {
                $("body").load("search/" + "year.html");
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
                $("body").load("search/" + "caseyear.html");
                return false;
            }
        }
    });
});
/*========================================IndexDB========================================*/
var db = new Dexie("History");
db.version(1).stores({
    items: 'id++, age, casenum'
});
db.open().
catch((error) => {
    console.log(error);
});
/*========================================Search Results========================================*/
var x, y, date1, date2, j, a, b, c;
$(document).ready(function() {
    $("#numSearch").on('click', function() {
        x = $("#caseNum").val().replace().toUpperCase();
        db.items.put({
            casenum: x
        });
        $("#load").load("crime_database/" + "casenum.html");
        return false;
    });
});
$(document).ready(function() {
    $("#date").on('click', function() {
        date1 = $("#date1").val();
        date2 = $("#date2").val();
        $("#load").load("crime_database/" + "year.html");
        return false;
    });
});
$(document).ready(function() {
        $("#search").on("click", function() {
            y = $("#crime").val().replace().toUpperCase();
            date1 = $("#date1").val();
            date2 = $("#date2").val();
            $("#load").load("crime_database/" + "caseyear.html");
            return false;
        });
});

$(document).ready(function() {
    $("#blockSearch").on('click', function() {
        a = $("#block").val().replace().toUpperCase();
        $("#load").load("sex_offenders/" + "block.html");
        return false;
    });
});
$(document).ready(function() {
    $("#raceSearch").on('click', function() {
        b = $("#race").val().replace().toUpperCase();
        $("#load").load("sex_offenders/" + "race.html");
        return false;
    });
});
$(document).ready(function() {
    $("#ageSearch").on('click', function() {
        c = $("#age").val().replace().toUpperCase();
        db.items.put({
            age: c
        });
        $("#load").load("sex_offenders/" + "age.html");
        return false;
    });
});
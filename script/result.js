/*========================================IndexDB========================================*/
var db = new Dexie("History");
db.version(1).stores({
    items: 'id++, type, date1, date2, age, casenum, block,latitude, longitude'
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
        if(x.length == 0) {
            alert("ARRR! You forgot to write a case number in search parameters");
            return false;
        }
        $("#load").load("crime_database/" + "casenum.html");
        setMapOnAll(null);
        return false;
    });
});
$(document).ready(function() {
    $("#date").on('click', function() {
        date1 = $("#date1").val();
        date2 = $("#date2").val();
        db.items.put({
            date1: date1,
            date2: date2
        });
        if(date1.length == 0 || date2.length == 0) {
            alert("ARRR! You forgot to witre date in search parameters");
            return false;
        }
        $("#load").load("crime_database/" + "year.html");
        setMapOnAll(null);
        return false;
    });
});
$(document).ready(function() {
    $("#search").on("click", function() {
        y = $("#crime").val().replace().toUpperCase();
        date1 = $("#date1").val();
        date2 = $("#date2").val();
        if(y.length == 0 || date1.length == 0 || date2.length == 0) {
            alert("ARRR! You forgot to write either date or type of crime in search parameters");
            return false;
        }
        db.items.put({
            type: y,
            date1: date1,
            date2: date2
        });
        $("#load").load("crime_database/" + "caseyear.html");
        setMapOnAll(null);
        return false;
    });
});
$(document).ready(function() {
    $("#blockSearch").on('click', function() {
        a = $("#block").val().replace().toUpperCase();
        db.items.put({
           block: a
        });
        if(block.length == 0) {
            alert("ARRR! You forgot to write a address in search parameters");
            return false;
        }
        $("#load").load("sex_offenders/" + "block.html");
        return false;
    });
});
$(document).ready(function() {
    $("#raceSearch").on('click', function() {
        b = $("#race").val().replace().toUpperCase();
        if(b.length == 0) {
            alert("ARRR! You forgot to write a race in search parameters");
            return false;
        }
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
        if(c.length == 0) {
            alert("ARRR! You forgot to write an age in search parameters");
            return false;
        }
        $("#load").load("sex_offenders/" + "age.html");
        return false;
    });
});
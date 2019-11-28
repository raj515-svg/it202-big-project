/*========================================MCW Navbar========================================*/
window.mdc.autoInit();
      // mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer')); 
      var drawer = document.querySelector('.mdc-drawer').MDCDrawer;
      // console.log(drawer);
    
      // open drawer on nav icon
      document.getElementsByClassName("mdc-top-app-bar__navigation-icon")[0].addEventListener("click", function(){
        drawer.open = true;
      });
    
      
      // close drawer on selection
      var navs = document.getElementsByClassName("mdc-list-item");
      
      for (var i = 0; i < navs.length; i++) {
        navs[i].addEventListener("click", function() {
          drawer.open = false;
        })
      };
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
    $("#nameSearch").on('click', function() {
        a = $("#name").val().replace().toUpperCase();
        $("#load").load("sex_offenders/" + "name.html");
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
/*========================================Dropdown menu script========================================*/
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
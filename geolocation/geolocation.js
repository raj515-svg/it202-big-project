// check for Geolocation support
if(navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}
var lat,lng;
window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
        startPos = position;
         lat = startPos.coords.latitude;
         lng = startPos.coords.longitude;
    };
    var geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code + ' Error message:' + error.message);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
$(document).ready(function() {
    $("#location").on('click', function() {
        $("#load").load("geolocation/" + "geolocation.html");
        setMapOnAll(null);
        $("#map").show();
        return false;
    });
});
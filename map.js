  var map;
  var markers = [];

  function initMap() {
      var chicago = {
          lat: 41.8781,
          lng: -87.6298
      };
      map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: chicago
      });
  }

  function createMarkers(record) {
      var latitude = parseFloat(record.latitude);
      var longitude = parseFloat(record.longitude);
      var loc = {
          lat: latitude,
          lng: longitude
      };
      var marker = markers.map(function() {
          return new google.maps.Marker({
              position: loc
          });
      });
      var markerCluster = new MarkerClusterer(map, marker, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      });
      markers.push(marker);
  }
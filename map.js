  var map;
  var markers = [];

  function initMap() {
      var chicago = {
          lat: 41.8781,
          lng: -87.6298
      };
      map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
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
      if(record.arrest == 'true') {
          var wasArrested = "Yes";
      } else {
          var wasArrested = "No";
      }
      var contentString = "<div class='mdc-card demo-card'><div class='mdc-card__primary-action demo-card__primary-action' tabindex='0'></div><div class='demo-card__primary'> <h2 class='demo-card__title mdc-typography mdc-typography--headline6'>" + record.primary_type + "</h2><h3 class='demo-card__subtitle mdc-typography mdc-typography--subtitle2'>" + record.year + "<br>Address: " + record.block + "<br> Ward: " + record.ward + "<br>Description: " + record.description + "<br> Arrested: " + wasArrested + "<br> Case Number: " + record.case_number + "</p></h6></h3></div><div class='demo-card__secondary mdc-typography mdc-typography--body2'></div></div><div class='mdc-card__actions'><div class='mdc-card__action-buttons'></div></div>";
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      })
      var marker = new google.maps.Marker({
          position: loc,
          map: map,
          crime: record.primary_type
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
          if(marker.getAnimation() !== null) {
              marker.setAnimation(null);
              marker.setAnimation(google.maps.Animation.BOUNCE);
          } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
          }
      });
      markers.push(marker);
  }

  function setMapOnAll(map) {
      for(var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
      }
  }
let map;
let service;
let infowindow;

function initMap() {
  const helsinki = new google.maps.LatLng(60.168325, 24.939187);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
  });

  const request = {
    location: helsinki,
    radius: '2500',
    query: 'cocktail bar'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(helsinki);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name + '<div>' + place.formatted_address + '</div>');
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;
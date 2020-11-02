function initMap() {
  let map = new google.maps.Map(
    document.querySelector('#mapa'),
    {
      center: {
        lat: 19.434389,
        lng: -99.152344
      },
      zoom: 16
    }
  );
  
}

initMap();

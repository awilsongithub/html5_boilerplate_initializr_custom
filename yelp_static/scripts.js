// ADD A GOOGLE MAP TO THE PAGE USING METHODS FROM THE GOOGLE MAPS LIBRARY

// get DOM element
var mapCanvas = document.getElementById('map-map');

// options object
var mapOptions = {
    center: new google.maps.LatLng(41.8, -87.6),
    zoom: 8
};
// map constructor
var map = new google.maps.Map(mapCanvas, mapOptions);

(function($) {
    var map = L.map('map').setView([50.032244, 14.589419], 16);
    
    L.tileLayer.provider('Esri.WorldStreetMap').addTo(map);

    L.marker([50.032244, 14.589419]).addTo(map)
        .bindPopup('Františka Diviše 1282/56A<br />104 00, Praha 10')
        .openPopup();
})(jQuery);
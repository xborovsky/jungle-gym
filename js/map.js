(function($) {
    var map = L.map('map').setView([50.032244, 14.589419], 16);
    
    L.tileLayer.provider('Esri.WorldTopoMap').addTo(map);

    L.marker([50.032244, 14.589419]).addTo(map);
})(jQuery);
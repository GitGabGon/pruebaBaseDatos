window.addEventListener('resize', ajusteAncho());
window.addEventListener('DOMContentLoaded', ajusteAncho());

function ajusteAncho() {
    navegador = document.getElementById('navegador');
    banner = document.getElementById('contenedor-banner');

    navegador.style.width = banner.offsetWidth + 'px';
}

document.addEventListener("DOMContentLoaded", function() {

    var map = L.map('map').setView([0,0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            map.setView([lat, lon], 13);

            var marker = L.marker([lat+0.003, lon+0.003]).addTo(map);
            marker.bindPopup("<b>Nuestra tienda</b>").openPopup();
            
            var marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup("<b>Tu ubicación actual</b>").openPopup();

            
        });
    } else {
        alert("Geolocalización no disponible en este navegador.");
    }
});

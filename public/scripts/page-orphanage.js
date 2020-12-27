const options = {
    dragging: false,
    touchZone: false,
    doubleClickZoom: false,
    scrollWhellZoom: false,
    zoomControl: false
}

//Recolhe valores do HTML
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//Cria o mapa
const map = L.map('mapid', options).setView([lat,lng], 15);

//Cria e adiciona titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Cria o ícone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

//Cria e adiciona o marcador
L.marker([lat,lng],{ icon }).addTo(map);

//Galleria de imagens
function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {button.classList.remove("active")})
    
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    imageContainer.src = image.src;

    button.classList.add("active")
}
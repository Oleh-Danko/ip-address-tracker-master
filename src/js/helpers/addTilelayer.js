export function addTilelayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="https://github.com/Oleh-Danko">Oleh Danko</a>.',
}).addTo(map);
}
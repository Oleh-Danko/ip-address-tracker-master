"use strict";

import {validate, addTilelayer, getResourse, getOffSet} from "./helpers";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('.search_bar-input'),
          btn = document.querySelector('.search_bar-btn'),
          ipInfo = document.querySelector('#ip'),
          loc = document.querySelector('#location'),
          timezoneInfo = document.querySelector('#timezone'),
          isp = document.querySelector('#isp');
    
    btn.addEventListener('click', getData);
    input.addEventListener('keydown', handleKey);
    
    const map = L.map('map').setView([50.45466, 30.5238], 13);
    
    addTilelayer(map);
    
    const myIcon = L.icon({
        iconUrl: './assets/images/icon-location.svg',
        iconSize: [30, 40],
    });
    
    function getData() {
        if (validate(input.value)) {
            getResourse(input.value)
            .then(setInfo);
        }
    }
    
    function handleKey(e) {
        if (e.code === 'Enter') getData();
    }
    
    function setInfo(data) {
        console.log(data);
        const {country, region, timezone, lat, lng} = data.location;
    
        ipInfo.textContent = data.ip;
        loc.textContent = `${country }: ${region}`;
        timezoneInfo.textContent = timezone;
        isp.textContent = data.isp;
    
        map.setView([lat, lng]);
        L.marker([lat, lng], {icon: myIcon}).addTo(map);
    
        if (window.matchMedia("(max-width: 1023px)").matches) {
            getOffSet(map);
        }
    }
});



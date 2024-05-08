const searchInput = document.getElementById('searchInput');

fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3e57e7e011029d2fb7abace9bdd9e5ec}')
.then
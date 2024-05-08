const cityName = document.getElementById('searchInput').value;


const p = fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5e8cb2874330f87f5695ebbb128be484&q=karachi`)
.then((response) =>{
    console.log(response)
    return response.json()
})
.then((response) =>{
    console.log(response);
})
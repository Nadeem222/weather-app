// const cityName = document.getElementById('searchInput').value;

const temp = document.getElementById('temp'),
        tempMain = document.getElementById('tempMain'),
        feelLikeBox = document.getElementById('feelLike'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        locationName = document.getElementById('location'),
        weatherStatus =document.getElementById('weatherStatus')

const getWeather = () =>{

    const p = fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5e8cb2874330f87f5695ebbb128be484&q=karachi`)
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((response) =>{
        let temprature = Math.round(response.main.temp)
        let feelLike = Math.round(response.main.feels_like)
        temp.innerText = temprature
        feelLikeBox.innerText = feelLike
        min.innerText = `${Math.round(response.main.temp_min)} °`
        max.innerText = `${Math.round(response.main.temp_max)} °`
        tempMain.innerText = `${Math.round(response.main.temp)} `
        locationName.innerText = response.name
        weatherStatus.innerText = response.weather[0].description


        console.log(response , temprature , locationName);
    })
}
getWeather()
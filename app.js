// const cityName = document.getElementById('searchInput').value;

const temp = document.getElementById('temp'),
        tempMain = document.getElementById('tempMain'),
        feelLikeBox = document.getElementById('feelLike'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        locationName = document.getElementById('location'),
        weatherStatus =document.getElementById('weatherStatus'),
        humidity = document.getElementById('humidity'),
        windSpeed = document.getElementById('windSpeed'),
        pressure = document.getElementById('pressure'),
        visibility = document.getElementById('visibilty'),
        sunrise = document.getElementById('sunrise'),
        sunset = document.getElementById('sunset')

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
        humidity.innerText = `${response.main.humidity}%`
        let windspeedInKilometer = response.wind.speed * 3.6
        windSpeed.innerText = `${windspeedInKilometer.toFixed(2)} km/h`
        pressure.innerText = ` ${response.main.pressure} mBar`
        let visibilityinKilometer = response.visibility / 1000;
        visibility.innerHTML = `${visibilityinKilometer} km`
        // let convertTime = (timestamp , timeZone) => {
        //     let date = new Date(timestamp * timeZone) / 1000;
        //     return date.toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        // }
        // let sunriseTime = convertTime(response.sys.sunrise , response.timezone)
        // let sunsetTime = convertTime(response.sys.sunset , response.timezone)
        // console.log(sunriseTime , sunsetTime);
        // sunrise.innerText = `${sunriseTime} am`
        // sunset.innerText = `${sunsetTime} pm`

        console.log(response , temprature , locationName);
    })
}
getWeather()
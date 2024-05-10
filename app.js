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
        sunset = document.getElementById('sunset'),
        cityName = document.getElementById('searchInput')


        let currentTime = new Date();
        let currentHour = currentTime.getHours()

        
cityName.addEventListener('keypress' ,(e) =>{
    if(e.key === 'Enter'){
        getWeather()
        cityName.value = ''
    }
})

const getWeather = () =>{
    let cityNameValue = document.getElementById('searchInput').value || "karachi";

    const p = fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5e8cb2874330f87f5695ebbb128be484&q=${cityNameValue}`)
    .then((response) =>{
        // console.log(response)
        return response.json()
    })
    .then((response) =>{
        console.log(response)
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
        
        let sunriseDate = new Date(response.sys.sunrise * 1000)
        let sunsetDate = new Date(response.sys.sunset * 1000)
        sunrise.innerText = `${moment(sunriseDate).format("h:mm")} am`;
        sunset.innerText =` ${moment(sunsetDate).format("h:mm")} pm`;

        
        

        
         

         

         

    })
    .catch((err) =>{
        console.log(err)
    })
}

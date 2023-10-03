const apiKey = "753e45c0b5b7b3b0b9b3b834986c8ad2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');
// const city = document.querySelector('.city')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        error.style.display = 'block'
        weather.style.display = 'none'
    } else {
        var data = await response.json();

        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').textContent = data.main.humidity + '%';
        document.querySelector('.Wind').textContent = data.wind.speed + 'km/h';
    
        switch (data.weather[0].main) {
            case 'Clear':
                weatherIcon.src = "Assets/sunny.png";
                break;
            case 'Clouds':
                weatherIcon.src = "Assets/cloudy-day.png";
                break;
            case 'Rain':
                weatherIcon.src = "Assets/rain.png";
                break;
            case 'Drizzle':
                weatherIcon.src = "Assets/drizzle.png";
                break;
            case 'Snow':
                weatherIcon.src = "Assets/snow.png";
                break;
            case 'Mist':
                weatherIcon.src = "Assets/fog.png";
                break;
            default:
                weatherIcon.src = "Assets/warning.png";
                city.textContent = "City not found";
            
        }
    
        weather.style.display = 'block'
        error.style.display = 'none'
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



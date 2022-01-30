const body = document.querySelector('body');

class UI{
    constructor() {
        this.location = document.querySelector('.location')
        this.mainDesc = document.querySelector('.mainDesc');
        this.subDesc = document.querySelector('.subDesc');
        this.details = document.querySelector('.details')
        this.icon = document.querySelector('.icon')
        this.humidity = document.querySelector('.humidity')
        this.feelsLike = document.querySelector('.feels_like')
        this.wind = document.querySelector('.wind')
        this.pressure = document.querySelector('.pressure')
    }

    renderData(weather) {
        this.location.textContent = weather.name;
        this.mainDesc.textContent = weather.weather[0].main;
        this.subDesc.textContent =  weather.weather[0].description;
        
        if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
            this.icon.setAttribute('src', './img/thunder.svg');
            document.body.style.backgroundImage = "url('./img/bg-thunder.jpg')";
            
        }
        else if (weather.weather[0].id >= 300 && weather.weather[0].id <= 321) {
            this.icon.setAttribute('src', './img/drizzle.svg');
            document.body.style.backgroundImage = "url('./img/bg-drizzle.jpg')";
        }
        else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
            this.icon.setAttribute('src', './img/rain.svg');
            document.body.style.backgroundImage = "url('./img/bg-rain.jpg')";
        }
        else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
            this.icon.setAttribute('src', './img/snow.svg');
            document.body.style.backgroundImage = "url('./img/bg-snow.jpg')";
        }
        else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
            this.icon.setAttribute('src', './img/weather.svg');
            document.body.style.backgroundImage = "url('./img/bg-weather.jpg')";
        }
        
        else if (weather.weather[0].id >= 800 && weather.weather[0].id <= 804) {
            this.icon.setAttribute('src', './img/clouds.svg');
            document.body.style.backgroundImage = "url('./img/bg-cloudy.jpg')";

        }

        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.pressure.textContent = `Pressure: ${weather.main.temp}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`
    }
}

const cityName = document.querySelector('.search-box');

const ui = new UI();
let weather = new Weather('Manila');
// weather.getWeather();
//whereAmI();



const getWeatherData = async function () {
    const data = await weather.getWeather();

    console.log(data);
    ui.renderData(data);        
}


getWeatherData();


document.querySelector('.form').addEventListener('submit', function () {
    weather = new Weather(cityName.value);
    getWeatherData();
})
const cityName = document.querySelector('.search-box');
const ui = new UI();
let weather = new Weather('Manila');
// weather.getWeather();
//whereAmI();



const getWeatherData = async function () {
    try{
    const data = await weather.getWeather();

    console.log(data);
    ui.renderData(data);      
    }  
    catch(err){
        alert(err.message);
    }
}


getWeatherData();


document.querySelector('.form').addEventListener('submit', function () {
    weather = new Weather(cityName.value);
    getWeatherData();
})








//convert from K to F
const convertKtoF = function(tempK){
 let tempF = (tempK-273.15) * 1.8 + 32;
 return tempF;
}

//convert from K to C
const convertKtoC = function(tempK){
 let tempC= tempK-273.15
 return tempC;
}

celsius.addEventListener('click', function(){
    tempUnit = 'Celsius';
    getWeatherData();
})


fahrenheit.addEventListener('click', function(){
    tempUnit = 'Fahrenheit';
    getWeatherData();
    
})
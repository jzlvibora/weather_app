class Weather{
    constructor(city) {
        this.apiKey = 'be7a41513c71ae33e3e758b51675b209';
        this.city = city;
        this.defaultCity = 'Manila';
        
    }

    //Fetch weather from API
    async getWeather() {
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        //console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
    catch(err){
        alert(err.message);
    }
}
}

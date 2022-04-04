class Weather {
    constructor (lat, lon) {
        this.apiKey = '1fedc9db6bebab6e68fb6e0344c4b47e';
        this.lat = lat;
        this.lon = lon;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Mudar localização
    changeLocation(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
}


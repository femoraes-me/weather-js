// Instanciando objeto weather
const weather = new Weather('-23.3712', '-45.2446')

weather.getWeather()
    .then(results => {console.log(results)})
    .catch(err => {console.log(err)});
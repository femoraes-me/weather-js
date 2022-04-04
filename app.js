// Instanciando objeto weather
const weather = new Weather( '-23.3712', '-45.2446')

// Pegar clima ao carregar DOM
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('', '');

function getWeather() {
    weather.getWeather()
        .then(results => {console.log(results)})
        .catch(err => {console.log(err)});
}


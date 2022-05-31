// Instanciando objeto weather
const weather = new Weather('Boston', 'MA');

// Instanciando objeto UI
const ui = new UI();

// Pegar clima ao carregar DOM
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('', '');

function getWeather() {
    weather.getWeather()
        .then(results => {ui.paint(results)})
        .catch(err => {console.log(err)});
}


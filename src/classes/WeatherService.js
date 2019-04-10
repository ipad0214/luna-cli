import axios from 'axios'

let apiKey = "66f009f9189dc9da9b868c4c0c51a7d9";


export function getWeatherDataFromLocation(lat, lon, callback) {
    let url = "https://api.openweathermap.org/data/2.5/weather?lat={0}&lon={1}&units=metric&appid={2}"
    axios.get(url.format(lat, lon, apiKey)).then((response) => {
        console.log(response);
        response.data.main.iconUrl = "http://openweathermap.org/img/w/{0}.png".format(response.data.weather[0].icon);
        callback(response.data);
    });
}

export function getWeatherForecastHourlyFromLocation(lat, lon, callback) {
    let url = "https://api.openweathermap.org/data/2.5/forecast/hourly?lat={0}&lon={1}&units=metric&appid={2}"
    axios.get(url.format(lat, lon, apiKey)).then((response) => {
        console.log(response);
        callback(response.data);
    });
}

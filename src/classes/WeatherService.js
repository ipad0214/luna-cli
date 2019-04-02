import axios from 'axios'

let apiKey = "66f009f9189dc9da9b868c4c0c51a7d9";
let url = "https://api.openweathermap.org/data/2.5/weather?lat={0}&lon={1}&units=metric&appid={2}"

export function getWeatherDataFromLocation(lat, lon, callback) {
    axios.get(url.format(lat, lon, apiKey)).then((response) => {
        callback(response.data);
    });
}

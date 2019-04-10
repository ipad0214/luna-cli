<template>
    <div class="weather-container">
        <h1>{{currentWeather.name}}</h1>

        <div class="section">
            <h3>Overview</h3>
            <div class="lane">
                <div class="lane-header">
                    Temperature
                </div>
                <div class="lane-value">
                    {{currentWeather.main.temp}} °C
                </div>
            </div>
            <div class="lane">
                <div class="lane-header">
                    Humidity
                </div>
                <div class="lane-value">
                    {{currentWeather.main.humidity}} %
                </div>
            </div>
            <div class="lane">
                <div class="lane-header">
                    Pressure
                </div>
                <div class="lane-value">
                    {{currentWeather.main.pressure}} hpa
                </div>
            </div>
            <img v-bind:src="currentWeather.main.iconUrl" />
            <!-- <span>{{currentWeather.weather[0].description}}</span> -->
            <div class="lane">
                <div class="lane-header">
                    Rain
                </div>
                <div class="lane-value" v-if="'rain' in currentWeather && '1h' in currentWeather.rain">
                    {{currentWeather.rain["1h"]}} mm
                </div>
            </div>
        </div>
        

        <div class="section">
            <h3>Wind</h3>
            <div class="lane">
                <div class="lane-header">
                    Speed
                </div>
                <div class="lane-value">
                    {{currentWeather.wind.speed}} m/s
                </div>
            </div>
            <div class="lane" v-if="currentWeather.wind.deg !== undefined">
                <div class="lane-header">
                    Direction
                </div>
                <div class="lane-value">
                    {{currentWeather.wind.deg}}°
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { getWeatherDataFromLocation, getWeatherForecastHourlyFromLocation } from '@/classes/WeatherService'

export default {
    name: 'weather',
    props: {
        
    },
    data: function() {
        return {
            currentWeather: {
                main: {
                    temp: 0
                },
                wind: {
                    speed: 0,
                    deg: 0,
                }
            },
            forcastWeather: {
                main: {
                    temp: 0
                },
                wind: {
                    speed: 0,
                    deg: 0,
                }
            },
        }
    },
    created: function () {
        let self = this;
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(function(pos) {
                let callback = (data) => {
                    console.log(data);
                    self.currentWeather = data;
                };

                let callbackForecast = (data) => {
                    console.log(data);
                   // self.currentWeather = data;
                };

                getWeatherDataFromLocation(pos.coords.latitude,pos.coords.longitude, callback); 
                getWeatherDataFromLocation(pos.coords.latitude,pos.coords.longitude, callbackForecast); 
                resolve(callback);
            }, function (error) {
                console.log(error);
            });
        })
    },
    methods: {
        
    },
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .weather-container  {
        width: 100%;
        height: 100%;
        background-color: red;
        color: white;

        .section {
            .lane {
                width: 15rem;
                display: flex;
                flex: row;
                justify-content: flex-end;

                .lane-header {
                    width: 8rem;
                } 

                .lane-value {
                    width: 7rem;
                }
            }
        }
    }
</style>

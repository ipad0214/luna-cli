<template>
    <div class="weather-container">
        weather {{temperature}} WIND AUS: {{wind.deg}}° GESCHWINDIGKEIT: {{wind.speed}} km\h
    </div>
</template>

<script>
import { getWeatherDataFromLocation } from '@/classes/WeatherService'

export default {
    name: 'weather',
    props: {
        
    },
    data: function() {
        return {
            temperature: 0,
            wind: {}
        }
    },
    mounted: function () {
        console.log(getWeatherDataFromLocation(12,45, (data) => {
            console.log(data);
            this.temperature = data.main.temp;
            this.wind = data.wind;
        }));
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
    }
</style>

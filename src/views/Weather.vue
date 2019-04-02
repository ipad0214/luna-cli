<template>
    <div class="weather-container">
        weather {{temperature}}
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
            temperature: 0
        }
    },
    mounted: function () {
        console.log(getWeatherDataFromLocation(12,45, (data) => {
            console.log(data);
            this.temperature = data.main.temp;
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

<template>
    <div class="map-container">
        <div id="map"></div>
    </div>
</template>

<script>
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

export default {
    name: 'maps',
    props: {
        
    },
    data: function() {
        return {

        }
    },
    mounted: function () {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 0
            })
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
            const coords = fromLonLat([pos.coords.longitude, pos.coords.latitude]);
            map.getView().animate({center: coords, zoom: 10});
        });
    },
    methods: {
        
    },
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .map-container  {
        width: 100%;
        height: 100%;
        background-color: red;
        color: white;

        #map {
            width: 100%;
            height: 100%;
        }
    }
</style>

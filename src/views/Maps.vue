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
            map: null
        }
    },
    mounted: function () {
        let self = this;
        let getGeoPromise = new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                const coords = fromLonLat([pos.coords.longitude, pos.coords.latitude]);
                const map = new Map({
                    target: 'map',
                    layers: [
                        new TileLayer({
                        source: new OSM()
                        })
                    ],
                    view: new View({
                        center: coords,
                        zoom: 17
                    })
                });
                resolve(map);
            });
        });

        getGeoPromise.then(function (fulfilled) {
            self.map = fulfilled;
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

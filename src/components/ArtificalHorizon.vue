<template>
    <div class="gyroscope-template">
        <div class="video-wrapper">
            <img :src="getImage('stall_indicator')" class="stall-indicator ah-position"/>
            <img :src="getImage('artifical_horzion')" class="artifical-horizon ah-position"/>
            <img :src="getImage('tilt_angle')" class="tilt-angle ah-position"/>
            <img :src="getImage('turn_indicator')" class="turn-indicator ah-position"/>
            <img :src="this.ip" class="video"/>
        </div>
    </div>
</template>

<script>
import * as connectionStatus from '@/classes/ConnectionStatus'

export default {
    name: 'artificalHorizon',
    props: {
        gyroscopeData: {
            pitch: 0,
            yaw: 0,
            roll: 0
        },
        websocketConnection: {
            ip: ''
        },
        name: '',
        connectionStatus: {}
    },
    data: function() {
        return {
            gyroscope: this.gyroscopeData,
            
        }
    },
    computed: {
        ip: function () {
            console.log("UPDATED");
            console.log(this.websocketConnection.connectionStatus);
            if (this.websocketConnection.connectionStatus === connectionStatus.ONLINE) {
                return "ws://" + this.websocketConnection.ip + ":50000";
            }
        }
    },
    methods: {
        getImage(image) {
            return '../img/' + image + '.svg';
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .gyroscope-template {
        max-width: 16rem;
        max-height: 9rem;

        .video-wrapper {
            min-width: 32rem;
            min-height: 9rem;
            position: relative;
            display:inline-block;
            overflow: hidden; 
            margin: 0;

            .ah-position {
                position: relative;
            }

            img {
                display: block;
                min-height: 100%;
                min-width: 100%;
                z-index: 100;
            }

            .video {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
            }

            .artifical-horizon {
                height: 3rem;
                top: 11.5rem;
            }

            .tilt-angle {
                height: 20rem;
            }

            .turn-indicator {
                height: 5rem;
                top: -13rem;
            }

            .stall-indicator {
                height: 2rem;
                top: 14rem;
            }
        }
    }
</style>

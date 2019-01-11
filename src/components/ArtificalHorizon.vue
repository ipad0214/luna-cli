<template>
    <div class="gyroscope-template">
        <h3>{{this.name}}</h3>
        <img :src="this.ip" />
    </div>
</template>

<script>
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
        name: ''
    },
    data: function() {
        return {
            gyroscope: this.gyroscopeData,
            ip: 'http://' + this.websocketConnection.ip + ':50000'
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .gyroscope-template {
        width: 20rem;
        height: 20rem;

        background-color: red;
    }
</style>

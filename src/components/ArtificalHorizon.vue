<template>
    <div class="gyroscope-template">
        <h3>{{this.name}}</h3>
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
        name: ''
    },
    data: function() {
        return {
            gyroscope: this.gyroscopeData,
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

<template>
    <div class="status-icons">
        <div class="icon" @click="goToBattery">
            <span class="battery-for">Drone</span>
            <font-awesome-icon v-if="status.droneBatterySOC >= 0.75" icon="battery-full" />
            <font-awesome-icon v-if="status.droneBatterySOC <= 0.75 && status.droneBatterySOC > 0.5" icon="battery-three-quarters" />
            <font-awesome-icon v-if="status.droneBatterySOC <= 0.5 && status.droneBatterySOC > 0.25" icon="battery-half" />
            <font-awesome-icon v-if="status.droneBatterySOC <= 0.25 && status.droneBatterySOC > 0.10" icon="battery-quarter" />
            <font-awesome-icon v-if="status.droneBatterySOC <= 0.10" icon="battery-empty" />
            <span class="battery-soc">{{status.droneBatterySOC * 100}}%</span>
        </div>
        <div class="icon" @click="goToBattery">
            <span class="battery-for">Remote</span>
            <font-awesome-icon v-if="status.remoteBatterySOC >= 0.75" icon="battery-full" />
            <font-awesome-icon v-if="status.remoteBatterySOC <= 0.75 && status.remoteBatterySOC > 0.5" icon="battery-three-quarters" />
            <font-awesome-icon v-if="status.remoteBatterySOC <= 0.5 && status.remoteBatterySOC > 0.25" icon="battery-half" />
            <font-awesome-icon v-if="status.remoteBatterySOC <= 0.25 && status.remoteBatterySOC > 0.10" icon="battery-quarter" />
            <font-awesome-icon v-if="status.remoteBatterySOC <= 0.10" icon="battery-empty" />
            <span class="battery-soc">{{status.remoteBatterySOC * 100}}%</span>
        </div>
        <div class="icon" @click="goToSettings">
            <font-awesome-icon icon="wifi" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'statusicons',
    props: {
        status
    },
    data: function() {
        return {
            
        }
    },
    methods: {
        goToBattery: function () {
            this.$router.push('battery');
        },
        goToSettings: function () {
            this.$router.push('settings');
        }
    },
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .status-icons  {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
   
        .icon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            cursor: pointer;
            height: 100%;
            width: 2rem;

            svg {
                width: 100%;
            }

            &:hover {
                background-color: $link-selected;
            }

            .battery-soc {
                font-size: 9px;
                height: 0;
            }

            .battery-for {
                font-size: 9px;
            }
        }
    }
</style>

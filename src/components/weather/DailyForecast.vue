<template>
    <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
    </div>
</template>

<script>
    import LineChart from '@/classes/charts/LineChart.js';

    export default {
        components: {
            LineChart
        },
        props: ['forecast'],
        data () {
            return {
                datacollection: null
            }
        },
        mounted () {
            this.fillData();
        },
        watch: {
            forecast (newData) {
                let today = new Date();
                let todayUpdates = newData.list.filter(elem => new Date(elem.dt*1000).getDate() === today.getDate());

                let wind = todayUpdates.map(elem => elem.wind);
                let speed = wind.map(elem => elem.speed);
                let times = todayUpdates.map(elem => new Date(elem.dt*1000).getHours() + ":00");

                if(wind.filter(elem => elem.speed > 5.0).length > 0) {
                    this.$store.commit('addNotification', {
                        type: 'warn',
                        group: 'standard',
                        title: "Wind is in dangerous area",
                        msg: "Wind is going to be in a dangerous mode at: ",
                        callback: () => {
                            this.$router.push('weather');
                        }
                    });
                }

                this.fillData(speed, times);
            }
        },
        methods: {
            fillData (data, time) {
                this.datacollection = {
                    labels: time,
                    datasets: [
                        {
                            label: 'Speed',
                            backgroundColor: '#359454',
                            borderColor: '#359454',
                            data: data,
                            fill: false,
                            pointRadios: 0.8
                        }
                    ]
                }

            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .small {
        width: 30rem;
    }
</style>
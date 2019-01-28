<template>
    <div class="notifactions">
        Hello world
    </div>
</template>

<script>

export default {
    name: 'notification',
    props: ['notifications'],
    data: function () {
        return {
            notificaions: this.notifications
        }
    },
    watch: {
        notifications: function () {
            console.log(this.notifications);
        }
    },
    mounted: function () {
        console.log(this.notificaions);
    }

}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .notifactions {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 20rem;
        background-color: red;
    }
</style>

<template>
    <div class="notifactions">
        Hello world
        <b-button @click="addNotification">
            add One Notification
        </b-button>
    </div>
</template>

<script>

export default {
    name: 'Notification',
    watch: {
        notifications: function (newValue) {
            console.log(newValue);
        }
    },
    methods: {
        addNotification: function () {
            this.$notifications.addNotification({
                title: 'test'
            })
        }
    },
    mounted: function () {
        console.log(this.$notifications);
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

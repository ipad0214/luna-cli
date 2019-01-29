<template>
    <div class="notifactions">
        Hello world
    </div>
</template>

<script>

export default {
    name: 'Notification',
    props: ['notificationModel'],
    watch: {
        notificationsModel: {
            handler(val, oldVal) {
                console.log("item changed");
                console.log(val);
            },
            deep: true
        }
    },
    mounted: function () {
        console.log(this.notificationModel.notifications);
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

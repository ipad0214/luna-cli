<template>
    <div>
        Hello world
    </div>
</template>

<script>

export default {
    name: 'notification',
    props: {
        notificationModel: {
            notifications: []
        }
    },
    data: {
        //notifications = this.notificationModel.notifications
    },
    watch: {
        notifications: function () {
            console.log(this.notifications);
        }
    }

}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

</style>

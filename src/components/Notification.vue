<template>
    <div class="notifactions">
        <span v-if="getWarningCount > 0">{{ getWarningCount }}</span>
        <span v-if="getNotifyCount > 0">{{ getNotifyCount }}</span>
        <span v-if="getErrorCount > 0">{{ getErrorCount }}</span>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Notification',
    computed: {
        notificationsCount() {
            return this.$store.getters.notificationsCount();
        },
        ...mapState(["notifications"]),
        ...mapGetters(["getErrorCount", "getNotifyCount", "getWarningCount", "getNotificationCount"])
    },
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .notifactions {
        position: absolute;
        text-align: center;
        top: 0px;
        right: 0px;
        min-width: 3rem;
        background-color: red;
    }
</style>

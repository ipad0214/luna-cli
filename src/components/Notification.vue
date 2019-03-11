<template>
    <div class="notifactions" @click="showNotificationList">
        <div class="notifactions-quickview">
            <span v-if="getWarningCount > 0">{{ getWarningCount }}</span>
            <span v-if="getNotifyCount > 0">{{ getNotifyCount }}</span>
            <span v-if="getErrorCount > 0">{{ getErrorCount }}</span>
        </div>
        <div>
        </div>
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
    methods: {
        showNotificationList() {
            console.log("show");
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .notifications {
        position: absolute;
        top: 0px;
        right: 0px;

        .notifactions-quickview {    
            text-align: center;
            min-width: 3rem;
            background-color: red;
        }
    }
    
</style>

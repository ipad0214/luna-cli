<template>
    <div class="notifactions">
        <span>{{ getWarningCount }}</span>
        <span>{{ getNotifyCount }}</span>
        <span>{{ getErrorCount }}</span>
        <b-button @click="addError">
            add Error
        </b-button>
        <b-button @click="addNotify">
            add Notify
        </b-button>
        <b-button @click="addWarning">
            add Warning
        </b-button>
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
        ...mapGetters(["getErrorCount", "getNotifyCount", "getWarningCount"])
    },
    methods: {
        addError: function () {
            this.$store.state.notifications.push({
                title: 'test',
                status: 'error'
            });
        },
        addWarning: function () {
            this.$store.state.notifications.push({
                title: 'test',
                status: 'warning'
            });
        },
        addNotify: function () {
            this.$store.state.notifications.push({
                title: 'test',
                status: 'notify'
            });
        },
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

<template>
    <div class="notifications-container" @click="toggleNotificationList">
        <div class="notifications-quickview-container">
            <div class="notifactions-quickview">
                <div class="warn" v-if="getWarningCount > 0">
                    <font-awesome-icon icon="exclamation-triangle"/><span>{{ getWarningCount }}</span>
                </div>
                <div class="notify" v-if="getNotifyCount > 0">
                    <font-awesome-icon icon="info" /><span>{{ getNotifyCount }}</span>
                </div>
                <div class="error-notify" v-if="getErrorCount > 0">
                    <font-awesome-icon icon="times-circle" /><span>{{ getErrorCount }}</span>
                </div>
            </div>
        </div>
        
        <!-- <div class="notifications-list slide-in" v-bind:class="{ show: showNotificationList }"> -->
        <div class="notifications-list" v-if="showNotificationList">
            <div class="notification-item" v-for="notification in notifications" :key="notification.id">
                {{notification.id}} // {{notification.title}} <font-awesome-icon icon="times" @click="notification.delete"/>
            </div>
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
        ...mapState({
            notifications: state => state.notifications
        }),
        // ...mapState(["notifications"]),
        ...mapGetters(["getErrorCount", "getNotifyCount", "getWarningCount", "getNotificationCount"])
    },
    methods: {
        toggleNotificationList() {
            if(this.getNotificationCount > 0) {
                this.showNotificationList = !this.showNotificationList;
            }
        }
    },
    data: () => {
        return {
            showNotificationList: false
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .notifications-container {
        width: 30rem;

        .notifications-quickview-container {
            display: flex; 
            flex-direction: row;
            justify-content: center;
            width: 100%;
            height: calc(3rem - 1px);

            .notifactions-quickview { 
                text-align: center;
                min-width: 3rem;
                display: flex;
                flex-direction: row;

                div {
                    padding-top: 0.7rem;
                    width: 3rem;
                }

                span {
                    margin-left: 0.3rem;
                }
            }
        }
        

        .notifications-list {
            height: 10rem;
            width: 30rem;
            background-color: red;

            .notification-item {
                width: 100%;
                height: 2rem;
            }
        }

        .slide-in {
            //display: none;
            opacity: 0;
            transition: all .75s ease;
        }

        .show {
            //display: block;
            height: 10rem;
            width: 30rem;
            opacity: 1;
        }
    }
    
</style>

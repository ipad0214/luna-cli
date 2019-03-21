<template>
    <div class="notifications-container" v-on:blur.native="closeNotificationList" v-on:focus.native="test">
        <div class="notifications-quickview-container" @click="toggleNotificationList">
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
        
        <div class="notifications-list slide-in" v-bind:class="{ show: showNotificationList }">
            <div class="notification-item" v-for="notification in notifications" :key="notification.id">
                <div>
                    <div @click="notification.callback" class="notification-icon">
                        <font-awesome-icon icon="exclamation-triangle" v-if="notification.type == 'warn'"/>
                        <font-awesome-icon icon="info" v-if="notification.type == 'notify'"/>
                        <font-awesome-icon icon="times-circle" v-if="notification.type == 'error'"/>
                    </div>
                    <div @click="notification.callback">
                        {{notification.title}}
                    </div>
                    <div class="close-icon" @click="notification.delete">
                        <font-awesome-icon icon="times"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Notification',
    computed: {
        ...mapGetters(["getErrorCount", "getNotifyCount", "getWarningCount", "getNotificationCount"]),
        notificationsCount() {
            return this.getErrorCount;
        },
        ...mapState({
            notifications: state => state.notifications
        })       
    },
    watch: {
        notificationsCount: function(val) {
            if(val === 0) {
                this.showNotificationList = false;
            }
        }
    },
    methods: {
        toggleNotificationList() {
            if(this.getNotificationCount > 0) {
                this.showNotificationList = !this.showNotificationList;
            }
        },
        closeNotificationList() {
            console.log("BLUR");
        },
        test() {
            console.log("focus!");
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
            height: 0.1rem;
            width: 30rem;
            position: relative;
            background-color: $background;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            box-shadow: 0px 8px 35px 10px rgba(112,112,112,0.35);

            .notification-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 2rem;
                border-bottom: 1px solid rgba(178, 178, 178, 0.2);

                &:hover{
                    background-color: $link-selected;
                }

                div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .close-icon {
                        &:hover {
                            color: red;
                        }

                        margin-right: .5rem;
                        margin-top: .2rem;

                        cursor: pointer;
                    }

                    .notification-icon {
                        margin-top: .2rem;
                        display: flex;
                        width: 2rem;
                        justify-content: center;
                        flex-direction: row;
                    }
                }
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

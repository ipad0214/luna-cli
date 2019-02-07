import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notifications: []
    },
    getters: {
        getNotificationCount: state => {
            return state.notifications.length;
        },
        getErrorCount: state => {
            return state.notifications.filter(item => item.status === "error").length;
        },
        getNotifyCount: state => {
            return state.notifications.filter(item => item.status === "notify").length;
        },
        getWarningCount: state => {
            return state.notifications.filter(item => item.status === "warning").length;
        }
    }
});
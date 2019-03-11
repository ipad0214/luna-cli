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
            return state.notifications.filter(item => item.status === "warn").length;
        }
    },
    mutations: {
        addNotification(state, payload) {
            state.notifications.push({
                title: payload.title,
                msg: payload.msg,
                status: payload.type,
                group: payload.group
            });

            Vue.notify({
                type: payload.type,
                group: payload.group,
                title: payload.title,
                text: payload.msg
            });
        }
    }
});
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
            return state.notifications.filter(item => item.type === "error").length;
        },
        getNotifyCount: state => {
            return state.notifications.filter(item => item.type === "notify").length;
        },
        getWarningCount: state => {
            return state.notifications.filter(item => item.type === "warn").length;
        }
    },
    mutations: {
        addNotification(state, payload) {
            state.notifications.push({
                title: payload.title,
                msg: payload.msg,
                type: payload.type,
                group: payload.group,
                id: this.getters.getNotificationCount + 1,
                delete: () => {
                    let index = state.notifications.map((item) => {
                        return item.id;
                    }).indexOf(id)
        
                    state.notifications.splice(index, 1);
                }
            });

            Vue.notify({
                type: payload.type,
                group: payload.group,
                title: payload.title,
                text: payload.msg
            });
        },
        deleteNotificationWithId(state, id) {
            let index = state.notifications.map((item) => {
                return item.id;
            }).indexOf(id)

            state.notifications.splice(index, 1);
        }
    }
});
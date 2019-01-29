import Vue from 'vue'

export default class NotificationModel {
    constructor() {
        this.notifications = new Array();
    }

    addNotification(notification, type='') {
        this.notifications.push(notification);
        let title = notification.title;
        let text = notification.text;
        let position = 'top right';
        let group = 'standard';
        Vue.notify({ title, text, position, type, group });
    }

    createSuccessNotification(notification) {
        this.addNotification(notification, 'success');
    }

    createWarningNotification(notification) {
        this.addNotification(notification, 'warning');
    }

    createErrorNotification(notification) {
        this.addNotification(notification, 'error');
    }

    deleteNotification() {

    }
}
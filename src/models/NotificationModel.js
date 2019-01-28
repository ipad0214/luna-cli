import Vue from 'vue'

export default class NotificationModel {
    constructor() {
        this.notifications = new Array();
    }

    addNotification(obj) {
        //obj.entryTime = new DateTime();
        this.notifications.push(obj);
    }

    _notificationsProcess() {

    }
}
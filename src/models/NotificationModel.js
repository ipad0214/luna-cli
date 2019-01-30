const notification = {
    install (Vue, options) {
        console.log("INSTALL");
        Vue.prototype.$notifications = {
            list: new Array(),
            addNotification: (notification) => {
                this.list.push(notification);
            }
        }
    }
}

export default notification
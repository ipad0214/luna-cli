<template>
  <div id="app">
    <StatusBar v-bind:status="this.$root.messageService.data.status"/>
    <div class="content">
      <NavBar />
      <router-view class="template-container"/>
      <notifications group="standard" position="bottom right"/>
    </div>
  </div>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import NavBar from '@/components/NavBar'
import WeatherService from '@/classes/WeatherService'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',  
  components: {
    StatusBar,
    NavBar
  },
  mounted: function () {
    window.changeRemoteBatterySOC = (value) => {
      this.$root.messageService.data.status.remoteBatterySOC = value/100;
    };

    const websocket = this.$root.websocketConnection;
    
    if(websocket.ip !== "" && websocket.port !== "" && websocket.autoReconnect === "true") {
      websocket.connect((connectionFailed) => {
        if(connectionFailed) {
          this.$store.commit('addNotification', {
            type: 'error',
            group: 'standard',
            title: "Websocket isn't connected", 
            msg: "Can't connect to server. Check if the server is available.",
            callback: () => {
                this.$router.push('settings');
            }
          });
        }
      });
    }

    window.addTestNotifaction = (type) => {
      this.$store.commit('addNotification', {
        type: type,
        group: 'standard',
        title: "test notification",
        msg: "this is a test",
        callback: () => {
          this.$router.push('settings');
        }
      });
    }
  }
}
</script>


<style lang="scss">
@import './assets/dimensions.scss';
@import './assets/colors.scss';
@import './assets/notifications.scss';

body, html {
  margin: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 100%;

  .content {
    height: calc(100% - #{$statusbar-height});
    width: 100%;
    display: flex; 
    flex-direction: row;

    .template-container {
      width: 100%;
      background-color: $background;
    }
  }
}
</style>

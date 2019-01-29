<template>
  <div id="app">
    <StatusBar />
    <div class="content">
      <NavBar />
      <router-view class="template-container"/>
      <notifications group="standard"/>
      <Notification v-bind:notificationModel="this.notificationModel"/>
    </div>
  </div>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import NavBar from '@/components/NavBar'
import Notification from '@/components/Notification'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  props: ['notificationModel'],
  components: {
    StatusBar,
    NavBar,
    Notification
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

<template>
  <div class="about">
    <h3>SETTINGS</h3>
    <span>IP: </span><input type="text" v-model="websocketService.ip" />
    <span>Port: </span><input type="text" v-model="websocketService.port" />
    <span>Auto reconnect: </span><input type="checkbox" v-model="websocketService.autoReconnect" />
    <input type="button" v-on:click="saveAndConnect" value="CLICK ME" />
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: ['websocketService'],
  methods: {
    saveAndConnect: function () {
      this.websocketService._onOpen();
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss">

</style>

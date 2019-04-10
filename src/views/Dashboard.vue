<template>
  <div>
      <div class="engines">
        <Engine v-bind:engineData="this.messageService.data.November" v-bind:messageService="this.messageService" name="November"/>
        <Engine v-bind:engineData="this.messageService.data.Echo" v-bind:messageService="this.messageService" name="Echo"/>
        <Engine v-bind:engineData="this.messageService.data.Sierra" v-bind:messageService="this.messageService" name="Sierra"/>
        <Engine v-bind:engineData="this.messageService.data.Whisky" v-bind:messageService="this.messageService" name="Whisky"/>
        <b-button :size="'small'" :variant="'primary'" @click="startAllEngines" v-if="allEnginesOff">
          Start <br />
          all Engines
        </b-button>
        <b-button :size="'small'" :variant="'primary'" @click="shutdownAllEngines" v-show="!allEnginesOff">
          Shutdown <br />
          all Engines
        </b-button>
      </div>
    <div class="horizon">
        <ArtificalHorizon v-bind:gyroscopeData="this.messageService.Gyroscope" v-bind:websocketConnection="this.messageService.websocket" name="Gyro" />
    </div>
  </div>
</template>

<script>
import Engine from '@/components/Engine'
import ArtificalHorizon from '@/components/ArtificalHorizon'

export default {
  name: 'Dashboard',
  props: ['messageService'],
  components: {
    Engine,
    ArtificalHorizon
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    startAllEngines: function () {
      this.messageService.data.November.Status = 1;
      this.messageService.data.Echo.Status = 1;
      this.messageService.data.Sierra.Status = 1;
      this.messageService.data.Whisky.Status = 1;

      this.messageService.update();
    }, 
    shutdownAllEngines: function () {
      this.messageService.data.November.Status = 0;
      this.messageService.data.Echo.Status = 0;
      this.messageService.data.Sierra.Status = 0;
      this.messageService.data.Whisky.Status = 0;

      this.messageService.update();
    }
  },
  computed: {
    allEnginesOff: function () {
      let data = this.messageService.data;
        return data.November.Status === 0 && data.Echo.Status === 0 && data.Sierra.Status === 0 && data.Whisky.Status === 0
    }
  }
}
</script>

<style lang="scss">
  .engines {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<template>
  <div>
      <div class="engines">
        <Engine v-bind:engineData="this.messageService.data.November" name="November"/>
        <Engine v-bind:engineData="this.messageService.data.Echo" name="Echo"/>
        <Engine v-bind:engineData="this.messageService.data.Sierra" name="Sierra"/>
        <Engine v-bind:engineData="this.messageService.data.Whisky" name="Whisky"/>
        <b-button :size="'small'" :variant="'primary'" @click="startAllEngines">
          Start all Engines
        </b-button>
      </div>
    <div class="horizon">
        <ArtificalHorizon v-bind:gyroscopeData="this.messageService.Gyroscope" name="Gyro" />
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
      this.messageService.data.November.status = 1;
      this.messageService.data.Echo.status = 1;
      this.messageService.data.Sierra.status = 1;
      this.messageService.data.Whisky.status = 1;

      this.messageService.send();
    }
  }
}
</script>

<style lang="scss">
  .engines {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

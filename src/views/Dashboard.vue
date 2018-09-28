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
  </div>
</template>

<script>
import Engine from '@/components/Engine'

export default {
  name: 'Dashboard',
  props: ['messageService'],
  components: {
    Engine
  },
  methods: {
    startAllEngines: function () {
      this.messageService.data.November.status = Math.floor(Math.random() * 4);
      this.messageService.data.Echo.status = Math.floor(Math.random() * 4);
      this.messageService.data.Sierra.status = Math.floor(Math.random() * 4);
      this.messageService.data.Whisky.status = Math.floor(Math.random() * 4);
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

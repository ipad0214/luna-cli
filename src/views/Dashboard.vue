<template>
  <div class="engines">
      <Engine v-bind:data="this.messageService.data.November" />
      <Engine v-bind:data="this.messageService.data.Echo" />
      <Engine v-bind:data="this.messageService.data.Sierra" />
      <Engine v-bind:data="this.messageService.data.Whisky" />
  </div>
</template>

<script>
import Engine from '@/components/Engine'

export default {
  name: 'Dashboard',
  props: ['messageService'],
  mounted: function () {
    this.messageService.data.November.name = "November";
    this.messageService.data.Echo.name = "Echo";
    this.messageService.data.Sierra.name = "Sierra";
    this.messageService.data.Whisky.name = "Whisky";
  },
  components: {
    Engine
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

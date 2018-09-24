<template>
  <div class="engines">
      <Engine v-bind:data="this.messageService.data.November" />
  </div>
</template>

<script>
import Engine from '@/components/Engine'

export default {
  name: 'Dashboard',
  props: ['messageService'],
  mounted: function () {
    console.log(this.messageService)
  },
  components: {
    Engine
  }
}
</script>

<style lang="scss">

</style>

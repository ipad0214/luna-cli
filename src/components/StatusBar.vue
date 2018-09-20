<template>
  <div class="statusbar">
    this is the statusbar
  </div>
</template>

<script>
export default {
  name: 'statusbar'
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

.statusbar {
    width: 100%;
    min-width: 100%;
    height: 3rem;

    color: $font-color;
    background-color: $background;
}
</style>

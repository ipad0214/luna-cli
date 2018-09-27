<template>
  <div class="statusbar">
    <div class="logo"></div>
    <div class="statusbar-content">LUNA</div>
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
    display: flex; 
    flex-direction: row;

    .logo {
      width: 5rem;
      height: 100%;
    }

    .statusbar-content {
      min-width: calc(100%-5rem);
      border-bottom: 1px solid black;
      height: 100%;
      flex-grow: 1;
    }
}
</style>

<template>
  <div class="statusbar">
    <div class="logo"></div>
    <div class="statusbar-content">
      <span>LUNA</span>
      <Notification />
      <div>Statusicons</div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification'

export default {
  name: 'statusbar',
  components: {
    Notification
  }
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-width: calc(100%-5rem);
      border-bottom: 1px solid black;
      height: 100%;
      flex-grow: 1;
    }
}
</style>

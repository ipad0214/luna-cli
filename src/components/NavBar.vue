<template>
    <div id="nav">
        <router-link class="nav-link" to="/">
          <font-awesome-icon icon="coffee" />
        </router-link>
        <router-link class="nav-link" to="/engines">
          <font-awesome-icon icon="oil-can" />
        </router-link>
        <router-link class="nav-link" to="/settings">
          <font-awesome-icon icon="cogs" />
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

#nav {
    display: flex; 
    flex-direction: column;
    width: 5rem;
    background-color: $background;
    height: 100%;
    min-height: 100%;
    
      a {
        height: 3rem; 
        width: 100%;
        font-weight: bold;
        color: $link;
        &.router-link-exact-active {
          color: $link;
          background-color: $link-selected-background;
        }
      }
    }
</style>

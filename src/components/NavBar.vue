<template>
    <div id="nav">
        <router-link class="nav-link" to="/">
          <font-awesome-icon icon="home" />
        </router-link>
        <router-link class="nav-link" to="/battery">
          <font-awesome-icon icon="battery-full" />
        </router-link>
        <router-link class="nav-link" to="/settings">
          <font-awesome-icon icon="cogs" />
        </router-link>
        <router-link class="nav-link" to="/weather">
          <font-awesome-icon icon="sun" />
        </router-link>
        <router-link class="nav-link" to="/maps">
          <font-awesome-icon icon="map-marked-alt" />
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
    border-right: 1px solid black;
    text-align: center;

    .nav-link {
      &:hover {
        background-color: $link-selected;
      }
    }
    
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

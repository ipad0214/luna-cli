<template>
    <div id="nav">
        <router-link class="nav-link" to="/">
          <font-awesome-icon icon="coffee" />
        </router-link>
        <router-link class="nav-link" to="/engines">Engine</router-link>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
#nav {
    display: flex; 
    flex-direction: column;
    width: 4rem;
    background-color: red;
    height: 100%;
    min-height: 100%;
    
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
</style>

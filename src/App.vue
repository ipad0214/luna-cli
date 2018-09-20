<template>
  <div id="app">
    <StatusBar />
    <div class="content">
      <NavBar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import StatusBar from '@/components/StatusBar'
import NavBar from '@/components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    StatusBar,
    NavBar
  }
}
</script>


<style lang="scss">
body {
  margin: 0;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .test {
    background-color: red;
  }

  .content {
    display: flex; 
    flex-direction: row;
  }
}
</style>

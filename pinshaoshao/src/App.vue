<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 平级组件中间的切换可以用， replace来替换原有的组件，this.$router.replace() 
// 跳转的可以用push this.$router.push()
import TabBar from "./components/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>

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

/* @media only screen and (max-width: 480px) {
    html {
        font-size:128px
    }
}

@media only screen and (max-width: 414px) {
    html {
        font-size:110.4px
    }
}

@media only screen and (max-width: 412px) {
    html {
        font-size:109.86667px
    }
}

@media only screen and (max-width: 400px) {
    html {
        font-size:106.66667px
    }
}

@media only screen and (max-width: 393px) {
    html {
        font-size:104.8px
    }
}

@media only screen and (max-width: 375px) {
    html {
        font-size:100px
    }
}

@media only screen and (max-width: 360px) {
    html {
        font-size:96px
    }
}

@media only screen and (max-width: 345px) {
    html {
        font-size:92px
    }
}

@media only screen and (max-width: 320px) {
    html {
        font-size:85.33333px
    }
}

html {
    -webkit-text-size-adjust: none;
    font-size: 26.66667vw
}

@media only screen and (min-width: 640px) {
    html {
        font-size:170.66667px
    }
} */

</style>

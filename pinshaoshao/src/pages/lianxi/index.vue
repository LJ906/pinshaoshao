<template>
  <div class="lianxi">
  <!-- 练习demo 组件 -->
   <router-view/>

  </div>
</template>

<script>
export default {
  name: "Lianxi", 

  mounted() {
    this.zuyongh()
  },
  methods : {
    zuyongh () {
      let str1 ='111'
      let str2="ab"
      let str3 = str1.padStart('10',str2)
      // console.log(str3); // abababa111    
      
    }
  }
};
</script>

<style scoped>

</style>

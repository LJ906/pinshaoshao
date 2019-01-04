<template>
  <div>bag</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }, 
  created () {
    console.log('alive bag', this.$route.meta.keepAlive)
  }
}
</script>

<style>

</style>

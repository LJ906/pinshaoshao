<template>
	<div class="me">
    <!-- v-if="userInfo.id" -->
    <div v-if="userInfo.id">       
      <me-top/>
    </div>
		<select-login v-else/>
	</div>
</template>

<script>
import SelectLogin from './../login/SelectLogin'
import meTop from './meTop'

import {mapState} from 'vuex'
export default {
  name: 'me',
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    SelectLogin,
    meTop
  }

}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    background #F5F5F5
    width 100%
    height 100%
</style>

<template>
  <div class="search-nav" >
    <div class="search-input" >
		<input type="text" @click="showSearchPanel(true)">
		<img class="search-nav-icon" src="../images/search.png" alt="">
		<span class="search-txt">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchNav',
  props:{
    showSearchPanel: Function
  },
  methods: {

  }

}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.search-nav
	position fixed !important
	top 0
	left 0
	z-index 998
	display flex
	width 100%
	height 1.333333rem
	background-color #fff
	justify-content center
	align-items center
	border-bottom-1px(#ccc)
	.search-input
		position relative
		width 90%
		height 70%
		border-radius .133333rem
		display flex
		justify-content center
		align-items center
    input 
		width 100%
		height 100%
		border-radius .133333rem
		background-color #eee   
    .search-nav-icon 
		position absolute
		left 3%
		top 25% 
		width .533333rem
		height .533333rem
    .search-txt 
		position absolute
		left 10%
		top 25% 
		font-size .373333rem
		color #ccc



</style>

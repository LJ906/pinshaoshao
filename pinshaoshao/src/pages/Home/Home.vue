<template>
  <div class="home">
    <!-- 引入ly-tab  -->
    <div class="fix">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="headerChange" />
    </div>
    <!-- 子路由 -->
    <router-view></router-view>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedId: 0,
      items: [
        {label: '热门'},
        {label: '女装'},
        {label: '百货'},
        {label: '鞋包'},
        {label: '食品'},
        {label: '母婴'},
        {label: '内衣'},
        {label: '电器'},
        {label: '男装'}    
      ],
      options: {
        activeColor: '#e9232e'  // 设置选中的颜色
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      // 二级路由路径
      subRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/bag', '/home/food', '/home/mbaby', '/home/under', '/home/ele','/home/man']
    }
  }, 
  methods: {
    headerChange (item, index ) {
      this.$router.replace(this.subRouteUrl[index])
    }
  },
  computed: {
    // getSelectedId () {
    //   const id =   this.subRouteUrl.findIndex((ele, i)=> {        
    //     return this.$route.path == ele
    //   })
    //   return id
    // }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding-top: 40px;
}
.fix {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 998;
}

</style>

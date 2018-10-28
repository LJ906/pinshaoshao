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
        {label: '热门', path: '/hot'},
        {label: '女装', path: '/dress'},
        {label: '百货', path: '/food'},
        {label: '鞋包', path: '/bag'},
        {label: '食品' , path: '/food'},
        {label: '母婴', path: '/mbaby'},
        {label: '内衣', path: '/under'},
        {label: '电器', path: '/ele'},
        {label: '男装', path: '/man'}    
      ],
      options: {
        activeColor: '#e9232e'  // 设置选中的颜色
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
    }
  }, 
  methods: {
    headerChange (item, index ) {
      this.$router.replace(`/home${item.path}`)
    }
  }
}
</script>

<style>
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

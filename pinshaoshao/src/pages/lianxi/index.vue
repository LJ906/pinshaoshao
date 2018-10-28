<template>
  <div class="lianxi">
    <!-- 动画的基本使用1 -->
    <!-- <button @click="show = !show">切换</button> -->
    <!-- <transition name="fade">
      <div class="box" v-if="show">撩课学院</div>
    </transition> -->

   <!-- 动画的基本使用2  进入和离开 的状态 -->

    <!-- <div>
        <label>歌手: <input type="text" v-model="singer"></label>
        <label>歌名: <input type="text" v-model="name"></label>
        <button @click="add()">添加</button>
    </div>
    <transition-group tag="ul"  name="singer">
      <li v-for="(item, index) in list" :key="index"  @click="del(index)">
        {{item.singer}}:  {{item.name}} 
      </li>
    </transition-group> -->

    <!-- 引入 animate.css 样例 -->
    <!-- <button @click="show = !show"> 切换</button>
    <transition 
    enter-active-class="swing" 
    leave-active-class="bounceOut"
    :duration="{enter: 500, leave: 600}">
      <img v-if="show" src="./images/brand1.png" alt="" class="animated">
    </transition> -->


    <!-- is属性 和component 实现切换tab栏功能 -->
    <!-- <button @click=" cpName='login' ">登录</button>
    <button @click=" cpName='register' ">注册</button>
    <component :is="cpName"></component> -->

<button @click="storeTest">点击改变值</button>
<hr>
count: <span>{{countFromStore}}</span>   |   
doneTodoCount: <span> {{doneTodoCount}}</span>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'Lianxi',
  data () {
    return {
      show: true, 
      singer: '',
      name: '',
      list: [
        {singer: '周杰伦', name: '东风破'},
        {singer: '谢霆锋', name: '因为爱, 所以爱'},
        {singer: '那英', name: '默'},
        {singer: '刘德华', name: '忘情水'},
      ], 
      cpName: 'login'
    }
  },
  methods: {
    del (index) {
      this.list.splice(index, 1)
    }, 
    add () {
      this.list.push({singer: this.singer, name: this.name})
    },
    // 调用store中的方法 
    storeTest () {
      this.$store.commit ('changCount')
    },
    ...mapMutations(['addItemToTodos'])

  }, 
  computed: {
    countFromStore () {
      return this.$store.state.count
    },
    doneTodoCount () {
      return this.$store.getters.doneTodos
    },
    getTodoById () {
      return this.$store.getters.getTodoById(2)
    }
  },
  components: {
    // 局部组件
    login: {
      name: 'login', 
      template: '<h2 style="background-color: red; width: 100px; height: 100px;">我要登录</h2>'
    }, 
    register: {
      name: 'register', 
      template: '<h2 style="background-color: green; width: 200px; height: 200px;">我要注册</h2>'
    }
  }
}
</script>

<style scoped>
.singer-enter-active {
  transition: all .3s ease;
}
.singer-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.singer-enter, .singer-leave-to {
  transform: translatey(10px);
  opacity: 0;
}
</style>

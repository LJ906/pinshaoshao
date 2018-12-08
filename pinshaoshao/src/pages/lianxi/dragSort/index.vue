<template>
  <div class="lianxi">
   <!-- 引入拖拽 --> 
    <draggable element="ul" v-model="imgList" class="drag" :move='allow' :options="dragOptions">
      <li v-for="(item, index) in imgList" :key="index">
        <div>{{item.type}}</div>
        <img :src="item.url" alt="">
      </li>
    </draggable>

    <div v-for ="(item, index) in imgList" :key="index">

      <span > {{index }}</span>
      <span>{{'id: ' + item.type}}</span>
    </div>


    <draggable class="drag2"  :options="dragOptions">
      <div v-for ="(item, index) in imgList" :key="index">
        <input type="text" v-model="item.type">
        <img :src="item.url" alt="">
      </div>
    </draggable>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Lianxi",
  data() {
    return {
      imgList: [
        {
          type: "1",
          url:
            "http://cdn.duitang.com/uploads/item/201408/28/20140828142218_PS4fi.thumb.700_0.png"
        },
                {
          type: "1",
          url:
            "http://cdn.duitang.com/uploads/item/201408/28/20140828142218_PS4fi.thumb.700_0.png"
        },
                {
          type: "1",
          url:
            "http://cdn.duitang.com/uploads/item/201408/28/20140828142218_PS4fi.thumb.700_0.png"
        },
        {
          type: "2",
          url:
            "http://imgsrc.baidu.com/forum/w%3D580/sign=b5de60dc8126cffc692abfba89004a7d/ea8dbe315c6034a85c44aec4c81349540823767c.jpg"
        },
        {
          type: "3",
          url:
            "http://img0.imgtn.bdimg.com/it/u=2050638809,3513718617&fm=27&gp=0.jpg"
        },
        {
          type: "4",
          url:
            "http://img2.imgtn.bdimg.com/it/u=1504788190,2342400802&fm=27&gp=0.jpg"
        }
      ],
      dragOptions: {
        ghostClass: "ghost",  // default: sortable-ghost
        chosenClass: 'choosen', // default: sortable-chosen
        forceFallback: false,
        scroll: true,  // boolean当排序的容器是个可滚动的区域，拖放可以引起区域滚动
        sort: true, 
        scrollSensitivity: 30, 
        // scrollSpeed:
      }
    };
  },
  methods: {
    allow() {
      console.log("move了", this.imgList);
    }
  },

  components: {
    // 局部组件
    draggable
  }
};
</script>

<style scoped>

.drag {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  cursor: pointer;
}

.drag li {
  /* flex: 1; */
  width: 25%;
}

.drag2 div {
  width: 50%;
}

.drag img, .drag2 img {
  max-width: 100%;
}
.choosen {
  border: 1px solid red;
  /* transform: translate(5px, 3px); */
}
.choosen .drag-handle {
 cursor: move !important;
}
               
.ghost {
  border: 1px solid red;
  background-color: #fcfcfc;
  opacity: .2;
  transform: none;
}
</style>

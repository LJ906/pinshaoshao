<template>

  <div class="photo-swiper">
    <ul class="ulList">
      <li 
      v-for="(ele, i) in ulList" 
      :key="i"
      @click="changeToBigImg(ulList , i, ele, $event)">
        <img :src="ele.big" class="bigImg" alt="">
        <img :src="ele.small"  class="smallImg" alt="">
      </li>
    </ul>


  <div class="center">
    按实际的福利卡接收到
    <span class="edit"></span>
  </div>


<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container list">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            
        </div>
        <!-- 默认不用改 -->
        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>
</div>
</template>

<script>

export default {

  name: 'pswp', 
  data () {
    return { 
      items: [
        // {
        //   src: 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
        //   w: 600,
        //   h: 400
        // },
       
      ],
      ulList: [
        {
          id: 1,
          small: 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
          big: 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
          info: {
            big_w: 300,
            big_h:200
          }
        },
        {
          id: 1,
          small: 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
          big: 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
          info: {
            big_w: 300,
            big_h:200
          }
        },
      ],
      currentIndex: 0
    }
  },
  mounted () {
    console.log(this.imgList);

  },
  methods: {
    // 初始化photoswiper
    init ( ) {
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var options = {
          index: this.currentIndex    // 切换到点击的图片index
      };

      // Initializes and opens PhotoSwipe
      var pswp = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.items, options);
      pswp.init();

      pswp.goTo(this.currentIndex);
    },
    changeToBigImg (ulList, i, ele,$event) {
      this.currentIndex = i;
      // console.log('event', $event);
      const bigImgSrc = ele.big;
      const smallImg = $event.target
      const bigImg = smallImg.previousElementSibling
  

      let tempArr = ulList.map((ele, i)=> {
        return {
          src: ele.big,
          w: ele.info.big_w,
          h: ele.info.big_h
        }
      })

      this.items = tempArr

      // 移动到 i的位置
      }

  },
  computed: {
    imgList () {
      
      

     return this.ulList.map((ele, i)=> {
        return {
          src: ele.big,
          w: ele.info.big_w,
          h: ele.info.big_h
        }
      })
 
    }
  },

  watch : {
    items: function () {      
      this.$nextTick (()=> {
        this.init()
      })
    }
  }
}
</script>

<style>
.bigImg {
  display: none;
}
img {
  max-width: 100%;
}
.img-item {
  flex: 1;
  /* width: 200px; */
}

.list, .ulList {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ulList li {
  width: 150px;
}

.center {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  line-height: 40px;
  padding-right: -40px
}
.edit {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  background-color: red;
}
</style>

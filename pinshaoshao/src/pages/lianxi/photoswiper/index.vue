<template>

<div class="photo-swiper">
  <ul class="ulList">
    <li 
    v-for="(ele, i) in ulList" 
    :key="i"
    @click="changeBig(ulList , i, ele, $event)">
      <img :src="ele.big" class="bigImg" alt="">
      <img :src="ele.small"  class="smallImg" alt="">
    </li>
  </ul>



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
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
       
      ],
      ulList: [
        {
          'small': 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
          'big': 'https://pic12.secooimg.com/res/commentImg/50/51/1Z8W03234c7a66680747c09591b023777c3886.jpeg'
        },
        // {
        //   'small': 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
        //   'big': 'https://pic12.secooimg.com/res/commentImg/50/51/1Z8W03234c7a66680747c09591b023777c3886.jpeg'
        // },
        // {
        //   'small': 'https://pic12.secooimg.com/res/content/10/10/1Z8Wfdfe35fcd4cfc04440b0495a949fe30168.jpg',
        //   'big': 'https://pic12.secooimg.com/res/commentImg/50/51/1Z8W03234c7a66680747c09591b023777c3886.jpeg'
        // },
         

      ],
      currentIndex: 0
    }
  },
  mounted () {

  },
  methods: {
    // 初始化photoswiper
    init (items, index) {
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var options = {
          index: index    // index 作为参数传进来
      };

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    },
    changeBig (  ulList, i, ele,$event) {
      this.currentIndex = i;
      console.log('event', $event);
      const bigImgSrc = ele.big;
      const smallImg = $event.target
      const bigImg = smallImg.previousElementSibling
      

      const w = $event.target.naturalWidth;
      const h = $event.target.naturalHeight;
        
      this.items.push({
        src: bigImgSrc,
        width: bigImg.naturalWidth,
        height: bigImg.naturalHeight
      })


    }

  },

  watch : {
    items: function () {
      console.log('变化',this.items);
      
      this.$nextTick (()=> {
        this.init(this.items, this.currentIndex)
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
</style>

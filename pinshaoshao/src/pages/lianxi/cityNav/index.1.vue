<template>
  <div class="city-nav">
    <div class="list-wrapper" ref="listWrapper">
        <div class="scroll-content">
            <div class="index-list-content">
                <!-- <div class="index-list-title">
                    定位城市: 北京
                </div> -->
                <ul>
                    <li ref="listWrapperItems">
                        <h2 class="index-list-anchor">
                            ★热门城市
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                北京市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                上海市
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            A
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                鞍山市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                安庆市
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            B
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                
                                北京市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                巴音郭楞州
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                博尔塔拉州
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            C
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                成都市
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            E
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                鄂尔多斯市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                鄂州市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                恩施州
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            F
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                福州市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                佛山市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                防城港市
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            G
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                广州市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                贵阳市
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            H
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                杭州市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                和田地区
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="index-list-anchor">
                            Z
                        </h2>
                        <ul>
                            <li class="index-list-item border-bottom-1px">
                                郑州市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                张家口市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                张家界市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                珠海市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                中山市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                自贡市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                资阳市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                枣庄市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                舟山
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                遵义市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                淄博市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                株洲市
                            </li>
                            <li class="index-list-item border-bottom-1px">
                                中卫市
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

  <div class="index-nav-list">
    <!-- <ul>
      <li class="active">★</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>Z</li>
    </ul> -->
  </div>

  <div class="mark">A</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'cityNav', 
    data () {
        return {

        }
    }, 
    mounted() {
        this.init_BScroll ()
    },
    methods: {

        init_BScroll () {

            var listWrapper = document.querySelector(".list-wrapper"); 
            var listWrapperItems = listWrapper.querySelectorAll(".scroll-content>.index-list-content>ul>li"); // 左边列表大
            // var indexNavList = document.querySelector(".index-nav-list"); 
            // var indexNavListUl = indexNavList.querySelector("ul");        // 字母导航ul
            // var indexNavListItems = indexNavListUl.children;              // 字母导航-字母
            // var indexNavListUlTop = indexNavListUl.offsetTop;             // 字母导航ul顶端的高度
            // var indexNavListItemHeight = indexNavListUl.children[0].offsetHeight;  // 每个字母的高度 
            var indexListContentItems = document.querySelectorAll(".index-list-content>ul>li");
            var mark = document.querySelector(".mark");
            console.log('listWrapperItems', this.$refs.listWrapperItems);
            console.log('indexListContentItems', indexListContentItems);
            
            let bScroll = new BScroll(this.$refs.listWrapper, {
                scrollY: true,
                click: true,
                // probeType: 3,
                // bounce: false
            })
            // 获取左边列表的长度，个数
            var len = listWrapperItems.length;

            // 滚动
            // bScroll.on("scroll", function(e){
            //     console.log('e', e);
                
            //     var y = -e.y; // 滚动的纵坐标 负的

            //     // 滚动的高度 >第一个列表的高度的时候 
            //     if (y < listWrapperItems[0].offsetTop) {
            //         setNav (0);
            //         return;
            //     }
            //     for (var i=0; i<len-1; i++) {
            //         if (y >= listWrapperItems[i].offsetTop && y < listWrapperItems[i+1].offsetTop) {
            //             setNav (i);
            //             return;
            //         }
            //     }
            //     setNav (len-1); // setNav 最后一个
            // });


	
            // indexNavListUl.addEventListener("touchstart", function(e){
            //     var touch = e.changedTouches[0]; 
            //     // setIndex (touch.clientY)
            // });
            
            // indexNavListUl.addEventListener("touchmove", function(e){
            //     var touch = e.changedTouches[0];
            //     // setIndex (touch.clientY)
            // });
            
            // indexNavListUl.addEventListener("touchend", function(){
            //     mark.style.opacity = "0";
            // })

          
        //     function setIndex (y) {
        //         var index = getIndex (y);
        //         if (index >=0 && index < len) {
        //             bScroll.scrollToElement(indexListContentItems[index],100);
        //             // setNav (index);
        //             // tabMark (index);
        //         }
        //     }
	
        // //获取索引
        //     function getIndex (y) {
        //         return parseInt((y - indexNavListUlTop) / indexNavListItemHeight);
        //     }
            
        //     function tabMark (index) {
        //         mark.style.opacity = "1";
        //         mark.innerHTML = indexNavListItems[index].innerHTML;
        //     }
            
        //     // 高亮li
        //     function setNav (index) {
        //         for (var i=0; i<indexNavListItems.length; i++) {
        //             indexNavListItems[i].classList.remove("active");
        //         }
        //         indexNavListItems[index].classList.add("active");
        //     }




        }

    }

};
</script>

<style scoped>
.list-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.index-nav-list {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  background-color: pink;
  pointer-events: auto;
}
.index-nav-list ul {
  margin: auto;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.index-nav-list li {
  width: 50px;
  text-align: center;
  font-size: 14px;
  color: #555;
  padding: 5px 0;
}
.index-nav-list li.active {
  color: red;
}

.index-list-content {
  background: #fff;
  border-radius: 2px;
}

.index-list-title {
  padding: 14px 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.index-list-anchor {
  padding: 16px 16px 10px 16px;
  line-height: 1;
  font-size: 14px;
  color: #999;
  background: #f7f7f7;
}

.index-list-item {
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
}
.index-list-item:last-child {
  border: none;
}
.index-list-item_active {
  background: #ddd;
}
.index-list-fixed {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 16px 10px 16px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1;
  color: #999;
  background: #f7f7f7;
}

.mark {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  font: 50px/100px "微软雅黑";
  text-align: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s;
  -webkit-transition: opacity 0.2s;
}
</style>

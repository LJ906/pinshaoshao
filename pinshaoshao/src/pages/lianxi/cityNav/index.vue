<template>
  <div class="city-nav">
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <li 
                v-for="(item, index) in list" 
                :key="index"
                :data-index="index"
                ref="listGroup">
                <h2 class="index-list-anchor">
                    {{item.title}}
                </h2>
                <ul>
                    <li class="index-list-item"
                        v-for="(subItem, i) in item.city" :key="i">
                        {{subItem}}
                    </li>
                </ul>
            </li>
        </ul>
      </div>


    <div class="index-nav-list">
        <ul>
            <li 
            v-for="(item, index) in shortcutList"
            :key="index"
            :data-index="index"
            @touchstart="onShortcutStart">{{item}}</li>
        </ul>
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
            list : [
                {
                    title: 'A',
                    city: ['★热门城市', '上海', '鄂州市']                  
                },
                {
                    title: 'B',
                    city: ['北京', '上海', '鄂州市']                  
                },
                {
                    title: 'C',
                    city: ['北京', '上海', '鄂州市']                  
                },
                {
                    title: 'D',
                    city: ['北京', '上海', '鄂州市']                  
                },
                {
                    title: 'E',
                    city: ['北京', '上海', '鄂州市']                  
                },
                {
                    title: 'F',
                    city: ['北京', '上海', '鄂州市']                  
                },
                {
                    title: 'F',
                    city: ['北京', '上海', '鄂州市']                  
                }
            ],
            shortcutList: [
                'A', 'B', 'C','D','E','F', 'G'
            ]
        }
    }, 
    mounted() {
        this._initSrcoll();
    },
    methods: {  
        _initSrcoll () {          
            // 初始化bscroll
            // let wrapper = document.querySelector('.wrapper')
            console.log('wrapper', this.$refs.wrapper);
            
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: 3, 
                click: true,
              
            }) 
            console.log('scroll', this.scroll);
        },
        onShortcutStart (e) {
            // let index = e.target.getAttribute('data-index')
            // // 使用 better-scroll 的 scrollToElement 方法实现跳转  
          
            // let templistGroup = document.getElementsByClassName('listGroup')                     
            // this.scroll.scrollToElement(this.$refs.listGroup[index])
            // console.log('this.scroll', this.scroll);        
        
            // // 记录一下点击时候的 Y坐标 和 index
            // let firstTouch = e.touches[0].pageY
            // // this.touch.y1 = firstTouch
            // this.touch.anchorIndex = index
        },
        
        onShortcutMove (e) {
            // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
            // let touchMove = e.touches[0].pageY
            // this.touch.y2 = touchMove
            
            // // 这里的 16.7 是索引元素的高度
            // let delta = Math.floor((this.touch.y2 - this.touch.y1) / 18)
        
            // // 计算最后的位置
            // // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
            // let index = this.touch.anchorIndex * 1 + delta
            // this.scroll.scrollToElement(this.$refs.listGroup[index])
        }
    }

};
</script>

<style scoped>
.wrapper {
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

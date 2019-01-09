<template>
  <div class="recommend-container" ref="wrapper">
      <!-- userInfo.id &&  -->
    <ul class="recommend content" v-if="recommendshoplist.length > 0">
      <shop-list
        tag="li"
        v-for="(item, index) in recommendshoplist"
        :item=item
        :key="index"
        :addToCart="handleAddToCart"
      />
    </ul>
    <!-- <select-login v-else/> -->
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {Indicator} from 'mint-ui'; // 页面加载图标
import BScroll from 'better-scroll';
import {Toast} from 'mint-ui';

import ShopList from '@/components/ShopList/ShopList';
import {addGoodsToCart} from '@/api/index';
import SelectLogin from './../Login/SelectLogin';

export default {
    name: 'recommend',
    data () {
        return {
            page: 1,
            count: 10, // 每页条数
        }
    },
    computed:{
        ...mapState(['recommendshoplist', 'userInfo'])
    },
    mounted() {   
        // 加载图标
        console.log('mounted')
        Indicator.open('正在加载数据...');
        this.$store.dispatch('reqRecommendShopList', {
            page: this.page,
            count: this.count,
            callback: () => {
                Indicator.close();                
                this.$nextTick(() => {  
                    this._initBScroll();           
                })      
            }
        })
    },
    watch: {
        recommendshoplist () {   
            this.page += 1;                      
            // this.$nextTick(() => {          
            //     this._initBScroll();                  
            // })            
        }
    },
    methods: {
        // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常。
        // dom加载完成后，初始化betterscrll. 用 watch监控list的变化
        // 初始化betterScroll
        _initBScroll() {
            if (!this.$refs.wrapper) return;
            // 1.1 初始化
            this.listScroll = new BScroll(this.$refs.wrapper, {
                scrollY: true,
                probeType: 3
            });

            // 1.2 监听滑动列表 touchEnd
            this.listScroll.on('touchEnd', (pos)=> {
                // 1.2.1 下拉刷新
                if (pos.y >= 50) {
                    console.log('下拉刷新');
                    // Indicator.open('正在刷新');                
                }
                
                // 1.2.2 上拉加载 |当前滑动距离| > |最大滑动值|
                if ( pos.y + 20 < this.listScroll.maxScrollY) {
                    console.log('page', this.page);                    
                    console.log('上拉加载更多');                 
                    Indicator.open('正在加载数据...');
                    this.$store.dispatch('reqRecommendShopList', {
                        page: this.page, 
                        count: this.count, 
                        callback: ()=>{
                            Indicator.close();
                        }
                    });  
                }                
            }) 
            // 1.3 监听scrollEnd的时候重新计算列表的高度。否则显示不全
            this.listScroll.on('scrollEnd', (pos)=> {     
                this.listScroll.refresh();
            })
        },
        // 加入购入车
        async handleAddToCart (goods) {  
            const {goods_id, goods_name, thumb_url, price} =  goods;
            const result = await addGoodsToCart ({
                user_id: this.userInfo.id, 
                goods_id, 
                goods_name, 
                thumb_url, 
                price            
            })
        
            if (result.success_code == 200) {
                Toast('加入购物车成功')
            }        
        }
    },
    components: {
        ShopList,
        SelectLogin
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus" >
  .recommend-container
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      padding-bottom 1.333333rem

</style>

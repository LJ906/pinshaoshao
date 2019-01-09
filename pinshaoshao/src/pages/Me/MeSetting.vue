<template>
  <div class="me-setting">
    <div> 
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"  :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-1" left-title="免拼单设置"  :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-2" left-title="消息接收设置" :clickCell="dealCellClick" />
    </div>

    <div style="margin-top: 10px"> 
      <me-common-cell left-icon="itlike-2" left-title="免密码支付" :clickCell="dealCellClick" />
      <me-common-cell left-icon="itlike-1" left-title="免拼单设置"  :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-2" left-title="消息接收设置" :clickCell="dealCellClick" />
    </div>
    <div style="margin-top: 10px"> 
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"  :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-1" left-title="免拼单设置"  :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-2" left-title="消息接收设置"  :clickCell="dealCellClick"/>
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
  </div>
</template>

<script>

import MeCommonCell from './MeCommonCell';
import {mapActions} from 'vuex';

import {Toast, MessageBox} from 'mint-ui';
export default {
  name: 'MeSetting',
  components: {
    MeCommonCell
  }, 
  methods: {
    ...mapActions(['logOut']),
    dealCellClick (leftTitle) {
      // Toast(`点击了${leftTitle}`) 
      Toast('点击了' + leftTitle) 
    },
    dealLogout () {
      MessageBox.confirm('您确定退出吗?').then(action => {
         let result = this.logOut({});
         console.log('result', result);
         this.$router.replace('/home');         
      })
    } 
  }



}
</script>

<style scoped>

.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .4rem;
  height: 1.173333rem;
  font-size: 0.6rem;
  background-color: #ccc;
  border-radius: .133333rem;
}
</style>

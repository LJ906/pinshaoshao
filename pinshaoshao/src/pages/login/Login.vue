<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/before_logo.jpg" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginMode}" @click="loginMode = true">短信登录</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="loginMode = false">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>

          <!--短信登录部分-->
          <div :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button 
                v-if="!countDown"
                class="get-verification"
                :class="{phone_right: phoneRight}" 
                @click="getVerifyCode()">获取验证码</button>
              <button 
                v-else
                disabled="disabled" 
                class="get-verification">已发送({{countDown}}s)</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>

          <!--账号登录部分-->
          <div :class="{current: !loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱" v-model="user_name" >
              </section>
              <section class="login-verification">
                <input :type="pwdMode ? 'text' : 'password' " v-model="pwd" maxlength="8" placeholder="密码8位">
								<div class="switch-show">
									<img 
										:class="{on: !pwdMode}" 
										src="./images/hide_pwd.png" 
										alt="" 
										width="20" 
										@click="pwdMode = !pwdMode">
									<img 
										:class="{on: pwdMode}" 
										src="./images/show_pwd.png" 
										alt="" width="20" 
										@click="pwdMode = !pwdMode">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img 
                  class="get_verification" 
                  :src="baseUrl + '/api/captcha' " 
                  alt="captcha">
                
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
import {getPhoneCode, phoneCodeLogin, pwdLogin} from '@/api'
 
import { mapActions } from 'vuex';
import {Toast} from 'mint-ui';

export default {
  name: 'login',
  data () {
    return {
      baseUrl: 'http://localhost:3000',
      loginMode: true, // 登录方式，true 验证码登录 false 账号登录
      phone: '', // 手机号码
      countDown: 0, // 倒计时
      code: '', // 验证码
      pwdMode: false, // 密码的显示方式 true明文， false 暗文
      pwd: '', // 密码
      user_name: '', // 用户名
      captcha: '',  // 图形验证码
      userInfo: {}, // 用户的信息
      timer: null
    }
  }, 
  computed: {
    // 验证手机号 11位
    phoneRight() {
      // return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
      return /^[1]\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 引入action中的方法 存储用户信息
    ...mapActions(['syncUserInfo']),
    // 1. 获取验证码
    async getVerifyCode () {   
      // 1.1 校验手机号  
      if (!this.phoneRight) {
        Toast('请输入正确的手机号');
        return
      }

      // 1.2开启倒计时      
      this.countDown  = 60

      this.timer = setInterval(()=> {
        this.countDown--
        if (this.countDown === 0) {
          clearInterval(this.timer)
        }
      }, 1000)     
    
      // 获取验证码 接口放回数组 result
      try {
        const result = await getPhoneCode ({phone: this.phone})
        console.log('短信验证码：' , result);        
        const {success_code, message} = result
        if (success_code && success_code == 200) {
            // this.code = message;
            // 暂存验证码
        } else {
          Toast({
            message: message,
            position: 'center',
            duration: 3000
          });
        }
        
      } catch (error) {
        Toast('短信验证码获取失败');
      }
      //  如果返回数据成功则 清除定时器, 倒计时数归0

      // clearInterval(this.timer);
      // this.countDown = 0;
    },

    
    // 密码的显示方式
    // dealPwdMode(flag) {
		// 	console.log('flag', !flag);			
    //   this.pwdMode = !flag;
    // },

    //  登录 (短信验证码登录  + 账号密码登录)
    async login () {
      // 短信验证码登录方式
      if (this.loginMode) {
        if (!this.phone) {
          Toast('请输入正确的手机号');
          return;
        } else if (!this.phoneRight) {
          Toast("请输入正确手机号码!");
          return;
        }
  
        if (!this.code) {
          Toast('请输入验证码');
          return;
        } else if (!(/^\d{6}$/gi.test(this.code))) {
          Toast("请输入正确的验证码!");
          return;
        }  
        // 发请求    
        const res = await phoneCodeLogin( {phone: this.phone, code: this.code})
        if (res.success_code === 200) {
          const {id, user_name, user_phone} = res.message
          // 记录用户信息
          this.userInfo = {id, user_name, user_phone}          
        } else {
          Toast (res.message)
        }
      } else {
				
				// 账号密码登录
 				if (!this.user_name) {
          Toast('请输入用户名/手机/邮箱!');
          return;
        } else if (!this.pwd) {
          Toast("请输入密码!");
          return;
        } else if (!this.captcha) {
					Toast("请输入验证码!");
					return;
				}

				// 用户名 和密码登录
				const res = await pwdLogin( {name: this.user_name, pwd: this.pwd, captcha: this.captcha})
        if (res.success_code === 200) {
          const {id, user_name, user_phone} = res.message
          // 记录用户信息
          console.log('登录成功');
          
          this.userInfo = {id, user_name, user_phone}          
        } else {
          Toast (res.message)
        }

        
      }
  
      // 6.  登录成功 后续处理，记录用户信息到store中
      if (this.userInfo.id) {
        // 登录完成后记录用户信息
        this.syncUserInfo(this.userInfo)
        // 返回主页面
        this.$router.replace('./me')
        // this.$router.back();
      } else {
        Toast(this.userInfo.message);        
      }
       
    }

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #fff
    .login-inner
      padding-top 1.6rem
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 1.066667rem
          font-weight bold
          color mediumpurple
          text-align center
        .login-header-title
          padding-top 1.066667rem
          padding-bottom .266667rem
          text-align center
          >a
            color #333
            font-size .373333rem
            padding-bottom .106667rem
            &:first-child
              margin-right 1.066667rem
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        >form
          >div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left .213333rem
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid mediumpurple
            .login-message
              position relative
              margin-top .426667rem
              height 1.28rem
              font-size .373333rem
              background #fff
              .get-verification
                position absolute
                top 50%
                right .266667rem
                transform translateY(-50%)
                border 0
                color #ccc
                font-size .373333rem
                background transparent
              .phone_right 
                color mediumpurple
            .login-verification
              position relative
              margin-top .426667rem
              height 1.28rem
              font-size .373333rem
              background #fff
              .switch-show
                position absolute
                right .266667rem
                top .32rem				
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top .32rem
              color #999
              font-size .32rem
              line-height .533333rem
              >a
                color mediumpurple
          .login-submit
            display block
            width 100%
            height 1.12rem
            margin-top 1.8rem
            border-radius .106667rem
            background mediumpurple
            color #fff
            text-align center
            font-size .426667rem
            line-height 1.12rem
            border 0
        .login-back
          display block
          width 100%
          height 1.12rem
          margin-top .4rem
          border-radius .106667rem
          background transparent
          border: 1px solid mediumpurple
          color mediumpurple
          text-align center
          font-size .426667rem
          line-height 1.12rem
</style>




<template>
  <div id="Login">
    <form class="input-container">
      <h3 class="input-title">{{title}}</h3>
      <div class="inputs">
        <div class="username">
          <label for="username">用户名：</label>
          <input id="username" v-model="users.username" type="text">
          <span class="icon">
            <i class="iconfont">&#xe61f;</i>
          </span>
        </div>
        <div class="password">
          <label for="password">密码：</label>
          <input id="password" v-model="users.password" type="password">
          <span class="icon">
            <i class="iconfont">&#xe621;</i>
          </span>
        </div>
        <div class="lookpwd">
          <Checkbox size="large" v-model="users.isOK">
            <span class="lookpwd-text">记住登录密码</span>
          </Checkbox>
          <span class="fr forget-pwd" @click="forgetPwd">忘记密码？</span>
        </div>
        <button class="btn" @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
import { msg, dailog } from "utils/js/utils";
import Cookies from "js-cookie";
import { Login } from "api";
export default {
  name: "login",
  data() {
    return {
      title: "ACBSP认证管理平台",
      users: {
        username: "",
        password: "",
        isOK: false
      }
    };
  },
  methods: {
    // 登录
    login(e) {
      e.preventDefault(); // 阻止默认事件
      if (this.users.username && this.users.password) {
        this.$post(Login, {
          account: this.users.username,
          password: this.users.password
        }).then(({ data }) => {
          console.log(data)
          localStorage.isLogin = true; // 设置登录状态
          localStorage.accessToken = data; // 设置token
          this.$router.push("/"); // 切换路由
          msg(this, "success", "登录成功!");
          // 判断是否☑️勾选了记住密码按钮 如果勾选了存密码
          if (this.users.isOK) {
            Cookies.set("username", this.users.username, { expires: 7 });
            Cookies.set("password", this.users.password, { expires: 7 });
          }
        })
        .catch(() => console.log("账号密码不正确"));
      } else {
        msg(this, "error", "请输入账号密码!");
      }
    },
    // 忘记密码
    forgetPwd() {
      dailog(this, "info", "找回密码", "请联系管理员 010-23042942找回密码");
    }
  },
  mounted() {
    // 获取cookie中的账号密码
    let userName = Cookies.get("username");
    let pwd = Cookies.get("password");

    // 判断如果cookie 有用户名或密码取出添加到input
    if (userName && pwd) {
      this.users.username = userName;
      this.users.password = pwd;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../utils/styl/mixin.styl'
#Login
  positCenter(0, 0, 0, 0, 0, 0)
  width 100%
  bgImg('../assets/login_bg.png', cover)
  .input-container
    width 600px
    height 481px
    positCenter(50%, 50%, auto, auto, -50%, -50%)
    background-color $white
    border-radius 4px
    h3
      margin 77px auto 43px
      color $btnColor
      font-size $font32
      text-align center
    .inputs
      box-sizing border-box
      padding 0 96px
      div
        width 100%
      .username, .password
        position relative
        label
          display block
          font-size $font16
        input
          display block
          width 100%
          height 40px
          border 1px solid $inputBorder
          font-size $font14
          border-radius 4px
          margin-top 5px
          box-sizing border-box
          padding 10px
          padding-right 50px
          &:focus
            background-color $inputBg
        .icon
          margin-top 10px
          positCenter(auto, 50%, auto, 20px, 0, -50%)
          i
            font-size $font20
            color $btnColor
      .password
        margin-top 15px
      .lookpwd
        margin-top 24px
        .lookpwd-text
          font-size $font16
          margin-left 12px
        .forget-pwd
          cursor pointer
          color $navActive
      .btn
        width 100%
        margin-top 27px
        background-color $btnColor
        font-size $font16
        color $white
        padding 11px 0
        border-radius 4px
        cursor pointer
</style>

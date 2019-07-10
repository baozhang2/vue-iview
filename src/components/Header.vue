<template>
  <header id="Header">
    <h1>{{title}}</h1>
    <div class="menu-icon" @click="sideBarShow">
      <i class="iconfont">&#xe61b;</i>
    </div>
    <!-- click触发下拉框 -->
    <Dropdown class="year" trigger="click" style="margin-left: 20px;" @on-click="getSelectVal">
      <a style="color:#fff !important;" href="javascript:void(0)">
        {{this.year}}
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem
          v-for="(item, index) in yearList"
          :name="`${item.name},${item.id}`"
          :key="index"
        >{{item.name}}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <!-- 导航 -->
    <ul class="nav-list">
      <li v-for="(item,index) in navList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <ul class="icon-nav">
      <li v-for="(item,index) in infoList" :key="index">
        <Badge :count="99" v-if="item.msg">
          <router-link :to="item.url">
            <span v-if="item.username">{{item.username}}</span>
            <i class="iconfont" v-html="item.icon"></i>
          </router-link>
        </Badge>
        <div v-if="item.qrcode" style="width:60px;line-height:44px">
          <i class="iconfont" v-html="item.icon"></i>
        </div>
        <router-link v-if="!item.msg && !item.username && !item.qrcode" :to="item.url">
          <span v-if="item.username">{{item.username}}</span>
          <i class="iconfont" v-html="item.icon"></i>
        </router-link>
        <div v-if="item.username" style="width:99px;">
          <!-- 这里是李萌操作的地方 -->
          <span v-if="item.username" style="padding-right:10px;line-height:48px">{{item.username}}</span>
              <i class="iconfont" v-html="item.icon"></i>
        </div>
      </li>
    </ul>
    <div class="dingwei">
       <Dropdown placement="bottom-end" trigger="click" @on-click="toUserInfo">
              <div style="height:34px;width:30px;"></div>
              <DropdownMenu slot="list" >
                  <DropdownItem name='userInfo'><Icon type="md-person"/><span> </span> 个人资料</DropdownItem>
                  <DropdownItem name='changePwd'><Icon type="md-unlock"/><span> </span> 修改密码</DropdownItem>
                  <DropdownItem name='logout'><Icon type="ios-arrow-back"/><span> </span> 退出登录</DropdownItem>
              </DropdownMenu>
          </Dropdown>
    </div>
    <div class="erweima">
       <Dropdown  trigger="click" placement= 'bottom-end'>
              <div style="height:46px;width:60px;"></div>
              <DropdownMenu slot="list" >
                  <div style="margin:20px;color:#9EAAC6;font-size:14px;width:174px;">
                    <p style="margin-bottom:6px">二维码</p>
                    <img width="42" height="42" src="../assets/login_bg.png"  alt="Smiley face">
                    <p style="margin-top:20px">外部链接</p>
                    <div style="margin-top:10px"><a href="">学校官网</a><a href="" style="margin-left:60px">问卷调查</a></div>
                  </div>
              </DropdownMenu>
          </Dropdown>
    </div>
    <delModal
            title="确定退出登录？"
            :content="content"
            @on-confirm="confirm"
            @on-close="close"
            @on-cancel="cancel"
            v-show="delModal"
        ></delModal>
      <changePwd
            :formItem='formItem'
            @on-confirm="confirm1"
            @on-close="close1"
            @on-cancel="cancel1"
            v-show="changePwdModal"
        ></changePwd>
  </header>
</template>

<script>
import { listCommonSchoolYear } from "api";
export default {
  name: "Headers",
  data() {
    return {
      title: "认证管理系统",
      formItem: {
        oldPwd: '',
        newPwd: '',
        confirmNewPwd: ''
      },
      changePwdModal: false,
      delModal:false,
      content:'退出登录后，你未保存的修改将不会被保留',
      year: "2016-2017学年",
      isSideBar: true,
      userInfoList: [
        {
          icon: 'md-person',
          info: '个人资料'
        },
        {
          icon: 'md-unlock',
          info: '修改密码'
        },
        {
          icon: 'ios-arrow-back',
          info: '退出登录'
        }
      ],
      navList: [
        {
          path: "/home",
          name: "个人面板"
        },
        {
          path: "/organization",
          name: "组织机构"
        },
        {
          path: "/achievements",
          name: "成果"
        },
        {
          path: "/certification",
          name: "认证"
        },
        {
          path: "/managementSettings",
          name: "管理设置"
        }
      ],
      infoList: [
        {
          icon: "&#xe614;",
          url: "/calendar"
        },
        {
          icon: "&#xe615;",
          url: "/b",
          qrcode: true
        },
        {
          icon: "&#xe619;",
          url: "/notice",
          msg: true
        },
        {
          icon: "&#xe61a;",
          url: "/d",
          username: "李萌"
        }
      ],
      yearList: []
    };
  },
  methods: {
    confirm() {
          this.delModal = false;
           this.$router.push('/login');
          sessionStorage.removeItem('accessToken')
          sessionStorage.removeItem('isLogin')
          console.log('11122');
      },
      // 点击关闭弹窗执行的操作
      close() {
          this.delModal = false;
      },
      // 点击取消删除执行的操作
      cancel() {
          this.delModal = false;
      },
      confirm1() {
          this.changePwdModal = false;
      },
      // 点击关闭弹窗执行的操作
      close1() {
          this.changePwdModal = false;
      },
      // 点击取消删除执行的操作
      cancel1() {
          this.changePwdModal = false;
      },
    sideBarShow() {
      this.isSideBar = !this.isSideBar;
      this.$store.commit("ISSHOWSIDEBAR", this.isSideBar);
    },
    getSelectVal(selData) {
      let [ name, id ] = selData.split(',');
      this.year = name;
    },
    toUserInfo (name) {
      switch (name) {
        case 'userInfo':
          this.$router.push('/userInfo')
          break;
        case 'changePwd':
          this.changePwdModal = true;
          // this.$router.push('/userInfo')
          break;
        case 'logout':
          this.delModal = true
      }
    }
  },
  mounted() {
    this.$post(listCommonSchoolYear).then(({ data }) => {
      this.yearList = data;
      this.year = data[0].name;
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../utils/styl/mixin.styl'
#Header
  height 48px
  width 100%
  background-color $btnColor
  display flex
  justify-content flex-start
  color $white
  position relative
  .erweima
    position absolute
    height 48px
    width 60px
    right 157px
    opacity: 1
    cursor:pointer
  .dingwei
    position absolute
    height 30px
    width 30px
    top:10px
    right 10px
    opacity: 1
    cursor:pointer
  h1
    padding 14px 27px
    padding-right 0
    font-size 20px
    font-weight bold
  .year
    padding 15px 20px 14px
  .menu-icon
    width 20px
    height 20px
    margin 15px
    cursor pointer
    margin-left 57px
  .nav-list
    margin 0 auto
    display flex
    justify-content space-around
    li
      text-align center
      a
        padding 15px 25px
        color $white
        display block
  .icon-nav
    display flex
    justify-content space-between
    li
      text-align center
      border-left 1px solid $borderColor
      a
        display block
        padding 14px 20px
        color $white
        span
          padding-right 10px
          color $white
</style>

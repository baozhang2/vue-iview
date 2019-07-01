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
        <router-link v-if="!item.msg" :to="item.url">
          <span v-if="item.username">{{item.username}}</span>
          <i class="iconfont" v-html="item.icon"></i>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { listCommonSchoolYear } from "api";
export default {
  name: "Headers",
  data() {
    return {
      title: "认证管理系统",
      year: "2016-2017学年",
      isSideBar: true,
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
          url: "/a"
        },
        {
          icon: "&#xe615;",
          url: "/b"
        },
        {
          icon: "&#xe619;",
          url: "/c",
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
    sideBarShow() {
      this.isSideBar = !this.isSideBar;
      this.$store.commit("ISSHOWSIDEBAR", this.isSideBar);
    },
    getSelectVal(selData) {
      let [ name, id ] = selData.split(',');
      this.year = name;
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

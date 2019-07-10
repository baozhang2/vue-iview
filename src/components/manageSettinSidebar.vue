<template>
  <div id="sidebar" :style="`transform:translateX(${sideBarShow ? 0 : - 179}px)`">
    <!-- 列表导航 -->
    <nav class="navs">
      <!-- 图标导航 -->
      <ul class="sideBar-icon">
        <li class="iconfont" v-for="(icon, index) in iconNav" :key="index">
          <router-link :to="icon.path" :style="`color:${icon.color};`" v-html="icon.icon"></router-link>
        </li>
      </ul>

      <!-- list导航 -->
      <ul class="nav-list">
        <li v-for="(item, index) in navItemList" :key="index">
          <Icon type="md-star" size="20" color="#AF4E96" />
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <!-- 成果菜单 -->
      <div class="result" v-if="isResult">成果菜单</div>
    </nav>
    <!-- 更新视图触发生命周期，别动 -->
    <span style="opacity:0">{{routerPath}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "sidebar",
  data() {
    return {
      theme2: "light",
      iconNav: [
        {
          icon: "&#xe616;",
          path: "/1",
          color: "#87B87F"
        },
        {
          icon: "&#xe618;",
          path: "/2",
          color: "#6FB3E0"
        },
        {
          icon: "&#xe617;",
          path: "/3",
          color: "#FFB752"
        },
        {
          icon: "&#xe61c;",
          path: "/4",
          color: "#D15B47"
        }
      ],
      collegeListsArr: [],
      isResult: false,
      navItemList: [
        {
          name: "组织管理",
          path: "/managementSettings/organizationManagement"
        },
        {
          name: "系统通知",
          path: "/managementSettings/systemNotification"
        },
        {
          name: "认证设置",
          path: "/managementSettings/authenticationSettings"
        },
        {
          name: "人员管理",
          path: "/managementSettings/personnelManagement"
        },
        {
          name: "权限管理",
          path: "/managementSettings/authorityManagement"
        },
        {
          name: "系统日志",
          path: "/managementSettings/systemLog"
        },
        {
          name: "系统设置",
          path: "/managementSettings/systemSettings"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      sideBarShow: "sideBarShow",
      routerPath: "routerPath"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../utils/styl/mixin';
@import '../utils/styl/replace';

#sidebar {
  width: 179px;
  positCenter(0, 48px, 0, auto, 0, 0);
  transition: 0.5s all;

  .navs {
    height: 100%;
    background-color: $sideBar;

    .nav-list {
      border-bottom: 1px solid $eee;

      li {
        box-sizing: border-box;
        padding: 0px 16px;
        line-height: 43px;
        border-top: 1px solid #eee;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        vertical-align: sub;

        a {
          color: #000;
          margin-left: 7px;
        }
      }
    }
  }

  .sideBar-icon {
    border-right: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    padding: 10px 12px 6px 28px;
    border-bottom: 1px solid $eee;

    li {
      font-size: 32px;
      margin: 0 1.5px;
    }
  }
}

// 字体图标星星
.ivu-icon-md-star {
  vertical-align: sub;
}
</style>

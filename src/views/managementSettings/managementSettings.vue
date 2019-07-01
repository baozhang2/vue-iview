<template>
<!-- 管理设置界面 -->
  <div id="managementSettings" :style="`margin-left:${ sideBarShow ? 179 : 0 }px`">
    <div class="TopNav">
       <TopNav :navItemArr="routerlisr"/>
    </div>
    <!-- 路由视图容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "components/TopNav";
import { mapGetters } from "vuex";
export default {
  name: "managementSettings",
  data() {
    return {
      routerlisr: [
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
    }
  },
  computed: {
    ...mapGetters({
      sideBarShow: "sideBarShow",
      breadcrumbList:"breadcrumbList"
    })
  },
  components: {
    TopNav
  }
};
</script>

<style lang="stylus" scoped>
@import '../../utils/styl/mixin'
#managementSettings
  transition 0.5s all
  .breadcrumb
    margin-top 20px
</style>

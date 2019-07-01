<template>
<!-- 认证界面 -->
  <div id="certification" :style="`margin-left:${ sideBarShow ? 179 : 0 }px`">
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
  name: "certification",
  data() {
    return {
      routerlisr: [
        {
          name: "认证进度",
          path: "/certification/outcome"
        },
         {
            name: "认证流程",
            path: "/certification/renzlc"
        },
        {
            name: "认证标准",
            path: "/certification/renzlc"
        },
        {
            name: "认证报告",
            path: "/certification/renzlc"
        },
        {
            name: "表格样本",
            path: "/certification/renzlc"
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
#certification
  transition 0.5s all
  .breadcrumb
    margin-top 20px
</style>

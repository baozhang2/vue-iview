<template>
<div class="professional">
  <div id="Organization" >
    <div class="TopNav">
      <TopNav :navItemArr="navItemArr"/>
      <!-- 面包屑 -->
      <div class="breadcrumb container">
      </div>
    </div>
    <!-- 路由视图容器 -->
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import TopNav from "components/TopNav";
export default {
  name: "Organization",
  data() {
    return {
      navItemArr: [
        {
          name: "基本描述",
          path: "/achievements/professional/desc"
        },
        {
          name: "学生列表",
          path: "/achievements/professional/stuList"
        },
        {
          name: "课程地图",
          path: "/achievements/professional/coursemap"
        },
        {
          name: "评价计划",
          path: "/achievements/professional/evaluateplan"
        },
        {
          name: "毕业要求达成度分析",
          path: "/achievements/professional/analy"
        },
        {
          name: "教学质量总结报告",
          path: "/achievements/professional/summaryreport"
        },
        {
          name: "改进计划",
          path: "/achievements/professional/changeplan"
        }
      ]
    };
  },
  components: {
    TopNav
  },
  computed: {
    ...mapGetters({
      sideBarShow: "sideBarShow",
      breadcrumbList:"breadcrumbList"
    })
  }
};
</script>
<style>
/* .professional #TopNav ul {
  padding:0 300px;
  justify-content:space-evenly
}
.professional #TopNav ul li{
} */
</style>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
#Organization
  transition 0.5s all
  .breadcrumb
    margin-top 20px
</style>

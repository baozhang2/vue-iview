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
          path: "/achievements/course/desc"
        },
        {
          name: "学生列表",
          path: "/achievements/course/stuList"
        },
        {
          name: "评价列表",
          path: "/achievements/course/evaluateList"
        },
        {
          name: "毕业要求达成度分析",
          path: "/achievements/course/analy"
        },
        {
          name: "总结",
          path: "/achievements/course/summaryreport"
        },
        {
          name: "改进计划",
          path: "/achievements/course/changeplan"
        },
        {
          name: "认知维度",
          path: "/achievements/course/Cognitive_dimension"
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

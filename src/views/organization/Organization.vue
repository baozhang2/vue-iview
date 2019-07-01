<template>
  <div id="Organization" :style="`margin-left:${ sideBarShow ? 179 : 0 }px`">
    <div class="TopNav">
      <TopNav :navItemArr="navItemArr"/>
      <!-- 面包屑 -->
      <div class="breadcrumb container">
        <Breadcrumb>
          <BreadcrumbItem v-for="(url, index) in breadcrumbList" :key="index" :to="url.path">{{url.title}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <!-- 路由视图容器 -->
    <router-view></router-view>
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
          name: "描述",
          path: "/organization/desc"
        },
        {
          name: "愿景",
          path: "/organization/vision"
        },
        {
          name: "使命",
          path: "/organization/shiming"
        },
        {
          name: "价值观",
          path: "/organization/jiazhiguan"
        },
        {
          name: "战略",
          path: "/organization/zhanlue"
        },
        {
          name: "社会责任",
          path: "/organization/shehuizeren"
        },
        {
          name: "社会影响力",
          path: "/organization/shehuiyingxiangli"
        },
        {
          name: "绩效指标",
          path: "/organization/jixiaozhibiao"
        },
        {
          name: "行政管理",
          path: "/organization/xingzhengguanli"
        },
        {
          name: "学生管理",
          path: "/organization/studentManage"
        },
        {
          name: "教职管理",
          path: "/organization/teacherManage"
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

<style lang="stylus" scoped>
@import '../../utils/styl/mixin'
#Organization
  transition 0.5s all
  .breadcrumb
    margin-top 20px
</style>

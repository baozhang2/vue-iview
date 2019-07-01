<template>
  <div id="achievements" :style="`margin-left:${ sideBarShow ? 179 : 0 }px`">
    <div class="TopNav">
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
export default {
  name: "achievements",
  data() {
    return {
      navItemArr: [
          {
            name: "商学院",
            path: "/achievements/outcome"
          }
      ]
    };
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
#achievements
  transition 0.5s all
  .breadcrumb
    margin-top 20px
</style>

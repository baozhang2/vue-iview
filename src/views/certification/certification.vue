<template>
  <!-- 认证界面 -->
  <div id="certification" :style="`margin-left:${ sideBarShow ? 179 : 0 }px`">
    <!-- 路由视图容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "certification",
  computed: {
    ...mapGetters({
      sideBarShow: "sideBarShow",
      breadcrumbList: "breadcrumbList"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../../utils/styl/mixin';

#certification {
  transition: 0.5s all;

  .breadcrumb {
    margin-top: 20px;
  }
}
</style>

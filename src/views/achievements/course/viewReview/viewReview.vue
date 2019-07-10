<template>
  <div id="vision" class="container">
    <!-- tab栏 -->
    <ul>
      <li v-for="(item, index) in viewReviewList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <!-- 三级路由展示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "scanJudge",
  data() {
    return {
      viewReviewList:[
        {
          name:'基础信息',
          path:'/achievements/professional/viewReview/baseInfo'
        },
        {
          name:'测验蓝图',
          path:'/achievements/professional/viewReview/testBluep'
        },
        {
          name:'评价成绩',
          path:'/achievements/professional/viewReview/EvaResult'
        },
        {
          name:'评价分析',
          path:'/achievements/professional/viewReview/EvaAnaly'
        }
      ]
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin'
#vision
  ul
    display flex
    justify-content flex-start
    border-bottom 1px solid $navCol
    padding-bottom 1px
    li
      width 88px
      line-height 30px
      text-align center
      cursor pointer
      a
        width 100%
        display block
        border-top-right-radius 20px
        border 1px solid $navCol
        color $navCol
        font-size $font14
  .router-link-exact-active
    background-color $navCol !important
    color $white !important
</style>

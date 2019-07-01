<template>
  <div id="vision" class="container">
    <!-- tab栏 -->
    <ul>
      <li v-for="(item, index) in visionList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <!-- 三级路由展示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "vision",
  data() {
    return {
      visionList:[
        {
          name:'战略',
          path:'/organization/zhanlue'
        },
        {
          name:'战略计划书',
          path:'/organization/zhanlue/minutes'
        },
        {
          name:'总结与改进',
          path:'/organization/zhanlue/Report'
        }
      ]
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
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

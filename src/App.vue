<template>
  <div id="app">
    <!-- 一级路由的容身之处 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to, from) {
      const routerData = to.matched
        .map(route => ({
          title: route.meta.title,
          path: route.path
        }))
        .splice(1);
        this.$store.dispatch('BREADCRUMBLIST', routerData)
    }
  }
};
</script>

<style lang="stylus">
@import './utils/styl/mixin.styl'
@import './utils/styl/replace.styl'
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow hidden
  color $fontColor
// 路由当前样式
#Header .router-link-exact-active, #Header .router-link-active
  background-color $navActive !important
  color $white !important
.router-link-active
  color $navActive !important
</style>

<template>
  <div id="index">
    <headers />
    <!-- 侧边栏 -->
    <SideBar v-if="isShow" />
    <manageSettinSidebar v-if="sidebarTemp" />
    <!-- 二级路由的容身之处 -->
    <router-view />
  </div>
</template>

<script>
import SideBar from "components/Sidebar";
import manageSettinSidebar from "components/manageSettinSidebar";
// 获取body元素
let body = document.getElementsByTagName("body")[0];
export default {
  name: "indexs",
  data() {
    return {
      isShow: false,
      sidebarTemp: false,
      routerData: ""
    };
  },
  watch: {
    // 根据路由判断侧边栏是否显示
    $route(to, from) {
      this.$store.commit("SETROUTERPATH", to.path);
      if (to.path == "/home") {
        this.isShow = false;
        this.sidebarTemp = false;
        body.style.backgroundColor = "#F5F8F5";
      } else if (to.path == "/managementSettings/organizationManagement") {
        this.isShow = false;
        this.sidebarTemp = true;
        body.style.backgroundColor = "#fff";
      } else {
        this.isShow = true;
        this.sidebarTemp = false;
        body.style.backgroundColor = "#fff";
      }
    }
  },
  components: {
    SideBar,
    manageSettinSidebar
  },
  mounted() {
    this.$store.commit("SETROUTERPATH", window.location.hash.substr(1));
    // 根据hash值 判断侧边栏是否显示
    window.location.hash == "#/home"
      ? (this.isShow = false)
      : (this.isShow = true);
    window.location.hash == "#/home"
      ? (body.style.backgroundColor = "#F5F8F5")
      : (body.style.backgroundColor = "#fff");
  }
};
</script>

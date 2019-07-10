<template>
  <div id="index">
    <headers />
    <!-- 侧边栏 -->
    <SideBar v-if="isShow" />
    <manageSettinSidebar v-if="manageTemp" />
    <certificationSidebar v-if="certificationTemp" />
    <achivementSidebar v-if="achivementTemp" />
    <!-- 二级路由的容身之处 -->
    <router-view />
  </div>
</template>

<script>
import SideBar from "components/Sidebar";
import manageSettinSidebar from "components/manageSettinSidebar";
import certificationSidebar from "components/certificationSidebar";
import achivementSidebar from "components/achivementSidebar";
// 获取body元素
let body = document.getElementsByTagName("body")[0];
export default {
  name: "indexs",
  data() {
    return {
      isShow: false,
      manageTemp: false,
      certificationTemp: false,
      achivementTemp: false,
      routerData: ""
    };
  },
  methods: {
    tempFn(crrePath) {
      if (crrePath == "/home") {
        this.isShow = this.manageTemp = this.certificationTemp = this.achivementTemp = false;
        body.style.backgroundColor = "#F5F8F5";
      } else if (crrePath.indexOf("/managementSettings/") !== -1) {
        this.isShow = this.certificationTemp = this.achivementTemp = false;
        this.manageTemp = true;
        body.style.backgroundColor = "#fff";
      } else if (crrePath.indexOf("/certification/") !== -1) {
        this.isShow = this.manageTemp = this.achivementTemp = false;
        this.certificationTemp = true;
        body.style.backgroundColor = "#fff";
      } else if (crrePath.indexOf("/achievements/") !== -1) {
        this.isShow = this.manageTemp = this.certificationTemp = false;
        this.achivementTemp = true;
        body.style.backgroundColor = "#fff";
      } else if (crrePath == "/notice"){
        this.isShow = this.manageTemp = this.certificationTemp = this.achivementTemp = false;
        body.style.backgroundColor = "#F5F8F5";
      } else if (crrePath.indexOf("/organization/") !== -1){
        this.isShow = true;
        this.manageTemp = this.certificationTemp = this.achivementTemp = false;
        body.style.backgroundColor = "#fff";
      } else {
        // this.isShow = true;
       this.isShow = this.manageTemp = this.certificationTemp = this.achivementTemp = false;
        body.style.backgroundColor = "#fff";
      }
    }
  },
  watch: {
    // 根据路由判断侧边栏是否显示
    $route(to, from) {
      this.$store.commit("SETROUTERPATH", to.path);
      this.tempFn(to.path);
    }
  },
  components: {
    SideBar,
    manageSettinSidebar,
    certificationSidebar,
    achivementSidebar
  },
  mounted() {
    this.$store.commit("SETROUTERPATH", window.location.hash.substr(1));
    // 根据hash值 判断侧边栏是否显示
    var crrePath = window.location.hash;
    if (crrePath.indexOf("#") !== -1) {
      crrePath = crrePath.substring(1, crrePath.length);
    }
    this.tempFn(crrePath);
  }
};
</script>

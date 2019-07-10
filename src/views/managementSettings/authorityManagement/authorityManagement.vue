<template>
  <!-- 权限管理界面 -->
  <div id="authenticationSettings">
    <div class="title">
      <div class="xysz wey" @click="scgl($event,'xysz wey')">人员管理</div>
      <div class="zysz wey" @click="scgl($event,'zysz wey')">角色管理</div>
    </div>
    <div v-if="type == 'xysz wey'">
      <presonManage></presonManage>
    </div>
    <div v-else-if="type == 'zysz wey'">
      <roleManage></roleManage>
    </div>
  </div>
</template>
<script>
import presonManage from "./presonManage";
import roleManage from "./roleManage";
export default {
  data() {
    return {
      cscolor: "xysz wey",
      type: "xysz wey"
    };
  },
  methods: {
    scgl(e, data) {
      if (data != this.cscolor) {
        document.getElementsByClassName(this.cscolor)[0].style.color =
          "#666666";
        e.target.style.color = "#3D568D";
        this.cscolor = e.target.className;
        this.type = data;
      }
    }
  },
  components: {
    presonManage,
    roleManage
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';

#authenticationSettings {
  width: 100%;

  .title {
    height: 48px;
    background: rgba(250, 250, 250, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);

    .wey {
      height: 48px;
      width: 140px;
      line-height: 48px;
      text-align: center;
      display: inline-block;
    }

    .xysz {
      margin-left: 50px;
    }
  }
}
</style>

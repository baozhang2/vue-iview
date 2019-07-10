<template>
  <!-- 认证设置界面 -->
  <div id="authenticationSettings">
    <div class="title">
      <div class="box">
        <div class="xysz wey" @click="scgl($event,'xysz wey')">学院设置</div>
        <div class="zysz wey" @click="scgl($event,'zysz wey')">专业设置</div>
        <div class="kcsz wey" @click="scgl($event,'kcsz wey')">课程设置</div>
        <div class="xqsz wey" @click="scgl($event,'xqsz wey')">学期设置</div>
        <div class="xnsz wey" @click="scgl($event,'xnsz wey')">学年设置</div>
      </div>
    </div>
    <div v-if="type == 'xysz wey'">
      <gas-Data></gas-Data>
    </div>
    <div v-else-if="type == 'zysz wey'">
      <pro-settings></pro-settings>
    </div>
    <div v-else-if="type == 'kcsz wey'">
      <courseSetting></courseSetting>
    </div>
    <div v-else-if="type == 'xqsz wey'">
      <semesterSetting></semesterSetting>
    </div>
    <div v-else-if="type == 'xnsz wey'">
      <schoolYearSetting></schoolYearSetting>
    </div>
  </div>
</template>
<script>
import GasData from "./gas/gasData";
import ProSettings from "./professionSettings/professionSettings";
import courseSetting from "./course/courseSetting";
import schoolYearSetting from "./schoolYear/schoolYearSetting";
import semesterSetting from "./semester/semesterSetting";
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
    GasData,
    ProSettings,
    courseSetting,
    schoolYearSetting,
    semesterSetting
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

    .xysz {
      color: #3D568D;
    }

    .box {
      height: 48px;
      width: 992px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .wey {
        cursor: pointer;
      }
    }
  }
}
</style>

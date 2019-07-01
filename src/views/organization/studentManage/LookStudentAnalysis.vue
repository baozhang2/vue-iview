<template>
  <div id="content" class="container">
    <div class="studentGradeScatter" ref="studentGradeOne"></div>
    <div class="studentGradeScatter" ref="studentGradeTwo"></div>
  </div>
</template>

<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  mounted() {
    this.$nextTick(e => {
      this.$echarts(this.$refs.studentGradeOne, studentGrade);
      this.$echarts(this.$refs.studentGradeTwo, studentGrade);
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';
</style>

<template>
  <div class="container">
    <div>查看学生分析</div>
    <div class="statistics">
      <div>
        总人数：
        <span>80</span>
      </div>
      <ul>
        <li>
          男生人数：
          <span>85</span>
        </li>
        <li>
          女生人数：
          <span>85</span>
        </li>
        <li>
          入学平均分：
          <span>85</span>
        </li>
        <li>
          男生平均分：
          <span>85</span>
        </li>
        <li>
          女生平均分：
          <span>85</span>
        </li>
      </ul>
    </div>
    <div class="stuFxPie" ref="stuFxPieOne"></div>
    <div class="stuFxPie" ref="stuFxPieTwo"></div>
    <div class="stuFxbar" ref="stuFxBar"></div>
  </div>
</template>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import { stuFxPie, stuFxBar } from "utils/js/echar_options";
export default {
  mounted() {
    this.$nextTick(e => {
      this.$echarts(this.$refs.stuFxPieOne, stuFxPie);
      this.$echarts(this.$refs.stuFxPieTwo, stuFxPie);
      this.$echarts(this.$refs.stuFxBar, stuFxBar);
    });
  }
};
</script>
<style lang="stylus" scoped>
.statistics {
  font-size: 14px;
  font-weight: 600;
  margin-top: 60px;

  div {
    display: inline-block;
    width: 20%;
    padding-left: 20px;
  }

  ul {
    display: inline-block;
    width: 80%;
    text-align: center;

    li {
      display: inline-block;
      width: 17%;
    }
  }
}

.stuFxPie {
  display: inline-block;
  width: 40%;
  height: 200px;
  margin: 10px 5% 0 5%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.stuFxbar {
  display: inline-block;
  width: 60%;
  height: 300px;
  margin: 10px 5% 50px 5%;
}
</style>

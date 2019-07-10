<template>
  <div id="EvaAnaly" class="container">
    <Row>
      <Col span="10">评价名称：计算机第一考试</Col>
      <Col span="14">课程：计算机测试</Col>
    </Row>
    <div class="cjfx">
      <p>成绩分析（经典测量法）</p>
      <Table :columns="columns" border :data="data" :show-header="false"></Table>
      <div class="pjfxBar" ref="pjfxBarOne"></div>
    </div>
    <div class="tiaoxin">
      <div class="shuzhi">
        <span>最小值：50%</span>
        <span>一般：60%</span>
        <span>良好：70%</span>
        <span>优秀：80%</span>
        <span>最大值：90%</span>
      </div>
      <ul>
        <li class="one" v-text="one"></li>
        <li class="two" v-text="two"></li>
        <li class="three" v-text="three"></li>
        <li class="four" v-text="four"></li>
      </ul>
      <div class="dibiao">
        <div class="sanjiao">及格</div>
        <div class="sanjiao">良</div>
        <div class="sanjiao">优</div>
      </div>
    </div>
    <div class="pre-and-bar">
      <Select v-model="modelSelect" style="width:200px" class="select">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Tabs value="name1">
        <TabPane label="树状图" name="name1">
          <div class="tu" ref="pjfxBarTwo"></div>
        </TabPane>
        <TabPane label="饼图" name="name2">
          <div class="tu" ref="pjfxPie"></div>
        </TabPane>
      </Tabs>
    </div>
    <div class="btn">
      <Button type="default" class="evaBtn">更新数据</Button>
      <Button type="default" class="evaBtn fabu">发布</Button>
      <!-- <button class="ivu-btn ivu-btn-Default"></button>
      <button class=""></button>-->
    </div>
  </div>
</template>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import { pjfxBarOne, pjfxBarTwo, pjfxPie } from "utils/js/echar_options";
export default {
  data() {
    return {
      columns: [
        {
          title: " ",
          key: "name",
          width: 100,
          fixed: "left"
        },
        {
          title: "总分",
          key: "f0"
        },
        {
          title: "平均分",
          key: "f1"
        },
        {
          title: "男生平均分",
          key: "f2"
        },
        {
          title: "女生平均分",
          key: "f3"
        },
        {
          title: "最高分",
          key: "f4"
        },
        {
          title: "最低分",
          key: "f5"
        },
        {
          title: "高分组最低分",
          key: "f6"
        },
        {
          title: "低分组最高分",
          key: "f7"
        },
        {
          title: "难度系数",
          key: "f8"
        },
        {
          title: "区分度",
          key: "f9"
        }
      ],
      data: [
        {
          name: "课程目标2",
          f0: 18,
          f1: 18,
          f2: 18,
          f3: 18,
          f4: 18,
          f5: 18,
          f6: 18,
          f7: 18,
          f8: 18,
          f9: 18
        },
        {
          name: "课程目标2",
          f0: 18,
          f1: 18,
          f2: 18,
          f3: 18,
          f4: 18,
          f5: 18,
          f6: 18,
          f7: 18,
          f8: 18,
          f9: 18
        },
        {
          name: "总分",
          f0: 18,
          f1: 18,
          f2: 18,
          f3: 18,
          f4: 18,
          f5: 18,
          f6: 18,
          f7: 18,
          f8: 18,
          f9: 18
        }
      ],
      cityList: [
        {
          value: "New York",
          label: "New York"
        }
      ],
      modelSelect: "",
      one: 10,
      two: 20,
      three: 3,
      four: 5
    };
  },
  methods: {
    setWidth() {
      let sum = this.one + this.two + this.three + this.four;
      document.getElementsByClassName("one")[0].style.width =
        (this.one / sum) * 932 + "px";
      document.getElementsByClassName("two")[0].style.width =
        (this.two / sum) * 932 + "px";
      document.getElementsByClassName("three")[0].style.width =
        (this.three / sum) * 932 + "px";
      document.getElementsByClassName("four")[0].style.width =
        (this.four / sum) * 932 + "px";
      document.getElementsByClassName("sanjiao")[0].style.marginLeft =
        (this.one / sum) * 932 - 25 + "px";
      document.getElementsByClassName("sanjiao")[1].style.marginLeft =
        (this.two / sum) * 932 - 50 + "px";
      document.getElementsByClassName("sanjiao")[2].style.marginLeft =
        (this.three / sum) * 932 - 50 + "px";
    }
  },
  mounted() {
    this.$nextTick(e => {
      this.$echarts(this.$refs.pjfxBarOne, pjfxBarOne);
      this.$echarts(this.$refs.pjfxBarTwo, pjfxBarTwo);
      this.$echarts(this.$refs.pjfxPie, pjfxPie);
    });
    this.setWidth();
    this.data.unshift({
      name: "",
      f0: "总分",
      f1: "平均分",
      f2: "男生平均分",
      f3: "女生平均分",
      f4: "最高分",
      f5: "最低分",
      f6: "高分组最低分",
      f7: "低分组最高分",
      f8: "难度系数",
      f9: "区分度"
    });
  }
};
</script>
<style  lang="stylus" scoped>
@import '../../../../utils/styl/mixin';

#EvaAnaly {
  padding: 0 30px;

  .cjfx {
    p {
      margin: 30px 0 10px 0;
    }

    .pjfxBar {
      width: 100%;
      height: 300px;
    }
  }

  .tiaoxin {
    width: 100%;

    ul {
      width: 100%;
      height: 30px;
      overflow: auto;

      li {
        float: left;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #FFF;
        width: 25%;
      }

      .one {
        background-color: #eb3223;
      }

      .two {
        background-color: #5cc84d;
      }

      .three {
        background-color: #001ac4;
      }

      .four {
        background-color: #cdca42;
      }
    }

    .shuzhi {
      margin: 30px 0 15px 0;

      span {
        margin-right: 40px;
      }
    }
  }

  .dibiao {
    width: 100%;

    .sanjiao {
      display: inline-block;
      height: 30px;
      width: 50px;
      background-color: red;
      text-align: center;
      line-height: 30px;
      color: #fff;
    }
  }

  .pre-and-bar {
    height: 400px;
    margin-top: 50px;

    .select {
      margin-bottom: 20px;
    }

    .tu {
      height: 300px;
    }
  }

  .btn {
    margin: 50px 0 100px 0;

    .evaBtn {
      width: 110px;
      height: 38px;
    }

    .fabu {
      background-color: #87B87F;
      color: #FFF;
      margin-left: 30px;
    }
  }
}
</style>

<template>
  <div class="container" id="baseInfo">
    <h4 class="title">2017年计算机考试</h4>
    <div class="xiahuaxian">
      <div class="title" style="width:123px;line-height:36px;height:36px">评价基本信息</div>
    </div>
    <div class="jibenxinxi">
      <div class="studentXinxi">
        <div class="label">
          学院：
          <span v-text="student.xueyuan"></span>
        </div>
        <div class="label">
          专业代码：
          <span v-text="student.code"></span>
        </div>
        <div class="label">
          简称：
          <span v-text="student.jiancheng"></span>
        </div>
        <div class="label">
          全称：
          <span v-text="student.quancheng"></span>
        </div>
        <div class="label">
          学科：
          <span v-text="student.xueke"></span>
        </div>
        <div class="label">
          负责人：
          <span v-text="student.chargeperson"></span>
        </div>
        <div class="label">
          学历：
          <span v-text="student.Education"></span>
        </div>
        <div class="label">
          培养方式：
          <span v-text="student.Full_time"></span>
        </div>
        <div class="label">
          学制：
          <span v-text="student.Educational_system"></span>
        </div>
        <div class="label">
          总学分：
          <span v-text="student.totalGrade"></span>
        </div>
      </div>
      <div class="explain">
        <span>说明:</span>
        <textarea class="intrdu" name="" id="" cols="30" rows="3" :placeholder="textarea"></textarea>
      </div>
    </div>
    <div class="xiahuaxian">
      <div class="title">负责人</div>
    </div>
    <span v-for="(item,key) in personList" :key="key" class="name">{{item}}</span>
  </div>
</template>
<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  data() {
    return {
      List: ["1.计算及学院专业", "2.自动化专业"],
      personList: ["李萌", "曾海博"],
      student: {
        xueyuan: "计算机学院",
        code: "11110",
        jiancheng: "计算机",
        quancheng: "计算机专业与应用",
        xueke: "工科",
        chargeperson: "李梦、张辰称",
        Education: "本科",
        Full_time: "全日制",
        Educational_system: "四年",
        totalGrade: "147"
      },
      textarea:'考查学生对于计算机原理的学的常所学生对于计算机原理的学的常所学生对于计算机原理的学的常所学生对于计算机原理的学的常所致学生对于计算机原理的学的常所',
      columns: [
        {
          title: "评价名称",
          align: "center",
          key: "number",
          width: 300
        },
        {
          title: "授课老师",
          align: "center",
          key: "xueyuan"
        },
        {
          title: "分数",
          align: "center",
          key: "zhuangye"
        },
        {
          title: "操作",
          width: 200,
          align: "center",
          render: function(h, params) {
            return h("span", {}, [
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "31px"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "查看详情"
              )
            ]);
          }
        }
      ],
      data: [
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程"
        },
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程"
        },
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程"
        },
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程"
        }
      ]
    };
  },
  mounted() {
    let topNav = document.getElementById('TopNav')
    topNav.children[0].style.width = '60%'
    topNav.children[0].style.justifyContent = 'space-between'
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin'
#baseInfo
  padding 40px 70px 200px
  h4
    font-size $font24
    font-weight bold
    color $titleCol
    line-height $font24
    margin-bottom 35px
    text-align center
  .xiahuaxian
    width: 100%;
    border-bottom: 1px solid $navCol;
    padding-bottom: 1px;
    .title
      width: 88px;
      height: 30px;
      line-height: 30px;
      background-color:rgba(136,171,218,1);
      border: 1px solid $navCol;
      color: #ffffff;
      text-align: center;
      font-size: $font14;
  .name
    display inline-block
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:15px;
    margin 24px 37px 0 0
  .jibenxinxi
    width: 100%;
    margin-bottom: 50px;
    .explain
      display flex
      vertical-align top
      margin-top 20px
      font-size $font14
      span
        font-size $font15
        margin-right 10px
      .intrdu
        width 85%
        word-break: break-all;
        background-color: #fafafa;
        box-sizing: border-box;
        padding: 15px 120px 15px 15px;
        line-height 24px;
        border: 1px solid #eee;
        border-radius: 4px;
        resize: none;
        outline: none;
    .studentXinxi
      display: inline-block;
      font-weight: bold;
      font-size: $font14;
      .label
        display: inline-block;
        width: 33%;
        height: 50px;
        line-height: 50px;
</style>

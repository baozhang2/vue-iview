<template>
  <div class="container" id="EvaResult">
    <div class="out_btn">
      <div class="btn">下载模版</div>
      <div class="btn">成绩导出</div>
      <div class="btn">成绩分析</div>
    </div>
    <div class="table">
      <Table :columns="columns1" :data="data1" border></Table>
      <div class="centers">
        <Page :total="50" show-total />
      </div>
    </div>
    <div class="xiahuaxian">
      <div class="title" style="width:123px;line-height:36px;height:36px">样本</div>
    </div>
    <div class="table">
      <i-table :columns="columns2" :data="data2" border></i-table>
    </div>
    <div class="xiahuaxian">
      <div class="title">总结</div>
    </div>
    <span class="context">{{context}}</span>
    <div class="word">2017计算机考试评估总结报告<i class="icon"></i> </div>
  </div>
</template>
<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  data() {
    let self = this;
    return {
      personList: ['Minimum：50%', 'Partially Met：60%', 'Met：70%', 'Exceed Met ：80%', 'Maximum：90%'],
      context: '考查学生对于计算机原理的学的常所学生对于计算机原理的学的常所学生对于计算机原理的学的常所学生对于计算机原理的学的常所致学生对于计算机原理的学的常所',
      columns1: [
        {
          title: "编号",
          align: "center",
          key: "number"
        },
        {
          title: "学院",
          align: "center",
          key: "xueyuan"
        },
        {
          title: "专业",
          align: "center",
          key: "zhuangye"
        },
        {
          title: "姓名",
          align: "center",
          key: "name"
        },
        {
          title: "性别",
          align: "center",
          key: "sex"
        },
        {
          title: "状态",
          align: "center",
          key: "state"
        },
        {
          title: "创建时间",
          align: "center",
          key: "create_date"
        },
        {
          title: "操作",
          width: 160,
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
                    click: () => {
                      self.$router.push({
                        path: "/achievements/professional/viewReview/gridList",
                        query: { id: params.row.id }
                      });
                    }
                  }
                },
                "查看成绩单"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程",
          name: "周青玲",
          sex: "女",
          state: "在学",
          create_date: "2019-09-09"
        },
        {
          number: 100021,
          xueyuan: "信工院",
          zhuangye: "软件工程",
          name: "周青玲",
          sex: "女",
          state: "在学",
          create_date: "2019-09-09"
        }
      ],
      columns2: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
    };
  },
  mounted() {},
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin'
#EvaResult
  padding 40px 70px 200px
  .out_btn
    display flex
    align-items center
    justify-content flex-end
    .btn
      text-align center
      cursor pointer
      margin-left 20px
      width:90px;
      line-height:30px;
      height 30px
      background:rgba(111,179,224,1);
      border-radius:4px;
      font-size $font14
      color #fff
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
  .context
    display inline-block
    width:659px;
    margin 20px 0 50px 22px
    line-height 18px;
    font-size $font14
    color:rgba(102,102,102,1)
  .word
    font-size:16px;
    font-weight:bold;
    color:rgba(61,86,141,1);
    .icon
      display inline-block
      width 12px
      height 12px
      cursor pointer
      bgImg('../../../../assets/img/download.png', cover)
      margin-left 26px
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
  .table
    margin 20px 0 50px
    .centers
      display: flex;
      justify-content: center;
      margin-top: 45px;
</style>

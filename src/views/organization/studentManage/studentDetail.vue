<template>
  <div id="content" class="container">
    <div class="xiahuaxian">
      <div class="title">基本信息</div>
    </div>
    <div class="jibenxinxi">
      <div class="studentXinxi">
        <div>
          <div class="label">
            姓名：
            <span v-text="student.name"></span>
          </div>
          <div class="label">
            学院：
            <span v-text="student.xueyuan"></span>
          </div>
          <div class="label">
            国籍：
            <span v-text="student.guoji"></span>
          </div>
        </div>
        <div>
          <div class="label">
            性别：
            <span v-text="student.sex"></span>
          </div>
          <div class="label">
            专业：
            <span v-text="student.zhuangye"></span>
          </div>
          <div class="label">
            省份：
            <span v-text="student.shengfen"></span>
          </div>
        </div>
        <div>
          <div class="label">
            出生年月：
            <span v-text="student.birthday"></span>
          </div>
          <div class="label">
            学号：
            <span v-text="student.xuehao"></span>
          </div>
          <div class="label">
            名族：
            <span v-text="student.mingzu"></span>
          </div>
        </div>
      </div>
      <div class="studentImg"></div>
    </div>
    <div class="xiahuaxian">
      <div class="title">学生成绩</div>
    </div>
    <div class="student-grade">
      <p class="grade-title">评价成绩</p>
      <Table :columns="columns" :data="data"></Table>
      <p class="grade-title">综合成绩</p>
      <div class="studentGradeScatter" ref="studentGradeOne"></div>
      <div class="studentGradeScatter" ref="studentGradeTwo"></div>
    </div>
  </div>
</template>

<script>
import "echarts/lib/chart/scatter";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import { studentGrade } from "utils/js/echar_options";
import { studentDetail } from "api";
export default {
  data() {
    return {
      student: {
        name: "zhangsan",
        xueyuan: "信工院",
        guoji: "中国",
        sex: "男",
        zhuangye: "软件工程",
        shengfen: "北京",
        birthday: "2019年6月",
        xuehao: "E1234567",
        mingzu: "汉"
      },
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
  methods: {
    getStuInfo(id) {
		debugger
      this.$post(studentDetail, { id: id }).then(result => {
        debugger;
      });
    }
  },
  mounted() {
	let id = this.$route.query.id;
	debugger
    this.getStuInfo(id);
    this.$nextTick(e => {
      this.$echarts(this.$refs.studentGradeOne, studentGrade);
      this.$echarts(this.$refs.studentGradeTwo, studentGrade);
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';

#content {
  .xiahuaxian {
    width: 100%;
    border-bottom: 1px solid $navCol;
    padding-bottom: 1px;

    .title {
      width: 88px;
      height: 30px;
      line-height: 30px;
      background-color: $navCol !important;
      border: 1px solid $navCol;
      color: #ffffff;
      text-align: center;
      font-size: $font14;
    }
  }

  .jibenxinxi {
    width: 100%;
    margin-bottom: 25px;

    .studentXinxi {
      display: inline-block;
      width: 80%;
      margin-left: 2%;
      font-weight: bold;
      font-size: $font14;

      .label {
        display: inline-block;
        width: 33%;
        height: 50px;
        line-height: 50px;
      }
    }

    .studentImg {
      display: inline-block;
      width: 130px;
      height: 130px;
      background-color: #dddddd;
    }
  }

  .student-grade {
    margin: 0 2%;

    .grade-title {
      height: 50px;
      line-height: 50px;
      margin-top: 10px;
      font-weight: bold;
      font-size: $font14;
    }

    .studentGradeScatter {
      width: 100%;
      height: 300px;
      margin: 20px 0 50px 0;
    }
  }
}
</style>

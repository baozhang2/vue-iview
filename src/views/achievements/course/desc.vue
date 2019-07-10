<template>
  <div id="content" class="container">
    <div class="xiahuaxian">
      <div class="title">基本描述</div>
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
    </div>
    <div class="xiahuaxian flex">
      <div class="title">培养方案</div>
      <div class="flex">
        <div class="button edit" @click="toEditdesc">编辑</div>
        <div class="button download">下载完整培养方案</div>
      </div>
    </div>
    <div class="student-grade">
      <div class="language">
        <div class="chinese">中文版</div>
        <div class="en">英文版</div>
      </div>
    </div>
    <div class="inner_contain">
      <div class="bot_line">
        <img class="icon" src="../../../assets/img/icon.png" />
        <span>专业简述</span>
      </div>
      <div class="intrdu">培养社会主义的计算机人才，又红又专</div>
      <div class="bot_line">
        <img class="icon" src="../../../assets/img/icon.png" />
        <span>培养目标</span>
      </div>
      <div v-for="(item,key) in List" :key="key" class="List">
        <div class="major">{{item}}</div>
        <div class="box">
          <div class="subject">
            <div class="issue">1.理解计算及的运行原理</div>
            <div class="report" @click="toviewReview">查看评价</div>
          </div>
          <div class="line1"></div>
          <div class="subject">
            <div class="issue">2.至少掌握一门编程技术</div>
            <div class="report" @click="toviewReview">查看评价</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  data() {
    return {
      List: ["1.计算及学院专业", "2.自动化专业"],
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
    toEditdesc() {
      this.$router.push("/achievements/professional/editdesc");
    },
    toviewReview() {
      this.$router.push("/achievements/professional/viewReview");
    }
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

  .flex {
    display: flex;
    justify-content: space-between;

    .button {
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      text-align: center;
      cursor: pointer;
    }

    .edit {
      width: 60px;
      background: rgba(209, 91, 71, 1);
      margin-right: 33px;
    }

    .download {
      width: 148px;
      background: rgba(135, 184, 127, 1);
    }
  }

  .jibenxinxi {
    width: 100%;
    margin-bottom: 50px;

    .studentXinxi {
      display: inline-block;
      // margin-left: 2%;
      font-weight: bold;
      font-size: $font14;

      .label {
        display: inline-block;
        width: 20%;
        height: 50px;
        line-height: 50px;
      }
    }
  }

  .student-grade {
    .language {
      margin: 30px 0 5px 0;
      display: flex;

      div {
        width: 88px;
        border-radius: 0px 20px 0px 0px;
        line-height: 36px;
        text-align: center;
        font-size: $font14;
        cursor: pointer;
        height: 36px;
      }

      .chinese {
        background: rgba(175, 78, 150, 1);
        margin-right: 2px;
        color: #fff;
      }

      .en {
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(158, 170, 198, 1);
        color: rgba(158, 170, 198, 1);
      }
    }

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

  .inner_contain {
    border: 1px solid rgba(238, 238, 238, 1);
    padding: 40px 21px 22px 24px;

    .bot_line {
      border-bottom: 1px solid rgba(203, 208, 221, 1);
      padding-bottom: 1px;
      margin-bottom: 15px;

      .icon {
        display: inline-block;
        width: 23px;
        height: 18px;
      }

      span {
        display: inline-block;
        margin-left: 5px;
        font-size: 18px;
        color: rgba(108, 131, 180, 1);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        line-height: 30px;
      }
    }

    .List {
      font-family: PingFangSC-Medium;
      font-weight: 500;

      .major {
        margin: 20px 0;
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 27px;
      }

      .box {
        width: 911px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(238, 238, 238, 1);
        padding: 10px 70px 10px 16px;

        .subject {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          line-height: 30px;

          .report {
            text-decoration: underline;
            color: rgba(108, 131, 180, 1);
            cursor: pointer;
            letter-spacing: 1px;
          }
        }

        .line1 {
          margin: 7px 0;
          height: 1px;
          background: rgba(238, 238, 238, 1);
        }
      }
    }

    .intrdu {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
      margin-bottom: 50px;
    }
  }
}
</style>

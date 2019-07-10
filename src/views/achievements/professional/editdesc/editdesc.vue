<template>
  <div id="content" class="container">
    <div class="student-grade">
    <div class="flex">
        <div class="language">
            <div class="chinese">中文版</div>
            <div class="en">英文版</div>
        </div>
        <div class="button download">上传完整培养方案</div>
    </div>
    </div>
    <div class="inner_contain">
      <div class="bot_line">
        <img class="icon" src='../../../../assets/img/icon.png' />
        <span>专业简述</span>
      </div>
      <i-form :model="formItem" :label-width="120">
      <Form-item label="中文简述：">
            <i-input :value.sync="formItem.input1" placeholder="掌握计算机的基本原理"></i-input>
      </Form-item>
      <Form-item label="英文简述：">
            <i-input :value.sync="formItem.input2" placeholder="Grasp the Basic Principles of Computer"></i-input>
      </Form-item>
      </i-form>
      <div class="bot_line">
        <img class="icon" src='../../../../assets/img/icon.png' />
        <span>培养目标</span>
        <div class="add" @click="addTrainObj">+ 添加</div>
      </div>
      <div v-for="(item,key) in List" :key="key" class="List">
        <div class="major">{{item}}
            <i class="edit" @click="modify"></i>
            <i class="addIcon" @click="addGraduate"></i>
                <i class="del" @click="delInfo"></i>
        </div>
        <div class="box">
          <div class="subject">
            <div class="issue">
                1.理解计算及的运行原理
            </div>
            <div  style="display:flex;">
                <div class="report mg_r">编辑</div>
                <div class="report" @click="delInfo">删除</div>
            </div>
          </div>
          <div class="line1"></div>
          <div class="subject">
            <div class="issue">2.至少掌握一门编程技术
            </div>
            <div  style="display:flex;">
                <div class="report mg_r">编辑</div>
                <div class="report" @click="delInfo">删除</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-desc">
        <Button type="success" ghost @click="cancelEdit">取消</Button>
        <Button type="success" class="submit" @click="submitDesc">保存</Button>
    </div>
    <delModal
            title="是否删除该数据？"
            :content="content"
            @on-confirm="confirm"
            @on-close="close"
            @on-cancel="cancel"
            v-show="delModal"
        ></delModal>
  </div>
</template>

<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  data() {
    return {
      List: ["1.计算及学院专业", "2.自动化专业"],
      formItem: {
                input1: '',
                input2: ''
      },
      delModal:false,
        content:'删除数据将无法恢复',
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
  mounted() {},
  methods: {
      addTrainObj () {
          this.$router.push({
            path:'/achievements/addTrainObj',
            query: {
              type:'add'
            }
          })
      },
      delInfo() {
          this.delModal = true;
          console.log('111');
      },
      // 点击确认删除执行的操作
      confirm() {
          this.delModal = false;
          console.log('111');
      },
      // 点击关闭弹窗执行的操作
      close() {
          this.delModal = false;
      },
      // 点击取消删除执行的操作
      cancel() {
          this.delModal = false;
      },
      cancelEdit () {},
      submitDesc () {},
      modify () {},
      addGraduate () {
        this.$router.push('/achievements/professional/addGraduate')
      }
  }
};
</script>
<style>
.inner_contain .ivu-form .ivu-form-item-label{
      font-size: 14px;
      text-align: center;
}
.inner_contain .ivu-input {
    width: 80%;
}
</style>

<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin';
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
      height 30px
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
    .flex {
        display flex
        justify-content space-between
        align-items center
        .language {
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
            border: 1px solid rgba(158, 170, 198, 1);
            color:rgba(153,153,153,1);
            margin-right: 2px;
        }

        .en {
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(158, 170, 198, 1);
            color:rgba(153,153,153,1);
        }
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
    padding: 40px 21px 100px 24px;

    .bot_line {
      border-bottom: 1px solid rgba(203, 208, 221, 1);
      padding-bottom: 1px;
      margin-bottom: 15px;
      overflow hidden
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
      .add {
            width:60px;
            background:rgba(243,152,0,1);
            border-radius:4px;
            font-size 14px
            line-height 30px
            float right
            text-align center
            color #fff;
            cursor pointer
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
        i{
                display inline-block
                width 12px
                height 12px
                cursor pointer
            }
            .edit {
                bgImg('../../../../assets/img/edit.png', cover)
                margin-left 26px
            }
            .addIcon {
                margin-left 10px
                bgImg('../../../../assets/img/add.png', cover)
            }
            .del {
                margin-left 10px
                bgImg('../../../../assets/img/del.png', cover)
            }
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
          .mg_r {
              margin-right 20px;
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
  .edit-desc {
    margin-top 34px
    .submit {
        margin-left 28px
    }
  }
}
</style>

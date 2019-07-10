<template>
  <div class="cont_box container">
    <!-- tab栏 -->
    <div class="top" v-if="showTable">
      <button class="file_btn" @click="createEvaluate">创建评价</button>
      <div class="add_btn fr clearfix" @click="showTable = false">查询</div>
      <input type="text" class="Inquire fr clearfix" placeholder="请输入关键字" />
    </div>
    <!--表格-->
    <div class="tab" v-if="showTable">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    <div id="baseInfo" v-if="isCreateEvaluate">
      <h4 class="title">计算机原理</h4>
      <div class="xiahuaxian" style="margin-bottom:20px">
        <div class="title" style="width:123px;line-height:36px;height:36px">评价基本信息</div>
      </div>
      <div class="jibenxinxi">
        <div class="studentXinxi">
          <i-form
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="80"
            label-position="right"
          >
            <Form-item label="评价代码:" prop="code">
              <i-input
                :value.sync="formValidate.code"
                v-model="formValidate.code"
                placeholder="请输入评价代码"
              ></i-input>
            </Form-item>
            <Form-item label="评价名:" prop="name">
              <i-input
                :value.sync="formValidate.name"
                v-model="formValidate.name"
                placeholder="请输入评价名称"
              ></i-input>
            </Form-item>
            <Form-item label="开始时间:">
              <Row>
                <!-- <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>-->
                <i-col span="11">
                  <Form-item prop="time">
                    <Time-picker
                      type="time"
                      placeholder="选择时间"
                      :value.sync="formValidate.starttime"
                    ></Time-picker>
                  </Form-item>
                </i-col>
              </Row>
            </Form-item>
            <Form-item label="结束时间:">
              <Row>
                <!-- <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>-->
                <i-col span="11">
                  <Form-item prop="time">
                    <Time-picker type="time" placeholder="选择时间" :value.sync="formValidate.endtime"></Time-picker>
                  </Form-item>
                </i-col>
              </Row>
            </Form-item>
            <Form-item label="学年:" prop="grade">
              <i-select :model.sync="formValidate.grade" placeholder="请选择">
                <i-option value="2014">2014</i-option>
                <i-option value="2015">2015</i-option>
                <i-option value="2016">2016</i-option>
              </i-select>
            </Form-item>
            <Form-item label="学期:" prop="xueqi">
              <i-select :model.sync="formValidate.xueqi" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
            <Form-item label="种类:" prop="zhonglei">
              <i-select :model.sync="formValidate.zhonglei" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
            <Form-item label="方式:" prop="fangshi">
              <i-select :model.sync="formValidate.fangshi" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
            <Form-item label="对象:" prop="duixiang">
              <i-select :model.sync="formValidate.duixiang" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
            <Form-item label="命题方式:" prop="mtfs">
              <i-select :model.sync="formValidate.mtfs" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
            <Form-item label="说明:" prop="desc" style="display: block;width:400px">
              <i-input
                :value.sync="formValidate.desc"
                type="textarea"
                :rows="4"
                placeholder="请输入..."
                style="width:500px"
              ></i-input>
            </Form-item>
          </i-form>
        </div>
      </div>
      <div class="xiahuaxian">
        <div class="title">负责人</div>
        <button class="add">+添加</button>
      </div>
      <span v-for="(item,key) in personList" :key="key" class="name">{{item}}</span>
      <div style="margin-top:100px">
        <button class="button cancel" @click="handleReset('formValidate')">取消</button>
        <button class="button save" @click="handleSubmit('formValidate')">保存</button>
      </div>
    </div>
    <div id="gridList" class="container" v-if="editTestBlue">
    <div class="xiahuaxian" style="margin-bottom:50px">
        <div class="title">负责人</div>
        <button class="add" @click="addtestBlue">+添加</button>
      </div>
    <div>
      <div class="xiahuaxian" >
          <img class="icon" src="../../../assets/img/icon.png" style="width: 23px;height: 18px;" />
          <div><i class="edit"></i><i class="del"></i></div>
      </div>
      <table border="1" cellpadding="0" cellspacing="0" class="table" style="margin-bottom:50px">
        <thead>
          <tr>
            <th>毕业要求</th>
            <th colspan="4">理解计算机的原理</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >课程大纲</td>
            <td  colspan="4">学习计算机的原理，增加动手能力</td>
          </tr>
          <tr >
            <td rowspan="2">评分</td>
            <td >总分</td>
            <td >及格</td>
            <td >预期</td>
            <td >优秀</td>
          </tr>
          <tr>
            <td>30</td>
            <td>18</td>
            <td>24</td>
            <td>27</td>
          </tr>
          <tr>
            <td rowspan="6">考试题型</td>
            <td >单选</td>
            <td >5</td>
            <td >连线题</td>
            <td >5</td>
          </tr>
          <tr>
            <td >多选</td>
            <td >5</td>
            <td >填空题</td>
            <td >5</td>
          </tr>
          <tr>
            <td>判断</td>
            <td >5</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td colspan="2">主观题</td>
            <td colspan="2">打分标准</td>
          </tr>
          <tr>
            <td>简答</td>
            <td >5</td>
            <td colspan="2">能说明问题的难度</td>
          </tr>
          <tr>
            <td>案例分析</td>
            <td >5</td>
            <td colspan="2">能说明问题的难度</td>
          </tr>
        </tbody>
      </table>
      <div class="xiahuaxian" >
          <img class="icon" src="../../../assets/img/icon.png" style="width: 23px;height: 18px;" />
          <div><i class="edit"></i><i class="del"></i></div>
      </div>
      <table border="1" cellpadding="0" cellspacing="0" class="table" style="margin-bottom:50px">
        <thead>
          <tr>
            <th>毕业要求</th>
            <th colspan="4">理解计算机的原理</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >课程大纲</td>
            <td  colspan="4">学习计算机的原理，增加动手能力</td>
          </tr>
          <tr >
            <td rowspan="2">评分</td>
            <td >总分</td>
            <td >及格</td>
            <td >预期</td>
            <td >优秀</td>
          </tr>
          <tr>
            <td>30</td>
            <td>18</td>
            <td>24</td>
            <td>27</td>
          </tr>
          <tr>
            <td rowspan="6">考试题型</td>
            <td >单选</td>
            <td >5</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <td >多选</td>
            <td >5</td>
            <td ></td>
            <td ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="xiahuaxian" style="margin-bottom:20px">
        <div class="title">评价量规</div>
      </div>
      <i-input
        type="textarea"
        :rows="3"
        placeholder="请输入..."
      ></i-input>
      <br>
      <br>
      <span style="margin-right:20px">Benchmark :</span>
      <i-input type="text" placeholder="请输入..." style="width:80%"></i-input>
      <div style="margin:50px 0">
        <button class="button cancel" >取消</button>
        <button class="button save">保存</button>
      </div>
  </div>
    <delModal
      title="保存成功"
      confirmText="立即前往"
      cancleText="以后再说"
      :content="content"
      @on-confirm="confirm"
      @on-close="close"
      @on-cancel="cancel"
      v-show="delModal"
    ></delModal>
  </div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      content: "是否前往编辑测验蓝图？",
      delModal: false,
      editTestBlue: false,
      formValidate: {
        code: "",
        name: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        starttime: "",
        endtime: "",
        grade: "",
        xueqi: "",
        zhonglei: "",
        mtfs: "",
        fangshi: "",
        duixiang: "",
        desc: ""
      },
      ruleValidate: {
        code: [
          { required: true, message: "评价代码不能为空", trigger: "blur" }
        ],
        name: [
          { required: true, message: "评价名称不能为空", trigger: "blur" }
        ],
        starttime: [
          {
            required: true,
            type: "date",
            message: "请选择时间",
            trigger: "change"
          }
        ],
        endtime: [
          {
            required: true,
            type: "date",
            message: "请选择时间",
            trigger: "change"
          }
        ]
      },
      isCreateEvaluate: false,
      personList: ["李萌", "曾海博"],
      formInline: {
        user: "",
        password: ""
      },
      showTable: true,
      columns1: [
        {
          title: "编号",
          align: "center",
          key: "number"
        },
        {
          title: "学年",
          align: "center",
          key: "xuenian"
        },
        {
          title: "名称",
          align: "center",
          key: "name"
        },
        {
          title: "上传时间",
          align: "center",
          key: "upload_date"
        },
        {
          title: "分类",
          align: "center",
          key: "type"
        },
        {
          title: "上传人",
          align: "center",
          key: "upload_name"
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
                    click: () => {
                      self.$router.push({
                        path: "/banneredit",
                        query: { id: params.row.id }
                      });
                    }
                  }
                },
                "下载"
              ),
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE"
                  },
                  on: {
                    click: () => {
                      self.$axios
                        .post("/api/banner/delete", { bannerId: params.row.id })
                        .then(res => {
                          if (res.data.code == 100) {
                            self.$Message.success({
                              content: "删除成功！"
                            });
                            self.getData();
                          } else {
                            self.$Message.error(res.data.msg);
                          }
                        });
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian: "2017学年",
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        }
      ]
    };
  },
  methods: {
    addtestBlue () {
      this.$router.push('/achievements/course/addtestBlue')
    },
    createEvaluate() {
      this.isCreateEvaluate = true;
      this.showTable = false;
    },
    confirm() {
      this.delModal = false;
      this.showTable = false;
      this.isCreateEvaluate = false;
      this.editTestBlue = true
      console.log("111");
    },
    // 点击关闭弹窗执行的操作
    close() {
      this.delModal = false;
    },
    // 点击取消删除执行的操作
    cancel() {
      this.delModal = false;
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.delModal = true;
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style>
#baseInfo .ivu-form-item {
  display: inline-block;
}
#baseInfo .ivu-form-item .ivu-input-wrapper,
#baseInfo .ivu-form-item .ivu-select {
  width: 180px;
}
</style>
<style lang="stylus">
@import '../../../utils/styl/mixin';
.xiahuaxian {
      width: 100%;
      border-bottom: 1px solid rgba(136,171,218,1);
      padding-bottom: 1px;
      display: flex;
      justify-content: space-between;

      .title {
        width: 88px;
        height: 30px;
        line-height: 30px;
        background-color: rgba(136, 171, 218, 1);
        border: 1px solid $navCol;
        color: #ffffff;
        text-align: center;
        font-size: $font14;
      }

      .add {
        width: 60px;
        height: 30px;
        background: rgba(243, 152, 0, 1);
        border-radius: 4px;
        font-size: $font14;
        color: #fff;
        line-height: 30px;
        cursor: pointer;
      }
      i{
          display inline-block
          width 12px
          height 12px
          cursor pointer
        }
        .edit {
            bgImg('../../../assets/img/edit.png', cover)
            margin-left 26px
        }
        .addIcon {
            margin-left 10px
            bgImg('../../../assets/img/add.png', cover)
        }
        .del {
            margin-left 10px
            bgImg('../../../assets/img/del.png', cover)
        }
    }
    .button {
      padding 1px 20px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      line-height: 38px;
      margin-right: 29px;
      cursor: pointer;
    }

    .cancel {
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(135, 184, 127, 1);
      color: rgba(135, 184, 127, 1);
    }

    .save {
      background: rgba(135, 184, 127, 1);
      color: rgba(255, 255, 255, 1);
    }
</style>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';
.cont_box {
  ul {
    margin-top: 37px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid $navCol;
    padding-bottom: 1px;

    li {
      width: 88px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;

      a {
        width: 100%;
        display: block;
        border-top-right-radius: 20px;
        border: 1px solid $navCol;
        color: $navCol;
        font-size: $font14;
      }
    }
  }

  .router-link-exact-active {
    background-color: $navCol !important;
    color: $white !important;
  }

  .top {
    overflow: hidden;

    .add_btn {
      width: 60px;
      height: 30px;
      line-height: 30px;
      background-color: #F39800;
      text-align: center;
      margin: 27px 0 7px 7px;
      font-size: $font14;
      color: rgba(255, 255, 255, 1);
    }

    .Inquire {
      width: 102px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #EEEEEE;
      text-align: center;
      margin: 27px 0 7px 7px;
      font-size: $font14;
      color: #999999;
    }

    .file_btn {
      cursor: pointer;
      width: 90px;
      height: 30px;
      background-color: #6FB3E0;
      color: #FFFFFF;
      margin: 27px 0 7px;
      border-radius: 4px;
    }
  }

  #baseInfo {
    padding: 40px 70px 200px;

    h4 {
      font-size: $font24;
      font-weight: bold;
      color: $titleCol;
      line-height: $font24;
      margin-bottom: 35px;
      text-align: center;
    }
    .name {
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 15px;
      margin: 24px 37px 0 0;
    }

    .jibenxinxi {
      width: 100%;
      margin-bottom: 50px;

      .explain {
        display: flex;
        vertical-align: top;
        margin-top: 20px;
        font-size: $font14;

        span {
          font-size: $font15;
          margin-right: 10px;
        }

        .intrdu {
          width: 85%;
          word-break: break-all;
          background-color: #fafafa;
          box-sizing: border-box;
          padding: 15px 120px 15px 15px;
          line-height: 24px;
          border: 1px solid #eee;
          border-radius: 4px;
          resize: none;
          outline: none;
        }
      }

      .studentXinxi {
        display: inline-block;
        font-weight: bold;
        font-size: $font14;

        .label {
          display: inline-block;
          width: 33%;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }

  .addAndEdit {
    h4 {
      font-weight: bold;
      font-size: $font16;
      margin-bottom: 17px;
    }

    .cont {
      background: #FAFAFA;
      padding-top: 40px;

      .lable {
        margin-left: 66px;
        margin-right: 8px;
      }

      .input {
        font-size: $font14;
        width: 420px;
        background-color: #FFFFFF;
        box-sizing: border-box;
        padding: 5px 25px;
        border: 1px solid $eee;
        margin: 10px 0 10px;
      }

      .edit-desc {
        margin-left: 66px;
        margin-top: 111px;
        padding-bottom: 65px;
      }

      .submit {
        margin-left: 28px;
      }
    }
  }
    #gridList {
    .table {
      width: 100%;
      margin: 20px 0;

      th, td {
        border: 1px solid #000;
        height: 60px;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
}
</style>

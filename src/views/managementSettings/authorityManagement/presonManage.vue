<template>
  <div id="presonManage">
    <div class="container">
      <div v-show="personHome">
        <div class="topContent">
          <button class="addBtn ivu-btn ivu-btn-primary" @click="addFn">添加人员</button>
          <div class="searchContent">
            <div>
              <span style="font-size:16px;">人员名称：</span>
              <Input placeholder="昵称（系统名）" />
            </div>
            <div>
              <span>人员状态：</span>
              <Select v-model="model1" style="width:178px">
                <Option
                  v-for="item in cityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
            <button class="searchBtn ivu-btn ivu-btn-warning">查询</button>
          </div>
        </div>
        <Table :columns="columns" :data="data"></Table>
        <div class="centers">
          <Page :total="50" show-total />
        </div>
      </div>
      <div v-show="addPerson">
        <p v-text="addEditTitle"></p>
        <div class="add-edit">
          <Form ref="formdata" :label-width="160">
            <Row>
              <Col span="24">
                <div class="add-subtitle">账号信息</div>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="昵称（系统名称）">
                  <Input placeholder="请输入" v-model="preson.name" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="真实姓名：">
                  <Input placeholder="请输入" v-model="preson.relname" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="登录账号：">
                  <Input placeholder="请输入" v-model="preson.zhanghao" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="角色：">
                  <Input placeholder="请输入" v-model="preson.role" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="初始密码：">
                  <Input placeholder="请输入" v-model="preson.password" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="性别：">
                  <Input placeholder="请输入" v-model="preson.sex" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="24">
                <FormItem label="备注：">
                  <Input
                    type="textarea"
                    :autosize="{minRows: 2,maxRows: 5}"
                    placeholder="请输入"
                    v-model="preson.beizhu"
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="24">
                <div class="add-subtitle">个人信息</div>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="生日：">
                  <Input placeholder="请输入" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="邮箱：">
                  <Input placeholder="请输入" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <FormItem label="电话：">
                  <Input placeholder="请输入" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="QQ：">
                  <Input placeholder="请输入" />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <div class="add-btns">
            <Button class="ivu-btn" @click="backPersonHome">取消</Button>
            <Button type="primary" class="ivu-btn">保存</Button>
            <Button type="warning" class="ivu-btn">保存并添加下一条</Button>
          </div>
        </div>
      </div>
      <!-- 停用人员弹框 -->
      <delModal
        title="您确认停用改人员吗？"
        :content="content"
        @on-confirm="delConfirm"
        @on-close="close"
        @on-cancel="cancel"
        v-show="delModal"
      ></delModal>
      <!-- 重置密码弹框 -->
      <resetPassModal
        :content="content"
        @on-confirm="resetConfirm"
        @on-close="close"
        @on-cancel="cancel"
        v-show="resetPassModal"
      ></resetPassModal>
    </div>
  </div>
</template>
<script>
export default {
  name: "presonManage",
  data() {
    let self = this;
    return {
      personHome: true,
      addPerson: false,
      delModal: false,
      resetPassModal: false,
      content: "",
      model1: "",
      addEditTitle:"添加人员",
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        }
      ],
      columns: [
        {
          title: "编号",
          align: "center",
          key: "number"
        },
        {
          title: "昵称（系统名）",
          align: "center",
          key: "xueyuan",
          width: 200
        },
        {
          title: "登录账号",
          align: "center",
          key: "zhuangye"
        },
        {
          title: "角色",
          align: "center",
          key: "name"
        },
        {
          title: "状态",
          align: "center",
          key: "sex"
        },
        {
          title: "备注",
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
          width: 200,
          align: "center",
          render: function(h, params) {
            return h("span", { params }, [
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      self.editEvt(params)
                    }
                  }
                },
                "编辑"
              ),
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      self.resetPassModal = true;
                    }
                  }
                },
                "重置密码"
              ),
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      self.delModal = true;
                    }
                  }
                },
                "停用"
              )
            ]);
          }
        }
      ],
      data: [
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
        },
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
      preson: {
        name: "",
        relname: "",
        zhanghao: "",
        role: "",
        password: "",
        sex: "",
        beizhu: ""
      }
    };
  },
  methods: {
    editEvt(params) {
      this.preson.name = params.row.xueyuan;
      this.preson.relname = params.row.name;
      this.preson.zhanghao = params.row.number;
      this.preson.sex = params.row.sex;
      this.personHome = false;
      this.addPerson = true;
      this.addEditTitle = "编辑人员";
    },
    addFn() {
      this.personHome = false;
      this.addPerson = true;
      this.addEditTitle = "添加人员";
      this.preson = {
        name: "",
        relname: "",
        zhanghao: "",
        role: "",
        password: "",
        sex: "",
        beizhu: ""
      }
    },
    delConfirm() {
      this.delModal = false;
    },
    resetConfirm() {
      this.resetPassModal = false;
    },
    close() {
      this.delModal = false;
      this.resetPassModal = false;
    },
    cancel() {
      this.delModal = false;
      this.resetPassModal = false;
    },
    backPersonHome() {
      this.addPerson = false;
      this.personHome = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
#presonManage {
  width: 998px;
  margin: 48px auto 0;

  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .topContent {
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #9EAAC6;
    margin-bottom: 10px;
  }

  .searchContent {
    float: right;
    display: flex;
    justify-content: space-between;
    width: 60%;
  }

  .ivu-input-wrapper {
    width: 64%;
  }

  .addBtn {
    height: 30px;
    width: 90px;
    background: rgb(111, 179, 224);
  }

  .searchBtn {
    width: 62px;
    height: 30px;
    margin-left: 17px;
  }

  .add-edit {
    margin-top: 20px;
    padding: 20px;
    background: #f7f6f6;

    .add-subtitle {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #a5a2a2;
      margin-bottom: 15px;
    }

    .add-btns {
      margin-top: 20px;

      button {
        margin-right: 20px;
      }
    }
  }
}
</style>

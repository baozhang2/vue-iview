<template>
  <div id="roleManage">
    <div class="container">
      <div v-show="personHome">
        <div class="topContent">
          <button class="addBtn ivu-btn ivu-btn-primary" @click="addFn">添加角色</button>
          <div class="searchContent">
            <span style="font-size:16px;">角色名称：</span>
            <Input placeholder="昵称（系统名）" />
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
            <FormItem label="昵称（系统名称）">
              <Input placeholder="请输入" v-model="role.name"/>
            </FormItem>
            <FormItem label="备注：">
              <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入" />
            </FormItem>
          </Form>
          <Table :columns="columns10" :data="data9"></Table>
          <div class="add-btns">
            <Button class="ivu-btn" @click="backRoleHome">取消</Button>
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
import expandRow from "./table-expand.vue";
export default {
  name: "roleManage",
  // components: { expandRow },
  data() {
    let self = this;
    return {
      columns10: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data9: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          job: "Data engineer",
          interest: "badminton",
          birthday: "1991-05-14",
          book: "Steve Jobs",
          movie: "The Prestige",
          music: "I Cry"
        },
        {
          name: "Jim Green",
          age: 25,
          address: "London No. 1 Lake Park",
          job: "Data Scientist",
          interest: "volleyball",
          birthday: "1989-03-18",
          book: "My Struggle",
          movie: "Roman Holiday",
          music: "My Heart Will Go On"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          job: "Data Product Manager",
          interest: "tennis",
          birthday: "1992-01-31",
          book: "Win",
          movie: "Jobs",
          music: "Don’t Cry"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          job: "Data Analyst",
          interest: "snooker",
          birthday: "1988-7-25",
          book: "A Dream in Red Mansions",
          movie: "A Chinese Ghost Story",
          music: "actor"
        }
      ],
      personHome: true,
      addPerson: false,
      delModal: false,
      resetPassModal: false,
      content: "",
      model1: "",
      addEditTitle: "添加角色",
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
            return h("span", {}, [
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      self.editEv(params);
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
      role: {
        name: ""
      }
    };
  },
  methods: {
    editEv(params) {
      this.role.name = params.row.name;
      this.personHome = false;
      this.addPerson = true;
      this.addEditTitle = "编辑角色";
    },
    addFn() {
      this.role = {
        name: ''
      }
      this.personHome = false;
      this.addPerson = true;
      this.addEditTitle = "添加角色";
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
    backRoleHome() {
      this.addPerson = false;
      this.personHome = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
#roleManage {
  width: 998px;
  margin: 48px auto 0;

  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .topContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #9EAAC6;
    margin-bottom: 10px;
  }

  .searchContent {
    width: 47%;
  }

  .ivu-input-wrapper {
    width: 64% !important;
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

    .add-btns {
      margin-top: 20px;

      button {
        margin-right: 20px;
      }
    }
  }
}
</style>

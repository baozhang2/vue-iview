<template>
  <!-- 系统通知界面 -->
  <div id="systemNotification">
    <div v-show="first">
      <div class="title">通知列表</div>
      <div class="btns">
        <button class="bt1" @click="newF()">新建消息</button>
        <div>
          <Input v-model="value" placeholder="Enter something..." style="width: 102px" class="inp" />
          <button class="bt2">查询</button>
        </div>
      </div>
      <div class="line"></div>
      <div style="height:5px"></div>
      <Table :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row }" slot="action">
          <a @click="look(row)">查看</a>
          <a @click="newChange(row)" style="margin-left:10px;">编辑</a>
          <a @click="deltitle(row)" style="margin-left:10px;">删除</a>
        </template>
      </Table>
      <div class="centers">
        <Page
          :total="total"
          :aria-current="page.page"
          :page-size="page.pageSize"
          @on-change="pageChange"
          show-total
          v-show="pageIsShow"
        />
      </div>
    </div>
    <!-- 新建 -->
    <div v-show="newFirst" class="sides">
      <div class="xjtz">{{titleMessage}}</div>
      <div class="centerstyle" style="padding: 30px 60px">
        <Form ref="formValidate" :model="formData" :rules="ruleValidate" label-position="top">
          <Row>
            <Col span="24">
              <FormItem label="通知内容：" prop="content">
                <Input
                  v-model="formData.content"
                  type="textarea"
                  :autosize="{minRows: 10,maxRows: 10}"
                  placeholder="Enter something..."
                />
              </FormItem>
            </Col>
            <Col span="24" style="margin: 20px 0 10px">发布对象：</Col>
            <Col span="8">
              <FormItem prop="collegeId">
                <span>学院：</span>
                <Select v-model="formData.collegeId" style="width:200px">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem prop="specialtyId">
                <span>专业：</span>
                <Select v-model="formData.specialtyId" style="width:200px">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem prop="peopleType">
                <span>对象：</span>
                <Select v-model="formData.peopleType" style="width:200px">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div class="bottonend">
          <button class="bt1" @click="back()">取消</button>
          <button class="bt2" @click="addNotifi('formValidate')">保存</button>
        </div>
      </div>
    </div>
    <!-- 查看 -->
    <div v-show="newSecond" class="container">
      <div class="endTitle">通知内容</div>
      <div class="endLine"></div>
      <div v-if="descEdit">
        <div class="newSecond-contents" v-if="!massgae">暂无描述</div>
        <div class="newSecond-contents" v-else v-html="massgae"></div>
        <div style="margin-top:44px;font-size:16px;color:#333;">发布对象</div>
        <div style="margin-top:36px;font-size:14px;margin-left:3px">
          <span>学院：</span>
          <span style="margin-left:30px;font-weight:600;">{{model1}}</span>
        </div>
        <div style="margin-top:36px;font-size:14px;margin-left:3px">
          <span>学院：</span>
          <span style="margin-left:30px;font-weight:600;">{{model1}}</span>
        </div>
        <div style="margin-top:36px;font-size:14px;margin-left:3px">
          <span>学院：</span>
          <span style="margin-left:30px;font-weight:600;">{{model1}}</span>
        </div>
        <div class="newSecond-desc">
          <Button type="error" @click="back" style="width:84px;height:38px;margin-top:50px">编辑</Button>
        </div>
      </div>
    </div>
    <delModal
      title="您确认要删除该通知么？"
      :content="content"
      @on-confirm="confirm"
      @on-close="close"
      @on-cancel="cancel"
      v-show="delModal"
    ></delModal>
  </div>
</template>
<script>
import { systemNotificationList, addNoticeAccount } from "api";
export default {
  data() {
    return {
      delModal: false,
      content: "删除数据将无法恢复",
      titleMessage: "新建通知",
      value: "",
      first: true,
      newFirst: false,
      newSecond: false,
      descEdit: true,
      pageIsShow: true,
      model1: "sda",
      value8: "",
      page: {
        page: 1,
        pageSize: 10
      },
      total: 0,
      massgae:
        "Chinese President Xi Jinping here on Friday called on the Group of 20 (G20) major economies to explore driving force for growth, improve global governance, remove development bottlenecks, and properly address differences.",
      cityList: [
        {
          value: "New York",
          label: "New York"
        }
      ],
      columns1: [
        {
          title: "编号",
          align: "center",
          type: "index"
        },
        {
          title: "消息内容",
          align: "center",
          key: "content"
        },
        {
          title: "发布对象",
          align: "center",
          key: "name"
        },
        {
          title: "创建人",
          align: "center",
          key: "admin"
        },
        {
          title: "创建时间",
          align: "center",
          key: "create_time"
        },
        {
          title: "操作",
          slot: "action",
          width: 220,
          align: "center"
        }
      ],
      data1: [],
      ruleValidate: {
        content: [
          {
            required: true,
            message: "内容为必填，请输入内容",
            trigger: "blur"
          }
        ]
      },
      formData: {
        content: "",
        collegeId: "f9c9be314b6846c49acafcf438506b69",
        specialtyId: "c12ba3bbda4a4ddda224df04c3c3e0f2",
        peopleType: 1
      }
    };
  },
  methods: {
    getList() {
      this.$post(systemNotificationList, this.page).then(result => {
        this.total = result.data.total;
        this.data1 = result.data.records;
      });
      this.data1.length == 0
        ? (this.pageIsShow = false)
        : (this.pageIsShow = true);
    },
    pageChange(e) {
      this.paramsData.page = e;
      this.getList();
    },
    addNotifi(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$post(addNoticeAccount, this.formData).then(result => {
            debugger;
          });
        }
      });
    },
    newF() {
      this.titleMessage = "新建通知";
      this.first = false;
      this.newSecond = false;
      this.newFirst = true;
    },
    newChange() {
      this.titleMessage = "编辑通知";
      this.first = false;
      this.newSecond = false;
      this.newFirst = true;
    },
    back() {
      this.first = true;
      this.newSecond = false;
      this.newFirst = false;
    },
    look(look) {
      this.first = false;
      this.newFirst = false;
      this.newSecond = true;
    },
    deltitle(e) {
      this.delModal = true;
    },
    confirm() {
      this.delModal = false;
      console.log("111");
    },
    close() {
      this.delModal = false;
    },
    cancel() {
      /* 确认删除执行的方法 */
      this.delModal = false;
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';

#systemNotification {
  width: 998px;
  margin: 48px auto 0;

  .ivu-form-item-label {
    font-size: 16px;
  }

  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .title {
    width: 100%;
    height: 24px;
    text-align: center;
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }

  .btns {
    margin-top: 46px;
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;

    .bt1 {
      width: 90px;
      height: 30px;
      background: rgba(111, 179, 224, 1);
      border-radius: 2px;
      justify-items: center;
      cursor: pointer;
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
      border-radius: 2px;
    }

    .inp {
      height: 30px;
      margin-right: 10px;
    }

    .bt2 {
      margin: right 0px;
      width: 62px;
      height: 30px;
      background: rgba(255, 183, 82, 1);
      border-radius: 2px;
      cursor: pointer;
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
      border-radius: 2px;
    }
  }

  .line {
    margin-top: 9px;
    width: 100%;
    height: 2px;
    background: rgba(158, 170, 198, 1);
    border: 1px solid rgba(206, 216, 237, 1);
  }
}

.sides {
  .xjtz {
    font-size: 16px;
    color: #666666;
    margin-top: 66px;
    margin-bottom: 5px;
  }

  .centerstyle {
    width: 992px;
    height: 601px;
    background: rgba(250, 250, 250, 1);
    overflow: hidden;

    .tznr {
      width: 80px;
      height: 16px;
      margin: 47px 0 0 64px;
    }

    .centerTop {
      margin: 12px auto 0;
      width: 871px;
    }
  }

  .fbdx {
    margin-top: 30px;
    margin-left: 64px;
  }

  .bottonend {
    margin-left: 66px;
    margin-top: 135px;

    .bt1 {
      width: 84px;
      height: 38px;
      font-size: 16px;
      color: rgba(135, 184, 127, 1);
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(135, 184, 127, 1);
      border-radius: 4px;
      cursor: pointer;
    }

    .bt2 {
      width: 84px;
      height: 38px;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      background: rgba(135, 184, 127, 1);
      border-radius: 4px;
      margin-left: 27px;
      cursor: pointer;
    }
  }
}

.container {
  width: 997px;
  margin: 55px auto 0;

  .endTitle {
    height: 36px;
    width: 92px;
    background: rgba(136, 171, 218, 1);
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 36px;
    border-radius: 2px;
  }

  .endLine {
    width: 997px;
    height: 1px;
    background: rgba(136, 171, 218, 1);
    margin-bottom: 25px;
  }

  .newSecond-contents {
    font-size: $font14;
    line-height: $font20;
    text-indent: 30px;
    text-indent: 0;
    width: 992px;

    textarea {
      width: 100%;
      word-break: break-all;
      height: 398px;
      background-color: $navBarColor;
      box-sizing: border-box;
      padding: 35px 21px;
      border: 1px solid $eee;
      border-radius: 4px;
      resize: none;
      outline: none;
    }
  }
}
</style>

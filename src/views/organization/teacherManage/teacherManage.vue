<template>
  <div id="teacherManage" class="container">
    <Tabs value="name1">
      <TabPane label="教职管理" name="name1">
        <div>
          <div class="searchDiv">
            <div class="add_btn fr clearfix">查询</div>
            <Input class="Inquire fr clearfix" v-model="searchValue1" placeholder="请输入关键字" />
          </div>
          <Table :columns="columns" :data="data"></Table>
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
      </TabPane>
      <TabPane label="教职发展" name="name2">
        <!-- tab栏 -->
        <div class="top" v-if="showTable">
          <button class="file_btn" @click="showTable=false">上传文件</button>
          <!-- <input type="file" class="hide"> -->
        </div>
        <!--表格-->
        <div class="tab" v-if="showTable">
          <div class="searchDiv">
            <div class="add_btn fr clearfix">查询</div>
            <Input class="Inquire fr clearfix" v-model="searchValue2" placeholder="请输入关键字" />
          </div>
          <Table :columns="columns1" :data="data1"></Table>
          <div class="centers">
            <Page :total="50" show-total />
          </div>
        </div>
        <div class="addAndEdit" v-else>
          <!-- 添加/编辑区 -->
          <div class="cont">
            <span class="lable">文件名称:</span>
            <input class="input" v-model="data1.number" type="text" />
            <br />
            <span class="lable">学年:</span>
            <Select v-model="modelSelect" style="width:200px;margin-left: 32px;">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
            <br />
            <span class="lable">上传文件:</span>
            <input class="file" v-model="data1.number" type="text" />
            <button class="file_btn">选择文件</button>
            <input type="file" class="hide" />
            <!-- 按钮盒子 -->
            <div class="edit-desc">
              <Button type="success" ghost @click="showTable=true">取消</Button>
              <Button type="success" class="submit" @click="submits">完成</Button>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
    <delModal
      title="你确定要删除该条数据吗？"
      :content="content"
      @on-confirm="confirm"
      @on-close="close"
      @on-cancel="cancel"
      v-show="delModal"
    ></delModal>
  </div>
</template>

<script>
import { teacherList } from "api";
export default {
  data() {
    let self = this;
    return {
      showTable: true,
      delModal: false,
      crreParams: {},
      content: "删除后数据将无法恢复",
      searchValue1: "",
      searchValue2: "",
      pageIsShow: true,
      page: {
        pageSize: 10,
        page: 1
      },
      total: 0,
      columns: [
        {
          title: "编号",
          align: "center",
          type: "index"
        },
        {
          title: "职工编号",
          align: "center",
          key: "tno"
        },
        {
          title: "学院",
          align: "center",
          key: "college"
        },
        {
          title: "姓名",
          align: "center",
          key: "xingname"
        },
        {
          title: "性别",
          align: "center",
          key: "sex"
        },
        {
          title: "岗位",
          align: "center",
          key: "job_title"
        },
        {
          title: "入职时间",
          align: "center",
          key: "entry_time"
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
                "查看"
              )
            ]);
          }
        }
      ],
      data: [],
      columns1: [
        {
          title: "编号",
          align: "center",
          key: "number"
        },
        {
          title: "学院",
          align: "center",
          key: "name"
        },
        {
          title: "专业",
          align: "center",
          key: "upload_date"
        },
        {
          title: "姓名",
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
                    click: () => {}
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
                      self.delfn(params);
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
          name: "土木院",
          upload_date: "建筑与桥梁",
          upload_name: "张三"
        },
        {
          number: 100021,
          name: "信工院",
          upload_date: "软件工程",
          upload_name: "张先森"
        },
        {
          number: 100021,
          name: "外国语",
          upload_date: "日语专业",
          upload_name: "胖女士"
        }
      ],
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
      modelSelect: ""
    };
  },
  methods: {
    getList() {
      this.$post(teacherList, this.page).then(result => {
        this.total = result.data.total;
        result.data.records.forEach(element => {
          element.xingname = element.xing + element.name;
        });
        this.data = result.data.records;
      });
      this.data.length == 0
        ? (this.pageIsShow = false)
        : (this.pageIsShow = true);
    },
    pageChange(e) {
      this.page.page = e;
      this.getList();
    },
    delfn(params) {
      debugger;
      this.delModal = true;
    },
    submits() {},
    // 关闭按钮事件
    close() {
      this.delModal = false;
    },
    // 取消按钮事件
    cancel() {
      this.delModal = false;
    },
    // 确定按钮事件
    confirm() {
      this.delModal = false;
      let info =
        "编号:" +
        this.crreParams.row.number +
        ",学院:" +
        this.crreParams.row.name +
        ",专业:" +
        this.crreParams.row.upload_date +
        ",姓名:" +
        this.crreParams.row.upload_name;
      this.$Message.info(info);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';

#teacherManage {
  .router-link-exact-active {
    background-color: $navCol !important;
    color: $white !important;
  }

  .top {
    overflow: hidden;
    margin-bottom: -42px;

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

    .hide {
      position: relative;
      right: 90px;
      opacity: 0;
      z-index: 50;
      width: 90px;
      height: 30px;
    }

    .file_btn {
      width: 90px;
      height: 30px;
      background-color: #6FB3E0;
      color: #FFFFFF;
      border-radius: 5px;
    }
  }

  .addAndEdit {
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

      .file {
        font-size: $font14;
        width: 286px;
        background-color: #FFFFFF;
        box-sizing: border-box;
        padding: 5px 25px;
        border: 1px solid $eee;
        margin: 10px 0 10px;
      }

      .hide {
        position: relative;
        right: 122px;
        opacity: 0;
        z-index: 50;
        width: 122px;
        height: 33px;
      }

      .file_btn {
        width: 122px;
        height: 33px;
        background: #6FB3E0;
        margin-left: 12px;
      }

      .edit-desc {
        margin-left: 66px;
        margin-top: 51px;
        padding-bottom: 65px;
      }

      .submit {
        margin-left: 28px;
      }
    }
  }

  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .searchDiv {
    overflow: auto;
  }

  .add_btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    background-color: #FFB752;
    text-align: center;
    margin: 10px 0 15px 7px;
    font-size: $font14;
    color: rgba(255, 255, 255, 1);
  }

  .Inquire {
    width: 102px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #EEEEEE;
    text-align: center;
    margin: 10px 0 15px 7px;
    font-size: $font14;
    color: #999999;
  }
}
</style>

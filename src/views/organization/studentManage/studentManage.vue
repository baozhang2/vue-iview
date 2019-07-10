<template>
  <div id="studentManage" class="cont_box container">
    <div class="top" v-if="showTable">
      <Button type="primary" @click="lookStuFx">查看学生分析</Button>
      <div class="add_btn fr clearfix">查询</div>
      <Input class="Inquire fr clearfix" v-model="value" placeholder="请输入关键字" />
      <span class="fr clearfix" style="margin-top:27px;">
        <label>专业：</label>
        <Select v-model="zy" style="width:200px">
          <Option v-for="item in selectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </span>
    </div>
    <!--表格-->
    <div class="tab" v-if="showTable">
      <Table :columns="columns1" :data="data1"></Table>
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
  </div>
</template>

<script>
import { studentList } from "api";
export default {
  name: "studentManage",
  data() {
    let self = this;
    return {
      value: "",
      zy: "",
      pageIsShow: true,
      page: {
        pageSize: 10,
        page: 1
      },
      total: 0,
      selectList: [
        {
          value: "1",
          label: "计算机科学"
        },
        {
          value: "2",
          label: "网络工程"
        },
        {
          value: "3",
          label: "机器人"
        }
      ],
      visionList: [
        {
          name: "政策报告",
          path: "/#"
        },
        {
          name: "总结报告",
          path: "/organization/vision/minutes"
        }
      ],
      showTable: true,
      columns1: [
        {
          title: "编号",
          type: "index",
          align: "center"
        },
        {
          title: "学院",
          align: "center",
          key: "college"
        },
        {
          title: "专业",
          align: "center",
          key: "specialty",
          width: 200
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
          title: "状态",
          align: "center",
          key: "schoolStatus"
        },
        {
          title: "创建时间",
          align: "center",
          key: "admission_time"
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
                        path: "/organization/studentManage/studentDetail",
                        query: { id: params.row.id }
                      });
                    }
                  }
                },
                "查看"
              )
            ]);
          }
        }
      ],
      data1: []
    };
  },
  methods: {
    getList() {
      this.$post(studentList, this.page).then(result => {
        this.total = result.data.total;
        result.data.records.forEach(element => {
          element.xingname = element.xing + element.name;
        });
        this.data1 = result.data.records;
      });
      this.data1.length == 0
        ? (this.pageIsShow = false)
        : (this.pageIsShow = true);
    },
    lookStuFx() {
      this.$router.push({ path: "/organization/studentManage/lookStuFx" });
    },
    pageChange(e) {
      this.page.page = e;
      this.getList();
    }
  },
  mounted() {
    this.getList();
    // 当前sideBar的学院id和专业id，应该是动态的
    this.page.college_id = "f9c9be314b6846c49acafcf438506b69";
    this.page.specialty_id = "c12ba3bbda4a4ddda224df04c3c3e0f2";
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';

.tab {
  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }
}

.cont_box {
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
      background-color: #FFB752;
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
}
</style>

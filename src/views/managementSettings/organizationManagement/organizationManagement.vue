<template>
  <!-- 组织管理界面 -->
  <div id="organizationManagement">
    <div class="top">
      <div class="scgl" v-on:click="scgl($event)">手册管理</div>
      <div class="xsxxyj" @click="xsxxyj($event)">学生信息预警</div>
    </div>
    <div class="dis" v-show="datasc">
      <div class="title">
        <div class="span">学生手册</div>
        <div class="xssc"></div>
        <div class="xzgx">
          <a>下载</a>
          <a>更新</a>
        </div>
      </div>
      <div class="title1">
        <div class="span">教师手册</div>
        <div class="jssc"></div>
        <div class="xzgx">
          <a>下载</a>
          <a>更新</a>
        </div>
      </div>
    </div>
    <div class="student" v-show="dataxs">
      <div class="titlestudent">学生预警信息</div>
      <div class="studentcen">
        <span>学年：</span>
        <DatePicker
          type="year"
          v-model="paramsData.yearId"
          placement="bottom-end"
          @on-change="handleDatesChange"
          placeholder="请选择日期"
          style="width: 200px"
          format="yyyy"
          multiple
          class="dvs"
        ></DatePicker>
        <span class="sp1">学期：</span>
        <Select v-model="paramsData.semesterId" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span class="sp1">学院：</span>
        <Select v-model="paramsData.collegeId" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>专业：</span>
        <Select v-model="paramsData.specialtyId" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span class="sp1">不及格次数：</span>
        <Input v-model="paramsData.count" placeholder="请输入次数" style="width: 156px" />
        <button class="btn1">搜索</button>
        <button class="btn2">导出结果</button>
      </div>
      <div class="line"></div>
      <Table :columns="columns1" :data="data1"></Table>
      <div class="centers">
        <Page
          :total="total"
          :aria-current="paramsData.page"
          :page-size="paramsData.pageSize"
          @on-change="pageChange"
          show-total
          v-show="pageIsShow"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { organizationManagementList } from "api";
export default {
  data() {
    return {
      datasc: true,
      dataxs: false,
      total: 0,
      pageIsShow: true,
      paramsData: {
        yearId: "",
        semesterId: "",
        collegeId: "",
        specialtyId: "",
        count: 0,
        page: 1,
        pageSize: 10
      },
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
          title: "学院",
          align: "center",
          key: "college"
        },
        {
          title: "专业",
          align: "center",
          key: "specialty"
        },
        {
          title: "名称",
          align: "center",
          key: "name"
        },
        {
          title: "性别",
          align: "center",
          key: "sex"
        },
        {
          title: "累计次数",
          align: "center",
          key: "count"
        },
        {
          title: "创建时间",
          align: "center",
          key: "create_time"
        }
      ],
      data1: []
    };
  },
  methods: {
    getList() {
      this.$post(organizationManagementList, this.paramsData).then(result => {
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
    scgl(event) {
      event.target.style.color = "#3D568D";
      console.log(
        "document.getElementsByClassName()",
        document.getElementsByClassName("xsxxyj")
      );
      document.getElementsByClassName("xsxxyj")[0].style.color = "#333";
      this.dataxs = false;
      this.datasc = true;
    },
    xsxxyj(event) {
      this.getList();
      event.target.style.color = "#3D568D";
      document.getElementsByClassName("scgl")[0].style.color = "#333";
      this.dataxs = true;
      this.datasc = false;
    },
    handleDatesChange() {
      console.log("1", this.params);
      if (this.params.length > 2) {
        this.params.splice("1", 1);
      }
      console.log("this.param", this.params);
      let x = String(this.params[0]).slice(10, 15);
      console.log("1", x);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';

#organizationManagement {
  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .top {
    display: flex;
    width: 100%;
    height: 48px;
    background: #EEEEEE;

    .scgl {
      margin-left: 130px;
      font-size: 14px;
      line-height: 48px;
      color: #3D568D;
      cursor: pointer;
    }

    .xsxxyj {
      margin-left: 66px;
      font-size: 14px;
      line-height: 48px;
      cursor: pointer;
    }
  }

  .dis {
    margin-top: 38px;
    display: flex;

    .title {
      display: flex;
      flex-direction: column;
      margin-left: 130px;

      .span {
        width: 80px;
        height: 20px;
        font-siz: e $20;
        text-align: center;
        color: #333;
      }

      .xssc {
        margin-top: 14px;
        margin-bottom: 14px;
        height: 78px;
        width: 72px;
        bgImg('../../../assets/img/xusc.png', cover);
      }

      .xzgx {
        display: flex;
        justify-content: space-between;
        width: 80px;
        font-size: 14px;
      }
    }

    .title1 {
      margin-left: 158px;
      display: flex;
      flex-direction: column;

      .span {
        width: 80px;
        height: 20px;
        font-size: $20;
        text-align: center;
        color: #333;
      }

      .jssc {
        margin-top: 14px;
        margin-bottom: 14px;
        height: 78px;
        width: 72px;
        bgImg('../../../assets/img/jssc.png', cover);
      }

      .xzgx {
        display: flex;
        justify-content: space-between;
        width: 80px;
        font-size: 14px;
      }
    }
  }

  .student {
    margin: 35px auto 0;
    width: 998px;

    .titlestudent {
      margin: auto;
      width: 200px;
      height: 24px;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 10px;
    }

    .studentcen {
      margin-top: 50px;
      font-size: 14px;
      color: #333333;

      .sp1 {
        margin-left: 130px;
      }

      .dvs {
        margin-bottom: 22px;
      }

      .btn1 {
        margin-left: 175px;
        width: 90px;
        height: 30px;
        background: rgba(255, 183, 82, 1);
        border-radius: 2px;
        cursor: pointer;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
      }

      .btn2 {
        margin-left: 23px;
        width: 90px;
        height: 30px;
        background: rgba(111, 179, 224, 1);
        border-radius: 2px;
        cursor: pointer;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
      }
    }

    .line {
      margin-top: 8px;
      width: 998px;
      height: 2px;
      background: rgba(158, 170, 198, 1);
      border: 1px solid rgba(206, 216, 237, 1);
      display: flex;
      align-content: center;
    }
  }
}
</style>

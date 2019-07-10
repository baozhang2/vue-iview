<template>
  <!-- 系统日志界面 -->
  <div class="container">
    <div>
      <div class="searchDiv">
        <span class="label">操作人员：</span>
        <Input search placeholder="昵称（系统名）" />
      </div>
      <div class="searchDiv">
        <span class="label">操作时间：</span>
        <DatePicker type="date" placeholder="请选择" style="width: 200px"></DatePicker>
      </div>
      <div class="searchDiv">
        <span class="label">操作内容：</span>
        <Input search placeholder="支持模板搜索" />
      </div>
      <div class="searchBtn">
        <Button type="warning">查询</Button>
      </div>
    </div>
    <hr />
    <div class="tableShow">
      <Table :columns="columns" :data="data"></Table>
      <div class="centers">
        <Page :total="50" show-total />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let self = this;
    return {
      columns: [
        {
          title: "操作模块",
          key: "czmk"
        },
        {
          title: "操作人员",
          key: "czry"
        },
        {
          title: "IP",
          key: "ip"
        },
        {
          title: "操作时间",
          key: "czsj"
        },
        {
          title: "操作内容",
          key: "cznr"
        }
      ],
      data: [
        {
          czmk: "系统通知",
          czry: "系统管理员",
          ip: "192.168.1.1",
          czsj: "2019-07-02",
          cznr: "新建系统通知"
        },
        {
          czmk: "系统通知",
          czry: "系统管理员",
          ip: "192.168.1.1",
          czsj: "2019-07-02",
          cznr: "新建系统通知"
        },
        {
          czmk: "系统通知",
          czry: "系统管理员",
          ip: "192.168.1.1",
          czsj: "2019-07-02",
          cznr: "新建系统通知"
        },
        {
          czmk: "系统通知",
          czry: "系统管理员",
          ip: "192.168.1.1",
          czsj: "2019-07-02",
          cznr: "新建系统通知"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.searchDiv {
  width: 30%;
  display: inline-block;

  .ivu-input-wrapper {
    width: 60%;
  }
}

.searchBtn {
  width: 10%;
  display: inline-block;
}

hr {
  margin-top: 25px;
}

.tableShow {
  margin-top: 5px;

  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }
}
</style>

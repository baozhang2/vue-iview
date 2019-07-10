<template>
  <div id="minutes">
    <div class="top" v-if="showTable">
      <div class="add_btn fr clearfix" @click="showTable = false">+添加</div>
    </div>
    <!--表格-->
    <div class="tab" v-if="showTable">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    <!-- 添加会议纪要 -->
    <div class="container addAndEdit" v-else>
      <h4>添加会议纪要</h4>
      <!-- 添加会议纪要区 -->
      <div class="cont">
        <span class="lable">纪要名称:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">会议主题:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">会议地点:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">会议目的:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">参加人员:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">会议时间:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">上传文件:</span>
        <input class="file" v-model="data1.number" type="text">
        <button class="file_btn">选择文件</button>
        <input type="file" class="hide">
        <!-- 按钮盒子 -->
        <div class="edit-desc">
          <Button type="success" ghost @click="cancel">取消</Button>
          <Button type="success" class="submit" @click="submits">完成</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "minutes",
  data() {
    let self = this;
    return {
      showTable: true,
      columns1: [
        {
          title: "编号",
          align: "center",
          key: "number"
        },
        {
          title: "名称",
          width: 428,
          align: "center",
          key: "name"
        },
        {
          title: "上传时间",
          align: "center",
          key: "upload_date"
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
                        path: "/organization/chakanhuiyijiyao",
                        query: { id: params.row.id }
                      });
                    }
                  }
                },
                "查看"
              ),
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
          name: "关于2020年发展及招生计划的会议纪要2019/09/09",
          upload_date: "2019-09-09",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生计划的会议纪要2019/09/09",
          upload_date: "2019-09-09",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生计划的会议纪要2019/09/09",
          upload_date: "2019-09-09",
          upload_name: "周青玲"
        }
      ]
    };
  },
  methods: {
    cancel() {
      this.showTable = true;
    },
    submits () {}
    }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
#minutes
  .top
    overflow: hidden
    .add_btn
      width: 60px
      height: 30px
      line-height: 30px
      background-color: #F39800
      text-align: center
      margin: 27px 0 7px 7px
      font-size: $font14
      color: rgba(255, 255, 255, 1)
  .addAndEdit
    h4
      font-weight: bold
      font-size: $font16
      margin-bottom: 17px
    .cont
      background: #FAFAFA
      padding-top: 40px
      .lable
        margin-left: 66px
        margin-right: 8px
      .input
        font-size: $font14
        width: 420px
        background-color: #FFFFFF
        box-sizing: border-box
        padding: 5px 25px
        border: 1px solid $eee
        margin: 10px 0 10px
      .file
        font-size: $font14
        width: 286px
        background-color: #FFFFFF
        box-sizing: border-box
        padding: 5px 25px
        border: 1px solid $eee
        margin: 10px 0 10px
      .hide
        position: relative
        right: 122px
        opacity: 0
        z-index: 50
        width: 122px
        height: 33px
      .file_btn
        width: 122px
        height: 33px
        background: #6FB3E0
        margin-left: 12px
      .edit-desc
        margin-left: 66px
        margin-top: 111px
        padding-bottom: 65px
      .submit
        margin-left: 28px
</style>

<template>
  <div class="cont_box">
    <!-- tab栏 -->
    <div class="top" v-if="showTable">
      <button class="file_btn" @click="showTable=false">上传文件</button>
      <!-- <input type="file" class="hide"> -->
    </div>
    <!--表格-->
    <div class="tab" v-if="showTable">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    <div class="addAndEdit" v-else>
      <!-- 添加/编辑区 -->
      <div class="cont">
        <span class="lable">报告名称:</span>
        <input class="input" v-model="data1.number" type="text">
        <br>
        <span class="lable">上传文件:</span>
        <input class="file" v-model="data1.number" type="text">
        <button class="file_btn">选择文件</button>
        <input type="file" class="hide">
        <!-- 按钮盒子 -->
        <div class="edit-desc">
          <Button type="success" ghost @click="showTable=true">取消</Button>
          <Button type="success" class="submit" @click="submits">完成</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
          name: "关于2020年发展及招生报告",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生报告",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生报告",
          upload_date: "2019-09-09",
          type: "教学支持",
          upload_name: "周青玲"
        }
      ]
    };
  },
  methods: {
    submits () {}
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
.cont_box
  ul
    margin-top: 37px
    display: flex
    justify-content: flex-start
    border-bottom: 1px solid $navCol
    padding-bottom: 1px
    li
      width: 88px
      line-height: 30px
      text-align: center
      cursor: pointer
      a
        width: 100%
        display: block
        border-top-right-radius: 20px
        border: 1px solid $navCol
        color: $navCol
        font-size: $font14
  .router-link-exact-active
    background-color: $navCol !important
    color: $white !important
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
    .Inquire
      width: 102px
      height: 30px
      line-height: 30px
      border: 1px solid #EEEEEE
      text-align: center
      margin: 27px 0 7px 7px
      font-size: $font14
      color: #999999
    .hide
      position: relative
      right: 90px
      opacity: 0
      z-index: 50
      width: 90px
      height: 30px
    .file_btn
      width: 90px
      height: 30px
      background-color: #6FB3E0
      color: #FFFFFF
      margin: 27px 0 7px
  .addAndEdit
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
        margin-top: 51px
        padding-bottom: 65px
      .submit
        margin-left: 28px
</style>

<template>
  <div class="cont_box container">
    <!-- tab栏 -->
    <ul>
      <li v-for="(item, index) in visionList" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <div class="top" v-if="showTable">
      <button class="file_btn" @click="showTable = false">上传文件</button>
      <!-- <input type="file" class="hide"> -->
      <div class="add_btn fr clearfix" @click="showTable = false">查询</div>
      <input type="text" class="Inquire fr clearfix" placeholder="请输入关键字">
    </div>
    <!--表格-->
    <div class="tab" v-if="showTable">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    <div class="addAndEdit" v-else>
      <!-- 添加/编辑区 -->
      <div class="cont">
        <span class="lable">文件名称:</span>
        <input class="input" v-model="report.name" type="text">
        <br>
        <span class="lable">学年:</span>
        <Select v-model="modelSelect" style="width:200px;margin-left: 32px;">
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
        <br />
        <br />
        <span class="lable">文件类别:</span>
        <Select v-model="modelSelect1" style="width:200px">
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
        <br />
        <span class="lable">上传文件:</span>
        <input class="file" v-model="report.file" type="text">
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
    let self = this
    return {
      report: {
        name: '',
        file: ''
      },
      modelSelect: '',
      modelSelect1: '',
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
          xuenian:'2017学年',
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type:'教学支持',
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian:'2017学年',
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type:'教学支持',
          upload_name: "周青玲"
        },
        {
          number: 100021,
          xuenian:'2017学年',
          name: "关于2020年发展及招生计划",
          upload_date: "2019-09-09",
          type:'教学支持',
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

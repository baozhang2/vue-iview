<template>
  <div id="desction" class="container">
    <!-- 展示 -->
    <div v-if="descEdit">
    <h4>{{descTitle}}</h4>
      <div class="desc-contents" v-if="!collegeList.collegeDescribe">暂无描述</div>
      <div class="desc-contents" v-else v-html="collegeList.collegeDescribe"></div>
      <div class="edit-desc">
        <Button type="error" @click="descChanged">编辑</Button>
      </div>
    </div>
    <!-- 编辑 -->
    <div v-else>
      <div class="addAndEdit" >
      <!-- 添加/编辑区 -->
      <h5 class="title">编辑计划</h5>
      <div class="bg">
        <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="计划说明:" >
                <i-input :value.sync="formItem.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="计划说明……"></i-input>
            </Form-item>
            <Form-item label="附件:">
                <i-input :value.sync="formItem.enintrdu" style="width:50%"></i-input>
               <Upload
                  multiple
                  action="//jsonplaceholder.typicode.com/posts/">
                  <i-button  style="line-height:16px;background:rgba(111,179,224,1);border-radius:2px;color:#fff;">选择文件</i-button>
              </Upload>
            </Form-item>
        </i-form>
          <div class="word">2017计算机考试评估总结报告<i class="download"></i><i class="del"></i></div>
        <button class="cancel" @click="cancel">取消</button>
        <button class="save" @click="save">保存</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { collegebyId, collegeDesc } from "api";
import { msg } from "utils/js/utils";
import { setTimeout } from "timers";
export default {
  name: "desction",
  data() {
    return {
      college: {},
      descTitle: "计划说明",
      formItem: {
                intrdu: '',
                enintrdu: '',
                desc: '',
                endesc: ''
            },
      descEdit: true,
      describe: "",
      reDescribe: ""
    };
  },
  computed: {
    ...mapGetters({
      collegeList: "collegeList"
    })
  },
  methods: {
    // 编辑按钮
    cancel () {
      },
      save () {
      },
    descChanged() {
      this.descEdit = false;
    },
    // 取消编辑
    cancelEdit() {
      this.descEdit = true;
      this.descTitle = "描述";
      this.collegeList.collegeDescribe = this.reDescribe; // 用户取消后给数据赋值
    },
    // 提交编辑描述的表单
    submitDesc() {
      this.descEdit = true;
      this.descTitle = "描述";

      // 编辑描述的
      this.$post(collegeDesc, {
        describe: this.collegeList.collegeDescribe,
        id: this.collegeList.id
      }).then(res => {
        msg(this, "success", "编辑成功");
      });
    }
  }
};
</script>
<style>
#desction .ivu-upload{
  display: inline-block;
  margin-left: 10px;
  border-radius: 4px;
}
</style>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
#desction
  .addAndEdit
    .title
        font-size $font16
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:48px;
    .bg
        background:rgba(250,250,250,1);
        width:892px;
        padding: 40px 50px
        button
            padding 1px 20px;
            border-radius:4px;
            font-size:14px;
            font-weight:500;
            line-height:38px;
            margin-right:29px;
            cursor pointer
        .cancel
            background:rgba(255,255,255,1);
            border:1px solid rgba(135,184,127,1);
            color:rgba(135,184,127,1)
        .save
            background:rgba(135,184,127,1);
            color:rgba(255,255,255,1)
        .saveAndAdd
            width:151px;
            background:rgba(255,183,82,1);;
            color:rgba(255,255,255,1)
        .word
            margin-left 82px
            margin-bottom 30px
            font-size:16px;
            font-weight:bold;
            color:rgba(61,86,141,1);
            i
              display inline-block
              width 12px
              height 12px
              cursor pointer
            .download
              margin-left 21px
              bgImg('../../../assets/img/download.png', cover)
            .del
              margin-left 13px
              bgImg('../../../assets/img/del.png', cover)
  h4
    font-size $font16
    color $timeCol
    margin-bottom 22px
    font-weight bold
  .desc-contents, .edit-container
    font-size $font14
    line-height $font20
    text-indent 30px
  .edit-desc
    margin-top 34px
  .edit-container
    text-indent 0
    width 992px
    textarea
      width 100%
      word-break break-all
      height 398px
      background-color $navBarColor
      box-sizing border-box
      padding 35px 21px
      border 1px solid $eee
      border-radius 4px
      resize none
      outline none
  .submit
    margin-left 28px
</style>

<template>
  <div id="desction" class="container">
    <!-- 展示 -->
    <div v-if="descEdit" style="position:relative;">
      <Spin fix v-if="spinShow">
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load" style="animation: ani-demo-spin 1s linear infinite;"></Icon>
        <div>Loading</div>
      </Spin>
      <div class="desc-contents" v-if="!collegeDescribe">暂无描述</div>
      <div class="desc-contents" v-else v-html="collegeDescribe"></div>
      <div class="edit-desc">
        <Button type="error" @click="descChanged">编辑</Button>
      </div>
    </div>
    <!-- 编辑 -->
    <div v-else>
      <div class="desc-contents edit-container">
        <textarea v-model="collegeDescribe" placeholder="请输入描述..."></textarea>
      </div>
      <div class="edit-desc">
        <Button type="success" ghost @click="cancelEdit">取消</Button>
        <Button type="success" class="submit" @click="submitDesc">完成</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { msg } from "utils/js/utils";
import { setTimeout } from "timers";
export default {
  name: "desction",
  data() {
    return {
      spinShow: false,
      collegeDescribe: '',
      college: {},
      descTitle: "描述",
      descEdit: true,
      describe: "",
      reDescribe: ""
    };
  },
  computed: {
  },
  methods: {
    query(){
        this.spinShow = true;
        this.$post('/certificationStandards/getCertificationStandards', {}).then(
            result => {
              console.log('dsadasd', result)
              if (result.code == '100'){
                this.spinShow = false;
                this.collegeDescribe = result.data.standardContentEnglish
              } else {
                this.spinShow = false;
              }
            }
        )
    },
    // 编辑按钮
    descChanged() {
      this.descEdit = false;
    },
    // 取消编辑
    cancelEdit() {
      this.descEdit = true;
    },
    // 提交编辑描述的表单
    submitDesc() {
      this.descEdit = true;
      // // 编辑描述的
      // this.$post('', {
      //   describe: this.collegeList.collegeDescribe,
      //   id: this.collegeList.id
      // }).then(res => {
      //   msg(this, "success", "编辑成功");
      // });
    }
  },
  mounted(){
    this.query()
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
#desction
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

<template>
  <div id="desction" class="container">
    <h4>{{descTitle}}</h4>
    <!-- 编辑 -->
    <div>
      <div class="desc-contents edit-container">
        <textarea v-model="collegeList.collegeDescribe" placeholder="请输入描述..."></textarea>
      </div>
      <div class="edit-desc">
        <Button type="success" ghost @click="cancelEdit">取消</Button>
        <Button type="success" class="submit" @click="submitDesc">保存</Button>
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
      descTitle: "编辑培养愿景",
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
  mounted: function () {
      this.descEdit = false;
      this.reDescribe = JSON.parse(JSON.stringify(this.collegeList.collegeDescribe)); // 拷贝一份防止用户取消双相绑定改变
  },
  methods: {
    // 取消编辑
    cancelEdit() {
      this.descEdit = true;
      this.descTitle = "描述";
      this.collegeList.collegeDescribe = this.reDescribe; // 用户取消后给数据赋值
      this.$router.replace('/achievements/outcome')
    },
    // 提交编辑描述的表单
    submitDesc() {
      this.descEdit = true;
      this.descTitle = "描述";
      let _this = this
      // 编辑描述的
      this.$post(collegeDesc, {
        describe: this.collegeList.collegeDescribe,
        id: this.collegeList.id
      }).then(res => {
        msg(this, "success", "编辑成功");
        _this.$router.push('/achievements/outcome')
      });
    }
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

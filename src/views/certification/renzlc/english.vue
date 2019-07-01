<template>
  <div id="desction" class="container">
    <!-- 展示 -->
    <div v-if="descEdit">
      <div class="desc-contents" v-if="!collegeList.collegeDescribe">暂无描述</div>
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
import { mapGetters } from "vuex";
import { collegebyId, collegeDesc } from "api";
import { msg } from "utils/js/utils";
import { setTimeout } from "timers";
export default {
  name: "desction",
  data() {
    return {
      collegeDescribe: 'Chinese President Xi Jinping here on Friday called on the Group of 20 (G20) major economies to explore driving force for growth, improve global governance, remove development bottlenecks, and properly address differences.',
      college: {},
      descTitle: "描述",
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
    descChanged() {
      this.descEdit = false;
      this.reDescribe = JSON.parse(JSON.stringify(this.collegeList.collegeDescribe)); // 拷贝一份防止用户取消双相绑定改变
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
      this.$post('', {
        describe: this.collegeList.collegeDescribe,
        id: this.collegeList.id
      }).then(res => {
        msg(this, "success", "编辑成功");
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

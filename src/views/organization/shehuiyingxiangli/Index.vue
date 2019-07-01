<template>
  <div id="index">
    <!-- 愿景 -->
    <div class="details container" v-if="showDetails">
      <!-- 列表 -->
      <ul>
        <li v-for="(item, index) in detilsList" :key="index">
          <!-- 标题 -->
          <div class="titles-container">
            <h6>{{item.title}}</h6>
            <div class="icon-flag">
              <Icon
                @click="editDetails(item)"
                :size="fontSize"
                :color="iconColor"
                type="ios-create-outline"
              />
              <Icon
                @click="delDetails(item.id)"
                :size="fontSize"
                :color="iconColor"
                type="ios-trash-outline"
              />
            </div>
          </div>
          <!-- 内容 -->
          <div class="content-container">{{item.content}}</div>
        </li>
      </ul>
      <!-- 添加按钮 -->
      <Button type="warning" @click="showDetails = false">
        <Icon type="md-add" style="vertical-align:sub;" size="16"/>添加
      </Button>
    </div>
    <!-- 添加/编辑社会影响力 -->
    <div class="container addAndEdit" v-else>
      <h4>添加/编辑社会影响力</h4>
      <input v-model="details.title" type="text" placeholder="请填写标题">
      <textarea v-model="details.content" placeholder="请填写内容"></textarea>
      <!-- 按钮盒子 -->
      <div class="edit-desc">
        <Button type="success" ghost @click="cancel">取消</Button>
        <Button type="success" class="submit" @click="submits">完成</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    name:'index',
    data() {
      return {
        detilsList:[
          {
            id:1,
            title:"1、培养国际化的人才",
            content:`长江商学院企业家学者项目（DBA）课程是长江商学院的学位项目。作为商学院教育的新十年创新之作，长江商学院企业家学者项目（DBA）的愿景是成就转型时期新商业文明的思想者和引领者。长江商学院企业家学者项目（DBA）整合全球优质教育资源，深刻洞察全球经济转型与发展，大势与规律，以定制化专题研究系列和实践案例为载体，打造极具前沿性和系统性课程体系，`
          },
          {
            id:2,
            title:"2、培养国际化的人才",
            content:`长江商学院企业家学者项目（DBA）课程是长江商学院的学位项目。作为商学院教育的新十年创新之作，长江商学院企业家学者项目（DBA）的愿景是成就转型时期新商业文明的思想者和引领者。长江商学院企业家学者项目（DBA）整合全球优质教育资源，深刻洞察全球经济转型与发展，大势与规律，以定制化专题研究系列和实践案例为载体，打造极具前沿性和系统性课程体系，`
          }
        ],
        fontSize:20,
        iconColor:'#9EAAC6',
        showDetails:true, // 控制编辑或者是添加的状态
        details:{
          title:'',
          content:''
        },
        copyDetails:[],
        editId:''
      }
    },
    methods: {
      editDetails(item) {
        this.editId = item.id;
        this.details = item; // 给input赋值
        this.copyDetails = JSON.parse(JSON.stringify(this.detilsList)); // 深拷贝一个 防止用户取消双向绑定改变
        this.showDetails = false;
      },
      submits () {
        if (this.details.title && this.details.content) {
          if (this.editId) {
            // 如果有值说明是编辑
            this.copyDetails.forEach(el => {
              if (el.id == this.editId) {
                el.title = this.details.title;
                el.content = this.details.content;
              }
            })

            this.detilsList = this.copyDetails
            this.editId = ''
          } else {
            // 如果没值 就是新加
            this.detilsList.push(this.details);
          }
          this.showDetails = true;
        }
      },
      cancel() {
        this.showDetails = true;
      },
      delDetails(id) {
        this.detilsList.splice(this.detilsList.findIndex(el => el.id == id), 1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin'
#index
  margin-top 45px
  .details
    ul
      li
        .titles-container
          display flex
          justify-content space-between
          padding-bottom 9px
          border-bottom 1px solid $eee
          font-weight bold
        .content-container
          margin 19px 0 37px
          line-height 24px
          text-indent 30px
          font-size $font14
        .ivu-icon
          font-weight bold
          padding 0 5px
          cursor pointer
  .addAndEdit
    h4
      font-weight bold
      font-size $font16
    input, textarea
      display block
      font-size $font14
      width 100%
      background-color $navBarColor
      box-sizing border-box
      padding 14px 25px
      border 1px solid $eee
      border-radius 4px
      margin 18px 0 27px
    textarea
      padding 21px 25px
      height 247px
      outline none
      resize none
      line-height $font20
    .submit
      margin-left 28px
</style>

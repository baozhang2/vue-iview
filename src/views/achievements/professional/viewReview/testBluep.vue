<template>
  <div class="container" id="baseInfo">
    <div class="xiahuaxian">
      <div class="title" style="width:123px;line-height:36px;height:36px">毕业要求</div>
    </div>
    <div class="table">
      <i-table border :columns="columns1" :data="data1"></i-table>
    </div>
    <div class="xiahuaxian">
      <div class="title">评价量规</div>
    </div>
    <span v-for="(item,key) in personList" :key="key" class="name">{{item}}</span>
  </div>
</template>
<script>
import "echarts/lib/chart/scatter";
import { studentGrade } from "utils/js/echar_options";
export default {
  data() {
    return {
      personList: ['Minimum：50%', 'Partially Met：60%', 'Met：70%', 'Exceed Met ：80%', 'Maximum：90%'],
      columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
    };
  },
  mounted() {},
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin'
#baseInfo
  padding 40px 70px 200px
  h4
    font-size $font24
    font-weight bold
    color $titleCol
    line-height $font24
    margin-bottom 35px
    text-align center
  .xiahuaxian
    width: 100%;
    border-bottom: 1px solid $navCol;
    padding-bottom: 1px;
    .title
      width: 88px;
      height: 30px;
      line-height: 30px;
      background-color:rgba(136,171,218,1);
      border: 1px solid $navCol;
      color: #ffffff;
      text-align: center;
      font-size: $font14;
  .name
    display inline-block
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:15px;
    margin 24px 37px 0 0
  .jibenxinxi
    width: 100%;
    margin-bottom: 50px;
    .explain
      display flex
      vertical-align top
      margin-top 20px
      font-size $font14
      span
        font-size $font15
        margin-right 10px
      .intrdu
        width 85%
        word-break: break-all;
        background-color: #fafafa;
        box-sizing: border-box;
        padding: 15px 120px 15px 15px;
        line-height 24px;
        border: 1px solid #eee;
        border-radius: 4px;
        resize: none;
        outline: none;
    .studentXinxi
      display: inline-block;
      font-weight: bold;
      font-size: $font14;
      .label
        display: inline-block;
        width: 33%;
        height: 50px;
        line-height: 50px;
  .table
    margin 20px 0 50px
</style>

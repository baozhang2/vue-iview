<template>
  <div id="home">
    <div class="count-list container">
      <ul>
        <li v-for="(item,index) in countList" :key="index" :style="`background-color:${item.bgc}`">
          <div class="count-icon">
            <i class="iconfont" :style="`color:${item.color};`" v-html="item.icon"></i>
          </div>
          <div class="count-detail">
            <p class="count" :style="`color:${item.color};font-weight:bold;`">{{item.count}}</p>
            <p class="count-name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 图表 -->
    <div class="container look-data">
      <ul>
        <li>
          <h4>最新认证进度</h4>
          <div ref="schedule"></div>
        </li>
        <li>
          <h4>平台文档上传数量</h4>
          <div ref="count"></div>
        </li>
        <li>
          <h4>个人评价增加趋势</h4>
          <div ref="tendency"></div>
        </li>
      </ul>
    </div>
    <!-- 列表 -->
    <div class="container list">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          <h4>{{item.title}}</h4>
          <Table :columns="columns1" :data="item.data"></Table>
        </li>
        <!-- 系统消息 -->
        <li>
          <h4>系统消息</h4>
          <section>
            <Timeline>
              <TimelineItem v-for="(item,index) in timeList" :key="index">
                <p class="time clearfix">
                  <span>{{item.title}}</span>
                  <span class="fr date">{{item.date}}</span>
                </p>
                <p class="content">{{item.details}}</p>
              </TimelineItem>
            </Timeline>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入折线图。
import "echarts/lib/chart/line";
import { schedule, count, tendency } from "utils/js/echar_options";
export default {
  name: "home",
  data() {
    return {
      countList: [
        {
          count: "2,000",
          icon: "&#xe622;",
          name: "课程数量",
          bgc: "#F3FAEF",
          color: "#8ECD65"
        },
        {
          count: "20,090",
          icon: "&#xe61e;",
          name: "文件数量",
          bgc: "#FBEEEA",
          color: "#DA5430"
        },
        {
          count: "20,040",
          icon: "&#xe620;",
          name: "评价数量",
          bgc: "#F7EDF4",
          color: "#AF4E96"
        }
      ],
      lists: [
        {
          title: "课程列表",
          data: [
            {
              allPeople: "John Brown",
              name: "计算机2018级",
              createTime: "2016-10-03"
            },
            {
              allPeople: "Jim Green",
              name: "计算机2018级",
              createTime: "2016-10-01"
            },
            {
              allPeople: "Joe Black",
              name: "计算机2018级",
              createTime: "2016-10-02"
            },
            {
              allPeople: "Jon Snow",
              name: "计算机2018级",
              createTime: "2016-10-04"
            },
            {
              allPeople: "John Brown",
              name: "计算机2018级",
              createTime: "2016-10-03"
            },
            {
              allPeople: "Jim Green",
              name: "计算机2018级",
              createTime: "2016-10-01"
            },
            {
              allPeople: "Joe Black",
              name: "计算机2018级",
              createTime: "2016-10-02"
            },
            {
              allPeople: "Jon Snow",
              name: "计算机2018级",
              createTime: "2016-10-04"
            }
          ]
        },
        {
          title: "评价列表",
          data: [
            {
              allPeople: "John Brown",
              name: "计算机2018级",
              createTime: "2016-10-03"
            },
            {
              allPeople: "Jim Green",
              name: "计算机2018级",
              createTime: "2016-10-01"
            },
            {
              allPeople: "Joe Black",
              name: "计算机2018级",
              createTime: "2016-10-02"
            },
            {
              allPeople: "Jon Snow",
              name: "计算机2018级",
              createTime: "2016-10-04"
            },
            {
              allPeople: "John Brown",
              name: "计算机2018级",
              createTime: "2016-10-03"
            },
            {
              allPeople: "Jim Green",
              name: "计算机2018级",
              createTime: "2016-10-01"
            },
            {
              allPeople: "Joe Black",
              name: "计算机2018级",
              createTime: "2016-10-02"
            },
            {
              allPeople: "Jon Snow",
              name: "计算机2018级",
              createTime: "2016-10-04"
            }
          ]
        }
      ],
      columns1: [
        {
          title: "专业名称",
          key: "name"
        },
        {
          title: "所属人",
          key: "allPeople"
        },
        {
          title: "创建时间",
          key: "createTime"
        }
      ],
      timeList: [
        {
          title: "端午节放假通知",
          date: "2019-05-29",
          details:
            "consectetur adipiscing elit. Aenean euismod bibendum laoreet.……"
        },
        {
          title: "端午节放假通知",
          date: "2019-05-29",
          details:
            "consectetur adipiscing elit. Aenean euismod bibendum laoreet.……"
        },
        {
          title: "端午节放假通知",
          date: "2019-05-29",
          details:
            "consectetur adipiscing elit. Aenean euismod bibendum laoreet.……"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(e => {
      this.$echarts(this.$refs.schedule, schedule);
      this.$echarts(this.$refs.count, count);
      this.$echarts(this.$refs.tendency, tendency);
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../utils/styl/mixin'
#home
  .count-list
    margin-top 24px
    background $white
    box-sizing border-box
    padding 14px 18px
    border-radius 2px
    ul
      display flex
      justify-content flex-start
      li
        width 200px
        height 72px
        display flex
        justify-content flex-start
        align-items center
        margin-right 37px
        box-sizing border-box
        padding 16px 20px
        cursor pointer
        .count-icon
          width 32px
          height 28px
          i
            font-size 30px
        .count-detail
          margin-left 20px
          .count
            margin-bottom 8px
            font-size $font18
  .look-data, .list
    margin-top 13px
    ul
      display flex
      justify-content space-between
      li
        margin-right 11px
        width 390px
        height 360px
        background-color $white
        h4
          font-size 20px
          color $navActive
          padding-left 8px
          border-left 4px solid $titleBor
          margin-top 14px
          margin-left 13px
        &:last-child
          margin-right 0
        div
          box-sizing border-box
          padding 0 15px 10px
          width 100%
          height 320px
  .list
    overflow hidden
    h4
      font-size $font16 !important
      margin-bottom 10px
    div
      padding 0 !important
    section
      ul
        padding 28px 25px
        display flex
        flex-direction column
        li
          height 100px
          width 100%
    .time
      font-size $font16
      color $titleCol
      .date
        font-size $font12
        color $timeCol
    .content
      margin-top 20px
      font-size $font14
      width 100%
      line-height 18px
</style>

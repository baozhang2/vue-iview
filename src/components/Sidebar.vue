<template>
  <div id="sidebar" :style="`transform:translateX(${sideBarShow ? 0 : - 179}px)`">
    <!-- 列表导航 -->
    <nav class="navs">
      <!-- 图标导航 -->
      <ul class="sideBar-icon">
        <li class="iconfont" v-for="(icon, index) in iconNav" :key="index">
          <router-link :to="icon.path" :style="`color:${icon.color};`" v-html="icon.icon"></router-link>
        </li>
      </ul>

      <!-- list导航 -->
      <ul class="nav-list">
        <!-- 学院 -->
        <li
          class="college"
          v-for="(item,index) in collegeListsArr"
          :key="index"
          :title="item.collegeName"
          @click="selectList($event, index, item)"
        >
          <Icon type="md-star" size="20" color="#AF4E96"/>
          {{item.collegeName}}
          <i class="arrowDown" ref="rotateDom">
            <Icon type="ios-arrow-down"/>
          </i>
          <ul class="major" ref="major">
            <!-- 专业 -->
            <li
              v-for="(data, key) in item.specialtyLists"
              :key="key"
              :title="data.fullName"
            >{{data.shortenedName}}</li>
          </ul>
        </li>
      </ul>
      <!-- 成果菜单 -->
      <div class="result" v-if="isResult">成果菜单</div>
    </nav>
    <!-- 更新视图触发生命周期，别动 -->
    <span style="opacity:0">{{routerPath}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { collegeList, specialtyList } from "api";
import { Promise, reject } from "q";
export default {
  name: "sidebar",
  data() {
    return {
      theme2: "light",
      iconNav: [
        {
          icon: "&#xe616;",
          path: "/1",
          color: "#87B87F"
        },
        {
          icon: "&#xe618;",
          path: "/2",
          color: "#6FB3E0"
        },
        {
          icon: "&#xe617;",
          path: "/3",
          color: "#FFB752"
        },
        {
          icon: "&#xe61c;",
          path: "/4",
          color: "#D15B47"
        }
      ],
      collegeListsArr: [],
      isResult: false
    };
  },
  methods: {
    // 获取学院和专业 ---> 由于数据结构比较恶心 我只能拓展js的原型对象，向原型对象添加方法
    getxueyuan() {
      this.$get(collegeList).then(({ data }) => {
        data.forEach((item, index) => {
          this.$get(specialtyList, { collegeId: item.id }).then(
            ({ data: getArr }) => {
              item.specialtyLists = getArr;
              this.collegeListsArr.push(item);
            }
          )
          .then(res => {
            // 触发默认描述
            this.$store.commit("COLLEFELIST", this.collegeListsArr[0]);
          })
        });
      })
    },
    // 自定义下拉的效果
    selectList({ target }, index, item) {
      // 触发vuex 改变描述等
      this.$store.commit("COLLEFELIST", item); // 设置vuex

      // 下拉效果
      let len = this.$refs.major[index].children.length;
      if (len > 0) {
        if (
          this.$refs.major[index].id == "active" &&
          target.className == "college"
        ) {
          this.$refs.major[index].style.height = `0px`;
          this.$refs.major[index].id = "";
          this.$refs.rotateDom[index].style.transform = `rotate(0deg)`;
          return false;
        }
        this.$refs.major[index].style.height = `${len * 49}px`;
        this.$refs.major[index].id = "active";
        this.$refs.rotateDom[index].style.transform = `rotate(180deg)`;
      }
    }
  },
  computed: {
    ...mapGetters({
      sideBarShow: "sideBarShow",
      routerPath: "routerPath"
    })
  },
  updated() {
    this.routerPath == "/achievements"
      ? (this.isResult = true)
      : (this.isResult = false);
  },
  mounted() {
    this.getxueyuan();
  }
};
</script>

<style lang="stylus" scoped>
@import '../utils/styl/mixin'
@import '../utils/styl/replace'
#sidebar
  width 179px
  positCenter(0, 48px, 0, auto, 0, 0)
  transition 0.5s all
  .navs
    height 100%
    background-color $sideBar
    .nav-list
      border-bottom 1px solid $eee
      .major
        height 0
        transition all 0.3s
      .college, .major li
        box-sizing border-box
        padding 0px 16px
        line-height 43px
        border-top 1px solid $eee
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        cursor pointer
        vertical-align sub
        &:hover
          background-color $white
          transition all 0.2s ease-in-out
      .arrowDown
        position absolute
        right 15px
        transition all 0.3s
  .sideBar-icon
    border-right 1px solid #ccc
    display flex
    justify-content space-around
    padding 10px 12px 6px 28px
    border-bottom 1px solid $eee
    li
      font-size 32px
      margin 0 1.5px
// 字体图标星星
.ivu-icon-md-star
  vertical-align sub
</style>

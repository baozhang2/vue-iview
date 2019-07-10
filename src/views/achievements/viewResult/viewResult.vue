<template>
    <div>
        <h4 class="title">学院成果查看</h4>
        <div class="cont_box container">
            <!--表格-->
            <div class="addAndEdit" >
                <!-- 添加/编辑区 -->
                <h5 class="title1">{{descTitle}}</h5>
                <div class="line"></div>
                <div v-for="(item,key) in List" :key="key" class="List">
                    <div class="major">{{item}}</div>
                    <div class="box">
                        <div class="subject">
                            <div class="issue">1.理解计算及的运行原理</div>
                            <div class="report" @click="toAnaEva">达成度评价及分析</div>
                        </div>
                         <div class="line1"></div>
                        <div class="subject">
                            <div class="issue">2.至少掌握一门编程技术</div>
                            <div class="report" @click="toAnaEva">达成度评价及分析</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
    type: '',
    formLeft: {
                intrdu: '',
                enintrdu: '',
                desc: '',
                endesc: ''
            },
      showTable: true,
      descTitle: '培养目标：培养社会主义的接班人',
      List: ['1.计算及学院专业', '2.自动化专业', '3.MBA', '4.MBA']
    };
  },
  methods: {
      cancel () {
          this.$router.replace('/achievements/outcome')
      },
      save () {
          this.$router.push('/achievements/outcome')
      },
      saveAndAdd () {
      },
      toAnaEva () {
          this.$router.push('/achievements/viewResult/detail')
      }
  },
  mounted () {
      this.type = this.$route.query.type || 'add'
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';
.title {
    font-size $font24
    text-align center
    color rgba(51,51,51,1)
    font-weight 500
    letter-spacing 2px
}
.cont_box {

  .addAndEdit {
    .title1 {
        font-size $font18
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:48px;
    }
    .line {
        margin-top 7px;
        width:997px;
        height:1px;
        background:rgba(238,238,238,1);
    }
    .List {
        margin-bottom 57px;
        .major {
            margin 20px 0;
            font-size:16px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:27px;
        }
        .box {
            width:911px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(238,238,238,1);
            padding 10px 70px 10px 16px;
            .subject {
                display flex
                justify-content space-between
                align-items center
                font-size 14px
                line-height 30px
                .report {
                    text-decoration:underline;
                    color:rgba(108,131,180,1);
                    cursor pointer
                    letter-spacing 1px
                }
            }
            .line1 {
                margin 7px 0;
                height:1px;
                background:rgba(238,238,238,1);
            }
        }
    }
  }
}
</style>

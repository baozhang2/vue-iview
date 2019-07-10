<template>
        <div>
            <div id="outcome" class="container">
            <h4 class="title">商学院</h4>
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">培养愿景</button>
                    <button class="edit" @click="edit">编辑</button>
                </div>
                <p class="content" v-html="collegeList.collegeDescribe">
                </p>
            </div>
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">培养愿景</button>
                    <button class="edit" @click="edit">编辑</button>
                </div>
                <p class="content" v-html="collegeList.collegeDescribe">
                </p>
            </div>
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">培养目标</button>
                    <div>
                        <button class="add" @click="addTrainObj">+添加</button>
                        <button class="scanRep" @click="scanRep">查看报告</button>
                    </div>
                </div>
                <div class="language">
                    <div class="chinese">
                        中文版
                    </div>
                    <div class="en">
                        英文版
                    </div>
                </div>
                <div class="reportList" v-for="(item,key) in 3" :key="key">
                    <div class="left">
                        <div class="reportName">
                            培养计算高级人才
                            <i class="edit" @click="modify"></i>
                            <i class="del" @click="delModal = true"></i>
                        </div>
                        <div class="intrdu">
                            培养一批计算机的高级人才，为社会主义现代化做建设
                        </div>
                    </div>
                    <div class="right">
                        查看报告
                    </div>
                </div>
                <button class="bottomCopy" @click="copy">复制</button>
            </div>
        </div>
        <div v-if="false">
            <div id="outcome" class="container">
                <h4 class="title">本年级没有成果，是否现在创建并编辑？</h4>
            </div>
            <div class="btn">
                <button class="btn1" @click="copy">复制</button>
                <button class="btn2" @click="create">创建</button>
            </div>
        </div>
        <modal
            title="复制成果"
            :content='modalContent'
            @on-confirm='confirm'
            @on-close='close'
            @on-cancel='cancel'
            @on-change='change'
            :confirmText='confirmText'
            :cancleText='cancleText'
            v-show='showModal'>
        </modal>
        <delModal
            title="是否删除该数据？"
            :content="content"
            @on-confirm="confirm1"
            @on-close="close1"
            @on-cancel="cancel1"
            v-show="delModal"
        ></delModal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data () {
    return {
        delModal:false,
        content:'删除数据将无法恢复',
      modalContent: '请点击窗口右上角发送到好友或朋友圈来赠送给好友',
      showModal: false,
      cancleText: '复制',
      confirmText: '创建'
    }
  },
    methods: {
        confirm1() {
            this.delModal = false;
            console.log('111');
        },
        close1() {
            this.delModal = false;
        },
        cancel1() {
            /* 确认删除执行的方法 */
            this.delModal = false;
        },
        change (data) {
            console.log(data)
        },
        create () {
        },
        copy () {
            this.showModal = true
        },
        cancel () {
            this.showModal = true
        },
        confirm () {
        },
        close () {
            this.showModal = false
        },
        modify () {
           this.$router.push({
                path:'/achievements/addTrainObj',
                query: {
                    type: 'modify'
                }
            })
        },
        edit () {
            this.$router.push({
                path:'/achievements/desc'
            })
        },
        addTrainObj () {
           this.$router.push({
                path:'/achievements/addTrainObj'
           })
        },
        scanRep () {
            this.$router.push({
                path:'/achievements/viewResult'
           })
        }
    },
    computed: {
        ...mapGetters({
        collegeList: "collegeList"
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';
  #outcome
    margin 30px auto 50px
    .title
        font-size $font24
        text-align center
        color rgba(51,51,51,1)
        font-weight 500
    .mg_t
        margin 45px 0 46px 0
        .content
            margin-top 25px
            font-size $font14;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:25px;
        .line
            border-bottom 1px solid rgba(108,131,180,1)
            padding-bottom 2px
            display flex
            justify-content space-between
            button
                font-weight:500;
                color:rgba(255,255,255,1);
            .beauty
                width:92px;
                height:36px;
                background:rgba(108,131,180,1);
                font-size $font16
                line-height:36px;
            .edit
                width 60px;
                height 30px;
                background rgba(209,91,71,1)
                border-radius 4px
                font-size $font14
                line-height 30px
                cursor pointer
            .add
                width:60px;
                height:30px;
                background rgba(243,152,0,1);
                border-radius 4px;
                font-size $font14
                color #fff;
                line-height 30px
                margin-right 30px
                cursor pointer
            .scanRep
                width:90px;
                height:30px;
                background:rgba(135,184,127,1);
                border-radius:4px;
                font-size $font14;
                color:rgba(255,255,255,1);
                line-height 30px;
                cursor pointer
        .language
            margin 30px 0 5px 0
            display flex
            div
                width:92px;
                border-radius:0px 20px 0px 0px;
                line-height 36px
                text-align center
                font-size $font14
                cursor pointer
            .chinese
                background:rgba(175,78,150,1);
                margin-right 1px
            .en
                background:rgba(255,255,255,1)
                border:1px solid rgba(158,170,198,1);
        .reportList
            margin-bottom 10px
            padding 0 90px 0 10px
            width:989px;
            height:88px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(238,238,238,1);
            display flex
            justify-content space-between
            align-items center
            .left
                display flex
                flex-direction column
                justify-content space-between
                align-items stretch
                .reportName
                    font-size $font16;
                    font-weight:500;
                    text-decoration:underline;
                    color:rgba(108,131,180,1);
                    line-height:34px;
                    i
                        display inline-block
                        width 12px
                        height 12px
                        cursor pointer
                    .edit
                        bgImg('../../../assets/img/edit.png', cover)
                        margin-left 26px
                    .del
                        margin-left 10px
                        bgImg('../../../assets/img/del.png', cover)
                .intrdu
                    width:344px;
                    font-size $font14
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:34px;
            .right
                font-size $font14
                font-weight:500;
                color:rgba(108,131,180,1);
                cursor pointer
        .bottomCopy
            width:60px;
            line-height:30px;
            background:rgba(175,78,150,1);
            border-radius:4px;
            color #fff
            font-size $font14
            margin-top 22px
            cursor pointer
  .btn
    width 300px;
    margin 0 auto;
    button
        padding 1px 20px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(108,131,180,1);
        border-radius:4px;
        font-size $font16
        font-weight:500;
        line-height:38px;
        cursor pointer
    .btn1
        background #fff
        color rgba(108,131,180,1)
        margin-left 38px;
    .btn2
        background rgba(108,131,180,1)
        color #fff
        margin-left 38px;
</style>

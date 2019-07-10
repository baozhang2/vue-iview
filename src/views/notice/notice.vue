<template>
    <div id="notice">
        <div class="box">
            <div style="height:700px;margin-top:70px">
                <div v-show="!!notice.length">
                    <div v-for="item in notice" :key='item.key' style="">
                        <div class="title">
                            <span style="color:#666666;font-size:18px;">{{item.title}}</span><span style="color:#666666;font-size:18px;">{{item.key}}</span>
                        </div>
                        <div class="line"></div>
                        <div class="contentx">
                            {{item.content}}
                            <!--  /*        overflow-y: auto;
                                            white-space: wrap;
                                            overflow-x: hidden;
                                div::-webkit-scrollbar {

                                display: none;    /* 隐藏滚动条 */

                                } */ -->
                        </div>
                    </div>
                </div>
                <div v-show="!notice.length" class="zwtz">
                    暂无通知
                </div>
            </div>
            <div style="display:flex;justify-content:center;" v-show="!!notice">
                <Page :total="100" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            notice: [
                {
                    title: '端午放假通知',
                    content: '端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知',
                    key:'2019/09/12'
                },
                {
                    title: '端午放假通知',
                    content: '端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知',
                    key:'2019/09/13'
                },
                {
                    title: '端午放假通知',
                    content: '端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知',
                    key:'2019/09/14'
                },
                {
                    title: '端午放假通知',
                    content: '端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知v端午放假通知端午放假通知端午放假通知端午放假通知端午放假通知',
                    key:'2019/09/15'
                }
            ]
        }
    },
    mounted() {
    }
}
</script>
<style lang="stylus" scoped>
@import '../../utils/styl/mixin'
#notice
    width 80%
    height 820px
    background-color #fff
    margin 0 auto 12px
    overflow hidden
    .zwtz
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:600;
        color:rgba(102,102,102,1);
        text-align center
    .box
        width 80%
        height 100%
        margin auto
        .title
            display flex
            justify-content space-between
            margin-top 10px
        .line
            margin-top 11px
            border-bottom:1px dashed #9EAAC6;
            width:100%
        .contentx
            color:#666;
            line-height:26px;
            font-size:14px;
            height:130px;
            overflow auto
</style>

<template>
    <div id="outcome" class="container">
        <div>
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">认证进度</button>
                    <button class="edit" @click="edit">设置</button>
                </div>
                <div class="round" >
                    <div class="rounds1">
                        <div class="zt">
                            认证进度
                        </div>
                        <div class="js"></div>
                    </div>
                    <div class="jian1">
                    </div>
                    <div class="rounds1">
                        <div class="zt">
                            认证流程
                        </div>
                        <div class="cs"></div>
                    </div>
                    <div class="jian1">
                    </div>
                    <div class="rounds1">
                        <div class="zt">
                            认证
                        </div>
                        <div class="rz2"></div>
                    </div>
                    <div class="jian1">
                    </div>
                    <div class="rounds1">
                        <div class="zt">
                            现场访问
                        </div>
                        <div class="xcjf"></div>
                    </div>
                    <div class="jian1">
                    </div>
                    <div class="rounds1">
                        <div class="zt">
                            通过认证
                        </div>
                        <div class="tgrz"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {}
    },
    methods: {
        edit() {
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';
  #outcome
     margin 30px auto 130px
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
                width:122px;
                height:36px;
                background:rgba(108,131,180,1);
            .edit
                width:62px;
                height:30px;
                background:rgba(255,183,82,1);
                border-radius:2px;
                margin-top:4px
        .round
            display:flex;
            justify-content flex-start
            .rounds1
                margin-top: 51px;
                width:120px;
                height:120px;
                background:rgba(223,102,107,1);
                border-radius:50%;
                position relative
                .js
                    position:absolute;
                    width : 28px
                    height : 28px
                    left :46px
                    top : 32px
                    bgImg('../../../assets/img/js.png', cover)
                .cs
                    position:absolute;
                    width : 28px
                    height : 28px
                    left :46px
                    top : 32px
                    bgImg('../../../assets/img/cs.png', cover)
                .rz2
                    position:absolute;
                    width : 28px
                    height : 28px
                    left :46px
                    top : 32px
                    bgImg('../../../assets/img/rz2.png', cover)
                .xcjf
                    position:absolute;
                    width : 28px
                    height : 28px
                    left :46px
                    top : 32px
                    bgImg('../../../assets/img/xcjk.png', cover)
                .tgrz
                    position:absolute;
                    width : 28px
                    height : 28px
                    left :46px
                    top : 32px
                    bgImg('../../../assets/img/rz.png', cover)
                .zt
                    position:absolute;
                    top 70px
                    left 31px
                    width:57px;
                    height:13px;
                    font-size:14px;
                    text-align center
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:48px;
            .jian
                margin-top 107px
                width 90px
                height 20px
                bgImg('../../../assets/img/xz.png', cover)
            .jian1
                margin 107px 5px 0 5px
                width 90px
                height 20px
                bgImg('../../../assets/img/xz1.png', cover)
</style>

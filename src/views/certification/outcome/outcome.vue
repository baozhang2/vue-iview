<template>
    <div id="outcome" class="container">
        <div v-show="first">
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">认证进度</button>
                    <button class="edit" @click="edit">设置</button>
                </div>
                <div class="round" >
                    <div>
                        <div class="rounds1" v-show="showList[0].status == 1">
                            <div class="zt">
                                专业建设
                            </div>
                            <div class="js"></div>
                        </div>
                        <div class="rounds1" style=" background:#b5b5b5" v-show="showList[0].status == 2">
                            <div class="zt">
                                专业建设
                            </div>
                            <div class="js"></div>
                        </div>
                    </div>
                    <div>
                        <div class="jian" v-show="showList[1].status == 1">
                        </div>
                        <div class="jian1" v-show="showList[1].status == 2">
                        </div>
                    </div>
                    <div>
                        <div class="rounds1"  v-show="showList[1].status == 1">
                            <div class="zt">
                                认证初审
                            </div>
                            <div class="cs"></div>
                        </div>
                        <div class="rounds1" style=" background:#b5b5b5"  v-show="showList[1].status == 2">
                            <div class="zt">
                                认证初审
                            </div>
                            <div class="cs"></div>
                        </div>
                    </div>
                    <div>
                        <div class="jian" v-show="showList[2].status == 1">
                        </div>
                        <div class="jian1" v-show="showList[2].status == 2">
                        </div>
                    </div>
                    <div>
                        <div class="rounds1" v-show="showList[2].status == 1">
                            <div class="zt">
                                认证
                            </div>
                            <div class="rz2"></div>
                        </div>
                        <div class="rounds1" style=" background:#b5b5b5" v-show="showList[2].status == 2">
                            <div class="zt">
                                认证
                            </div>
                            <div class="rz2"></div>
                        </div>
                    </div>
                    <div>
                        <div class="jian" v-show="showList[3].status == 1">
                        </div>
                        <div class="jian1" v-show="showList[3].status == 2">
                        </div>
                    </div>
                    <div>
                        <div class="rounds1" v-show="showList[3].status == 1">
                            <div class="zt">
                                现场访问
                            </div>
                            <div class="xcjf"></div>
                        </div>
                        <div class="rounds1" style="background:#b5b5b5" v-show="showList[3].status == 2">
                            <div class="zt">
                                现场访问
                            </div>
                            <div class="xcjf"></div>
                        </div>
                    </div>
                   <div>
                        <div class="jian" v-show="showList[4].status == 1">
                        </div>
                        <div class="jian1" v-show="showList[4].status == 2">
                        </div>
                    </div>
                    <div>
                        <div class="rounds1" v-show="showList[4].status == 1">
                            <div class="zt">
                                通过认证
                            </div>
                            <div class="tgrz"></div>
                        </div>
                        <div class="rounds1"  style=" background:#b5b5b5" v-show="showList[4].status == 2">
                            <div class="zt">
                                通过认证
                            </div>
                            <div class="tgrz"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="second">
            <div style="width:80%;margin:45px auto 0">
                请选择当前认证进度：
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <div style="margin-top:45px">
                    <Button @click="back">取消</Button> <Button type="success" style="margin-left:45px" @click="setting">保存</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { listCertificationProgress, updateCertificationProgress } from "api";
import { msg } from "utils/js/utils";
export default {
    data (){
        return {
            showList:[
                {
                    "name":"专业建设",
                    "id":"7db82c5083584152932a9300aeb6eee0",
                    "status":1
                },
                {
                    "name":"认证初审",
                    "id":"b1dff13dcd9e4da386987a52efd908aa",
                    "status":1
                },
                {
                    "name":"通过认证",
                    "id":"ba2e4d2714b74ff6a40a6615955ed03c",
                    "status":1
                },
                {
                    "name":"现场访视",
                    "id":"c489f559680741fcb6b620f604d51a23",
                    "status":2
                },
                {
                    "name":"认证",
                    "id":"fca90698b41948b7abe34c24a2aac3d4",
                    "status":2
                }
            ],
            first: true,
            second: false,
            model1: '',
            cityList: [
                  {
                    "label":"专业建设",
                    "value":"7db82c5083584152932a9300aeb6eee0"
                },
                {
                    "label":"认证初审",
                    "value":"b1dff13dcd9e4da386987a52efd908aa"
                },
                {
                    "label":"认证",
                    "value":"ba2e4d2714b74ff6a40a6615955ed03c"
                },
                {
                    "label":"现场访视",
                    "value":"c489f559680741fcb6b620f604d51a23"
                },
                {
                    "label":"通过认证",
                    "value":"fca90698b41948b7abe34c24a2aac3d4"
                }
            ]
        }
    },
    methods: {
        edit() {
            this.first = false;
            this.second = true
        },
         back() {
            this.first = true;
            this.second = false
        },
        setting(){
            this.$post(updateCertificationProgress, {
                "id":this.model1
            }).then(
                result => {
                    if (result.code == '100') {
                        msg(this, "success", "设置成功");
                        this.query();
                     } else {
                        msg(this, "error", "设置失败");
                     }
                }
            )
            console.log('model1', this.model1)
        },
        query(){
            this.$post(listCertificationProgress, {}).then(
                reslut => {
                    if (reslut.code == '100') {
                        this.showList = reslut.data;
                        msg(this, "success", "查询成功");
                        this.back()
                    }
                    console.log('reslut', reslut)
                }
            );
        }
    },
    mounted(){
        this.query();
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
                margin 107px 5px 0 5px
                width 90px
                height 20px
                bgImg('../../../assets/img/xz.png', cover)
            .jian1
                margin 107px 5px 0 5px
                width 90px
                height 20px
                bgImg('../../../assets/img/xz1.png', cover)
</style>

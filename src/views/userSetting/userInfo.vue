<template>
    <div id="FacultyMange">
        <div class="flex">
            <div class="language">
                <div :class=" {isActive:currentIndex==key}" @click="judgeStep(key)" v-for="(item,key) in step" :key="key">{{item}}</div>
            </div>
        </div>
        <div v-if="isBaseInfo">
            <div class="chazj">
                基本信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;justify-content:space-between;padding:26px 0 40px 12px">
                <div>
                    <div style="display:flex;">
                        <div style="width:244px">
                            <span>姓名：</span><span>王文敏</span>
                        </div>
                        <div style="width:244px">
                            <span>学院：</span><span>计算机学院</span>
                        </div>
                        <div style="width:244px">
                            <span>国籍：</span><span>中国</span>
                        </div>
                    </div>
                    <div style="display:flex;margin-top:41px">
                        <div style="width:244px">
                            <span>性别：</span><span>女</span>
                        </div>
                        <div style="width:244px">
                            <span>编号：</span><span>00111</span>
                        </div>
                        <div style="width:244px">
                            <span>省份：</span><span>北京</span>
                        </div>
                    </div>
                    <div style="display:flex;margin-top:41px">
                        <div style="width:244px">
                            <span>出生年月：</span><span>1999.08</span>
                        </div>
                    </div>
                </div>
                <div style="width:120px;height:147px;background:#333;margin-right:20px">
                    <img src="" alt="">
                </div>
            </div>
            <div class="chazj" >
                扩展信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;justify-content:space-between;padding:26px 0 40px 12px">
                    <div >
                            入学分数：590
                        </div>
                        <div >
                            入学时间：2018-09-10
                        </div>
                        <div >
                            班号：96431
                    </div>
                    <div >
                        状态：在学
                    </div>
            </div>
             <div class="chazj" >
                自定义信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;margin-top:27px;">
                <i-form :model="formItem" label-position="left" :label-width="120">
                    <Form-item label="生日：">
                        <i-input :value.sync="formItem.birth" ></i-input>
                    </Form-item>
                    <Form-item label="邮箱：">
                        <i-input :value.sync="formItem.email"></i-input>
                    </Form-item>
                    <Form-item label="电话：">
                        <i-input :value.sync="formItem.telNum"></i-input>
                    </Form-item>
                    <Form-item label="紧急联系人：">
                        <i-input :value.sync="formItem.emergContact"></i-input>
                    </Form-item>
                    <Form-item label="紧急联系电话：">
                        <i-input :value.sync="formItem.emergNum"></i-input>
                    </Form-item>
                    <Form-item label="家庭电话：">
                        <i-input :value.sync="formItem.homeNum"></i-input>
                    </Form-item>
                    <Form-item label="家庭地址：">
                        <i-input :value.sync="formItem.homeAddress" style="width:500px"></i-input>
                    </Form-item>
                </i-form>
            </div>
            <div class="bottonend">
                    <button class="bt1" @click="back()">取消</button>
                    <button class="bt2">保存</button>
            </div>
        </div>
        <div v-else class="stuManual">
            <div class="topic">
                2016-2017学年学生手册
            </div>
            <div class="content" v-for="(item,key) in 5" :key="key">{{content}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FacultyMange',
    data() {
        return {
            value: '',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
            step: ['账户信息', '学生手册'],
            currentIndex:0,
            isBaseInfo: true,
            formItem: {
                homeAddress: '',
                homeNum: '',
                emergNum: '',
                emergContact: '',
                telNum: '',
                email: '',
                birth: ''
            }
        }
    },
    methods: {
        newsteacher(){
        },
        back(){
        },
        look(){
        },
        judgeStep (index) {
            this.currentIndex = index
             index == 0 ? this.isBaseInfo = true : this.isBaseInfo = false
        },
         deleteLable(){
            this.delModal = true;
        },
        confirm() {
            this.delModal = false;
            console.log('111');
        },
        close() {
            this.delModal = false;
        },
        cancel() {
            /* 确认删除执行的方法 */
            this.delModal = false;
        }
    }
}
</script>
<style>
#FacultyMange .ivu-form-item{
    display: inline-block !important;
    margin-right: 50px;
}
#FacultyMange .ivu-form-item .ivu-form-item-label {
    font-size: 14px;
    color:rgba(51,51,51,1);
}
</style>

<style lang="stylus" scoped>
@import '../../utils/styl/mixin.styl';
    #FacultyMange
        width 998px
        margin 35px auto 0
        overflow hidden
        .flex
            margin-bottom 44px
            display flex
            justify-content space-between
            align-items center
            border-bottom 1px solid #6c83b4;
            .language
                display: flex;
                div
                    width: 88px;
                    border-radius: 0px 20px 0px 0px;
                    line-height: 36px;
                    text-align: center;
                    font-size: $font14;
                    cursor: pointer;
                    height: 36px;
                    color #fff
                    background: rgba(255, 255, 255, 1);
                    border: 1px solid rgba(158, 170, 198, 1);
                    color:rgba(108,131,180,1);
                .isActive
                    background:rgba(108,131,180,1);
                    color #fff;
        .stuManual
            padding 31px 0 0 24px
            .topic
                font-size 20px
                text-align center
                margin-bottom 20px
            .content
                font-size 16px
                line-height 24px
                text-indent 32px
        .line
            width:998px;
            height:2px;
            background:rgba(158,170,198,1);
            border:1px solid rgba(206,216,237,1);
        .chazj
            width 121px
            height 36px
            background:rgba(108,131,180,1);
            font-size:16px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-align center
            line-height 36px
        .lineck
            margin-top 1px
            width:997px;
            height:1px;
            background:rgba(108,131,180,1);
        .bottonend
            margin-top 60px
            .bt1
                width:84px;
                height:38px;
                font-size:16px;
                color:rgba(135,184,127,1);
                background:rgba(255,255,255,1);
                border:1px solid rgba(135,184,127,1);
                border-radius:4px;
                cursor:pointer
            .bt2
                width:84px;
                height:38px;
                font-size:16px;
                color:rgba(255,255,255,1);
                background:rgba(135,184,127,1);
                border-radius:4px;
                margin-left 27px
                cursor:pointer
</style>

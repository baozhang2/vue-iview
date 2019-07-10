<template>
<!-- 人员管理界面 -->
    <div id="semesterSetting">
        <div v-show="first">
            <div class="title">学期列表</div>
            <div class="btns">
                <button class="bt1" @click="newF()">新建学期</button>
                <div>
                    <Input v-model="value" placeholder="Enter something..." style="width: 102px" class="inp"/>
                    <button class="bt2">查询</button>
                </div>
            </div>
            <div class="line">
            </div>
            <div style="height:5px"></div>
            <Table :columns="columns1" :data="data1">
                <template slot-scope="{ row }" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row }" slot="action">
                    <a @click="look(row)">查看</a>
                    <a @click="bianji(row)" style="margin-left:10px;">编辑</a>
                     <a @click="deleteLable(row)" style="margin-left:10px;">删除</a>
                </template>
            </Table>
            <div class="centers">
                <Page :total="100" show-sizer />
            </div>
        </div>
        <!-- 新建 -->
        <div v-show="newFirst" class="sides">
            <div class="xjtz">新建学期</div>
            <div class="centerstyle">
                <div style="margin-left:66px;margin-top:40px;font-size:14px;">
                    <span style="color:red;">*</span><span>学期名称：</span>
                    <Input v-model="value" placeholder="请输入学期名称" style="width: 193px;margin-left:30px;"/>
                    <p style="margin-top:19px;"></p>
                    <span style="color:red;">*</span><span>学期代码：</span>
                    <Input v-model="value" placeholder="请输入学期代码" style="width: 193px;margin-left:30px;"/>
                    <p style="margin-top:19px;"></p>
                    <span style="color:red;">*</span><span>学期负责人：</span>
                    <Select v-model="model1" style="width:193px;margin-left:16px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="bottonend">
                    <button class="bt1" @click="back()">取消</button>
                    <button class="bt2">保存</button>
                </div>
            </div>
        </div>
        <!-- 查看 -->
        <div class="xyxm" v-show="looks">
            <div class="topxyxm">
                <div class="titlex">
                    学期信息
                </div>
                <div class="linex">
                </div>
                <div style="margin-top:36px;font-size:14px;margin-left:3px">
                    <span>学期名称：</span><span style="margin-left:60px;font-weight:600;">{{model1}}</span>
                </div>
                <div style="margin-top:36px;font-size:14px;margin-left:3px">
                    <span>学期代码：</span><span style="margin-left:60px;font-weight:600;">{{model1}}</span>
                </div>
                <div style="margin-top:36px;font-size:14px;margin-left:3px">
                    <span>学期负责人：</span><span style="margin-left:46px;font-weight:600;">{{model1}}</span>
                </div>
                <div class="newSecond-desc">
                    <Button type="error" @click="bianji" style="width:84px;height:38px;margin-top:50px">编辑</Button>
                </div>
            </div>
        </div>
        <!-- 编辑 -->
        <div v-show="newSecond" class="sides">
            <div class="xjtz">编辑学期</div>
            <div class="centerstyle">
                <div style="margin-left:66px;margin-top:40px;font-size:14px;">
                    <span style="color:red;">*</span><span>学期名称：</span>
                    <Input v-model="value" placeholder="请输入学期名称" style="width: 193px;margin-left:30px;"/>
                    <p style="margin-top:19px;"></p>
                    <span style="color:red;">*</span><span>学期代码：</span>
                    <Input v-model="value" placeholder="请输入学期代码" style="width: 193px;margin-left:30px;"/>
                    <p style="margin-top:19px;"></p>
                    <span style="color:red;">*</span><span>学期负责人：</span>
                    <Select v-model="model1" style="width:193px;margin-left:16px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="bottonend">
                    <button class="bt1" @click="back()">取消</button>
                    <button class="bt2">保存</button>
                </div>
            </div>
        </div>
        <delModal
            title="您确认要删除该信息么？"
            :content="content"
            @on-confirm="confirm"
            @on-close="close"
            @on-cancel="cancel"
            v-show="delModal"
        ></delModal>
    </div>
</template>
<script>
export default {
    name : 'semesterSetting',
    data () {
        return {
            delModal:false,
            content:'删除数据将无法恢复',
            value : '',
            first :true,
            newFirst : false,
            newSecond: false,
            descEdit : true,
            looks : false,
            model1 : 'sda',
            value8: '',
            massgae: 'Chinese President Xi Jinping here on Friday called on the Group of 20 (G20) major economies to explore driving force for growth, improve global governance, remove development bottlenecks, and properly address differences.',
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                }
            ],
            columns1: [
                {
                    title: "编号",
                    align: "center",
                    key: "number",
                    width: 104
                },
                {
                    title: "消息内容",
                    width: 200,
                    align: "center",
                    key: "name"
                },
                {
                    title: "发布对象",
                    width: 200,
                    align: "center",
                    key: "name"
                },
                {
                    title: "创建人",
                    width: 116,
                    align: "center",
                    key: "name"
                },
                {
                    title: "创建时间",
                    width: 148,
                    align: "center",
                    key: "name"
                },
                {
                title: "操作",
                slot: 'action',
                width: 220,
                align: "center"
            }
        ],
         data1: [
            {
                number: 100021,
                name: "关于2020年发展及招生计划的会议纪要2019/09/09",
                upload_date: "2019-09-09",
                upload_name: "周青玲"
            },
            {
                number: 100021,
                name: "关于2020年发展及招生计划的会议纪要2019/09/09",
                upload_date: "2019-09-09",
                upload_name: "周青玲"
            },
            {
                number: 100021,
                name: "关于2020年发展及招生计划的会议纪要2019/09/09",
                upload_date: "2019-09-09",
                upload_name: "周青玲"
            }
            ]
        }
    },
    methods: {
        newF(){
            this.first = false;
            this.newSecond = false;
            this.newFirst = true;
            this.looks = false
        },
        back(){
            this.first = true;
            this.newSecond = false;
            this.newFirst = false;
            this.looks = false
        },
        look(look){
            this.first = false;
            this.newFirst = false;
            this.newSecond = false;
            this.looks = true
        },
        bianji(){
            this.first = false;
            this.newFirst = false;
            this.newSecond = true;
            this.looks = false
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
<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin.styl';
    #semesterSetting
        width 998px
        margin 48px auto 0
        .centers
            display flex
            justify-content center
            margin-top 45px
        .title
            width 100%
            height 24px
            text-align center
            font-size:24px;
            font-family:PingFangSC-Medium;
            font-weight:600;
            color:rgba(51,51,51,1);
        .btns
            margin-top 46px
            width 100%
            height 36px
            display flex
            flex-direction row
            justify-content space-between
            justify-items center
            .bt1
                width:90px;
                height:30px;
                background:rgba(111,179,224,1);
                border-radius:2px;
                justify-items center
                cursor:pointer
                font-size:14px;
                color rgba(255,255,255,1);
                border-radius 2px
            .inp
                height 30px
                margin-right 10px
            .bt2
                margin right 0px
                width:62px;
                height:30px;
                background:rgba(255,183,82,1);
                border-radius:2px;
                cursor:pointer
                font-size:14px;
                color rgba(255,255,255,1);
                border-radius 2px
        .line
            margin-top 9px
            width:100%;
            height:2px;
            background:rgba(158,170,198,1);
            border:1px solid rgba(206,216,237,1);
    .sides
        .xjtz
            font-size:16px;
            color:#666666;
            margin-top:66px;
            font-weight:500;
            margin-bottom:5px;
        .centerstyle
            width:992px;
            height:601px;
            margin-top 17px
            background:rgba(250,250,250,1);
            overflow:hidden;
            .centerTop
                margin 12px auto 0
                width 871px
            .bottonend
                margin-left 71px
                margin-top 135px
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
    .xyxm
        margin-top 42px
        .topxyxm
            width 997px
            margin 0 0 0 0
            overflow hidden
            .titlex
                margin-top 10px
                width:92px;
                height:36px;
                background:rgba(136,171,218,1);
                font-size:16px;color:rgba(255,255,255,1);
                text-align center
                line-height 36px
                border-radius 2px
            .linex
                width:997px;
                height:1px;
                background:rgba(136,171,218,1);
</style>

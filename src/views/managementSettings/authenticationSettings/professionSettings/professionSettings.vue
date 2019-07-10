<template>
<div id="ProSettings">
    <div>
        <!-- 专业列表界面 -->
        <div v-show="first">
            <div class="title">专业列表</div>
            <div class="btns">
                <button class="bt1" @click="newF()">新增专业</button>
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
                    <a @click="newF" style="margin-left:10px;">编辑</a>
                      <a @click="deleteLable" style="margin-left:10px;">删除</a>
                </template>
            </Table>
            <div class="centers">
                <Page :total="100" show-sizer />
            </div>
        </div>
        <!-- 查看专业 -->
        <div v-show="looks">
            <div class="zyxs">
                专业信息
            </div>
            <div class="linez">
            </div>
            <div class="zyxsj">
                专业基本信息
            </div>
            <div class="linej">
            </div>
            <div class="box">
                <div class="dv1">专业代码:</div><div class="dv2">1001</div>     <div class="dv3">总学分:</div><div class="dv4">40</div>
                <div class="dv1">简称:</div><div class="dv2">1001</div>         <div class="dv3">学科</div><div class="dv4">40</div>
                <div class="dv1">全称:</div><div class="dv2">1001</div>         <div class="dv3">学院</div><div class="dv4">40</div>
                <div class="dv1">培养方式:</div><div class="dv2">1001</div>     <div class="dv3">学年</div><div class="dv4">40</div>
                <div class="dv1">学制:</div><div class="dv2">1001</div>
            </div>
            <div class="fzr">
                负责人
            </div>
            <div class="radios">
                <div v-for="item in columns1" :key="item.key">
                    <span style="margin-left:30px">{{item.title}}</span>
                </div>
            </div>
            <button class="btnb"
            @click="newF()"
            >
                编辑
            </button>
        </div>
        <!-- 新增 -->
        <div v-show="newFirst">
            <div>
                新增专业
            </div>
            <div class="xnzybook">
                <div class="zixnzybook">
                    <div>
                        专业基本信息
                    </div>
                    <div class="linej">
                    </div>
                    <div class="box">
                        <div class="dvi1"><span style="color:red;">*</span> 专业代码:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi3"><span style="color:red;">*</span>总学分:</div><div class="dvi4">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi1 marx"><span style="color:red;">*</span>简称:</div><div class="dvi2 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi3 marx"><span style="color:red;">*</span>学科</div><div class="dvi4 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>

                        <div class="dvi1 marx"><span style="color:red;">*</span>全称:</div><div class="dvi2 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi3 marx"><span style="color:red;">*</span>学院</div><div class="dvi4 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi1 marx"><span style="color:red;">*</span>培养方式:</div><div class="dvi2 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi3 marx"><span style="color:red;">*</span>学年</div><div class="dvi4 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                        <div class="dvi1 marx"><span style="color:red;">*</span>学制:</div><div class="dvi2 marx">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                        </div>
                    </div>
                    <div class="fzr">
                        负责人
                        <Button type="warning" icon="ios-add" size= "small" style="margin-left:700px;">添加</Button>
                    </div>
                     <div class="radios">
                        <CheckboxGroup @on-change="ridioChonge" v-model="fruit" v-for="item in columns1" :key="item.key">
                                    <Checkbox  :label="item.key" style="margin-left:30px">
                                        <span>{{item.title}}</span>
                                </Checkbox>
                        </CheckboxGroup>
                    </div>
                    <Button style="width:84px;margin-top:50px" @click="back">取消</Button>
                    <Button type="success" style="margin-left:28px;width:84px;margin-top:50px">保存</Button>
                </div>
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
    name : 'ProSettings',
    data () {
        return {
            delModal: false,
            content : '删除数据将无法恢复',
            value : '',
            first :true,
            newFirst : false,
            newSecond: false,
            descEdit : true,
            looks : false,
            model1 : 'sda',
            value8: '',
            fruit: [],
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
                    key: "123"
                },
                {
                    title: "发布对象",
                    width: 200,
                    align: "center",
                    key: "145"
                },
                {
                    title: "创建人",
                    width: 116,
                    align: "center",
                    key: "756"
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
        ridioChonge(item){
            console.log('e', item, this.fruit)
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
    #ProSettings
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
        .zyxs
            width:92px;
            height:36px;
            background:rgba(136,171,218,1);
            font-size:14px;
            color rgba(255,255,255,1);
            border-radius 2px
            text-align center
            line-height 36px
        .linez
            width:100%;
            height:1px;
            background:rgba(136,171,218,1);
        .zyxsj
            margin-top 24px;
            width:92px;
            height:36px;
            font-size:14px;
            text-align center
            line-height 36px
        .linej
            width:100%;
            height:1px;
            background:rgba(238,238,238,1);
        .box
            margin-top:47px;
            display flex
            flex-wrap: wrap
            .dv1
                margin-top 33px
                height 16px
                width 126px
            .dv2
                margin-top 33px
                color #333333
                font-weight 600
            .dv3
                margin-top 33px
                margin-left 337px
                height 16px
                width 126px
            .dv4
                margin-top 33px
                color #333333
                width 360px
                font-weight 600
        .fzr
            margin-top 79px
            color #333333
            width 360px
            font-weight 600
            font-size:16px;
            font-family:PingFangSC-Medium;
            color:rgba(51,51,51,1);
        .radios
            width 100%
            display flex
            flex-wrap: wrap
            margin-top 34px
        .btnb
            margin-top 70px
            width:84px;
            height:38px;
            background:rgba(209,91,71,1);
            border-radius:4px;
            line-height 38px
            color #FFFFFF
            text-align center
            cursor:pointer
        .xnzybook
            width 992px
            height 730px
            background-color #FAFAFA
            overflow hidden
            .zixnzybook
                margin-left 68px
                margin-top:42px
                color #333333
            .dvi1
                width 80px
                line-height 33px
            .dvi2
                margin-left 30px
            .dvi3
                margin-left 137px
                width 80px
                line-height 33px
            .dvi4
                margin-left 30px
            .marx
                margin-top 33px
</style>

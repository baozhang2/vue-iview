<template>
<div id="StuMange">
    <div v-show="viewLook == 'first'">
        <div class="title">
            学生列表
        </div>
        <div class="tableUp">
            <Button type="primary" style="height:30px;width:90px;background:#6FB3E0;" @click="newstudent">新建学生</Button>
            <Button style="height:30px;width:84px;margin-left:17px;color:#6FB3E0;">删除</Button>
            <div style="margin-left:217px;">
                <span style="font-size:16px;">学院：</span>
                <Select v-model="cityData" style="width:102px;height:30px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <div style="margin-left:22px;">
                <span style="font-size:16px;">专业：</span>
                <Select v-model="cityData" style="width:102px;height:30px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <div>
                <Input v-model="value" placeholder="请输入关键字" style="width: 102px;height:30px;margin-left:10px;" />
                <Button type="warning" style="width: 62px;height:30px;margin-left:17px;">查询</Button>
                <Button type="success" style="width: 62px;height:30px;margin-left:10px;" @click="tongji">统计</Button>
            </div>
        </div>
        <div class="line">
        </div>
        <div style="margin-top:5px;">
            <Table border ref="selection" :columns="columns1" :data="data1">
                <template slot-scope="{ row }" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row}" slot="action">
                    <a @click="look(row)">查看</a>
                    <a @click="bianji(row)" style="margin-left:33px">编辑</a>
                    <a @click="deleteLable(row)" style="margin-left:33px">删除</a>
                </template>
            </Table>
            <div class="centers">
                <Page :total="100" show-sizer />
            </div>
        </div>
    </div>
    <div v-show="viewLook == 'second'">
        <div style="margin-top:20px;margin-bottom:17px;">{{changeData}}</div>
        <div class="incenter">
            <div class="jbxx">
                <div class="font-sise:16px;color:#333333">
                    学生基本信息
                </div>
                <div class="linexs"></div>
                <div class="box">
                    <div style="width:80px;line-height:33px"><span style="color:red;">*</span> 学生编号:</div><div style=" margin-left:30px">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div  style="margin-left:137px;width:80px;line-height:33px"><span style="color:red;">*</span>学院:</div><div style=" margin-left:30px">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 姓名:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>专业:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 性别:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>国籍:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 出生日期:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>省份:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 民族:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>政治面貌:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div style="width:100%;height:16px;color:#333333;margin-top:70px;">
                        学生拓展信息
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 入学分数:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>入学时间:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi1"><span style="color:red;">*</span> 班号:</div><div class="dvi2">
                            <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                    <div class="dvi3"><span style="color:red;">*</span>状态:</div><div class="dvi4">
                        <Input v-model="value" placeholder="请输入" style="width: 248px" />
                    </div>
                </div>
                 <Button style="width:84px;margin-top:50px" @click="back">取消</Button>
                 <Button type="success" style="margin-left:28px;width:84px;margin-top:50px">保存</Button>
            </div>
        </div>
    </div>
    <div v-show="viewLook == 'third'">
        <Row style="height:41px">
            <Col span="11">
            <button style="height:30px;width:90px;background:#6FB3E0;color:#fff">学生统计</button>
            </Col>
            <Col span="13">
                <span style="font-size:16px;margin-left:19px">学院：</span>
                <Select v-model="cityData" style="width:102px;height:30px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span style="font-size:16px;margin-left:20px">专业：</span>
                <Select v-model="cityData" style="width:102px;height:30px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Input v-model="value" placeholder="请输入关键字" style="width: 102px;height:30px;margin-left:20px;" />
                <Button type="warning" style="height:30px;width:90px;width:62px;margin-left:17px" @click="newstudent">统计</Button>
            </Col>
        </Row>
        <div class="line">
        </div>
        <Row style="margin-top:50px">
            <Col span="8">
                总人数：
            </Col>
            <Col span="8">
                男生人数：
            </Col>
            <Col span="">
                女生人数：
            </Col>
        </Row>
        <div style="margin-top:50px;display:flex;">
            <div class="stuFxPie" ref="stuFxPieOne"></div>
            <div class="stuFxPie" ref="stuFxPieTwo"></div>
        </div>
        <div class="stuFxbar" ref="stuFxBar"></div>
    </div>
    <div v-show="viewLook == 'fourth'">
         <div class="chazj">
                学生基本信息
            </div>
            <div class="lineck">
            </div>
            <div style="margin-top:26px;display:flex;justify-content:space-between;">
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
                        <div style="width:244px">
                            <span>专业：</span><span>软件工程</span>
                        </div>
                        <div style="width:244px">
                            <span>民族：</span><span>汉</span>
                        </div>
                    </div>
                    <div style="display:flex;margin-top:41px">
                        <div style="width:244px">
                            <span>政治面貌：</span><span>党员</span>
                        </div>
                    </div>
                </div>
                <div style="width:120px;height:147px;background:#333;margin-right:20px">
                    <img src="" alt="">
                </div>
            </div>
            <div class="chazj" style="margin-top:44px">
                学生拓展信息
            </div>
            <div class="lineck">
            </div>
            <div style="margin-top:31px;">
                <div style="display:flex;">
                    <div style="width:244px">
                            <span>入学分数：</span><span>560</span>
                    </div>
                    <div style="width:244px">
                        <span>入学时间：</span><span>2018-09-10</span>
                    </div>
                    <div style="width:244px">
                        <span>班号：</span><span>9431</span>
                    </div>
                    <div style="width:244px">
                        <span>状态：</span><span>在学</span>
                    </div>
                </div>
            </div>
            <div class="chazj" style="margin-top:39px">
                学生账号信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;margin-top:27px;margin-bottom:100px">
                <div style="width:267px">登陆账户：wangyouasdsadsa</div>
                <div style="width:267px">初始密码：*************</div>
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
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import { stuFxPie, stuFxBar } from "utils/js/echar_options";
export default {
    name: 'StuMange',
    data() {
        return {
            viewLook: 'first',
            delModal: false,
            content : '删除数据将无法恢复',
            changeData:'添加学生',
            cityData: '',
            value: '',
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                }
            ],
             columns1: [
                {
                    type: 'selection',
                    width: 52,
                    align: 'center'
                },
                {
                    title: "编号",
                    align: "center",
                    key: "number",
                    width: 80
                },
                {
                    title: "学院名称",
                    width: 120,
                    align: "center",
                    key: "name"
                },
                {
                    title: "专业",
                    width: 120,
                    align: "center",
                    key: "zhuanye"
                },
                {
                    title: "负责人",
                    width: 84,
                    align: "center",
                    key: "fuzr"
                },
                {
                    title: "性别",
                    width: 84,
                    align: "center",
                    key: "sex"
                },
                {
                    title: "状态",
                    width: 84,
                    align: "center",
                    key: "status"
                },
                {
                    title: "创建时间",
                    width: 142,
                    align: "center",
                    key: "time"
                },
                {
                    title: "操作",
                    slot: 'action',
                    width: 230,
                    align: "center"
                }
             ],
            data1: [
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "周青玲",
                    status: "创建",
                    sex: "女",
                    zhuanye: "软件工程"
                }
            ]
        }
    },
    methods: {
        newstudent(){
            this.changeData = "添加学生"
            this.viewLook = 'second';
        },
        back(){
           this.viewLook = 'first';
        },
        bianji(){
            this.changeData = "编辑学生"
            this.viewLook = 'second';
        },
        tongji(){
           this.viewLook = 'third';
        },
        look(){
            this.viewLook = 'fourth';
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
    },
    mounted() {
        this.$nextTick(e => {
        this.$echarts(this.$refs.stuFxPieOne, stuFxPie);
        this.$echarts(this.$refs.stuFxPieTwo, stuFxPie);
        this.$echarts(this.$refs.stuFxBar, stuFxBar);
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../utils/styl/mixin.styl';
    #StuMange
        width 998px
        margin 35px auto 0
        overflow hidden
        .stuFxPie {
            width: 450px;
            height: 200px;
            margin: 10px 5% 0 5%;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            }
            .stuFxbar {
                width: 600px;
                height: 300px;
                margin: 10px 5% 50px 5%;
            }
        .centers
            display flex
            justify-content center
            margin-top 45px
        .linexb
            margin-top 20px
            height 1px
            width 45%
            background-color #ECECEC
        .title
            margin-top 10px
            height 24px
            text-align center
            font-size:24px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:10px;
        .tableUp
            margin-top 42px
            height 41px
            display flex
        .line
            width:998px;
            height:2px;
            background:rgba(158,170,198,1);
            border:1px solid rgba(206,216,237,1);
        .incenter
            width 992px
            margin 0 auto
            background-color #FAFAFA
            overflow hidden
            .jbxx
                width 860px
                margin 42px auto 100px
                .linexs
                    width:860px;
                    height:1px;
                    background:rgba(238,238,238,1);
                    margin-top 15px
                .box
                    margin-top:42px;
                    display flex
                    flex-wrap: wrap
                    .dvi1
                        margin-top 33px
                        width 80px
                        line-height 33px
                    .dvi2
                        margin-top 33px
                        margin-left 30px
                    .dvi3
                        margin-top 33px
                        margin-left 137px
                        width 80px
                        line-height 33px
                    .dvi4
                        margin-top 33px
                        margin-left 30px
                    .marx
                        margin-top 33px
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
</style>

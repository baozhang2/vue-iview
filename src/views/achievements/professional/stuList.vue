<template>
    <div id="FacultyMange">
        <div v-show="first">
            <div class="tableUp" >
                    <Button type="success" style="height:30px;">下载模板</Button>
                    <Button type="success" style="height:30px;margin-left:10px;">成绩导入</Button>
                    <Button type="success" style="height:30px;margin-left:10px;">添加学生</Button>
                     <Button type="success" style="height:30px;ma   rgin-left:10px;" @click="tongji">学生统计</Button>
            </div>
            <div class="line">
            </div>
            <div style="margin-top:5px;">
                <Table border  :columns="columns1" :data="data1">
                    <template slot-scope="{ row }" slot="name">
                        <strong>{{ row.name }}</strong>
                    </template>
                    <template slot-scope="{ row}" slot="action">
                        <a @click="look(row)">查看</a>
                        <a @click="newsteacher(row)" style="margin-left:33px">编辑</a>
                        <a @click="deleteLable(row)" style="margin-left:33px">删除</a>
                    </template>
                </Table>
                <div class="centers">
                    <Page :total="100" show-sizer />
                </div>
            </div>
        </div>
        <div v-show="second">
            添加教职
            <div class="box">
                <div class="box1">
                    <div style="margin-top:42px">
                        教职基本信息
                    </div>
                    <div class="linejz">
                    </div>
                    <div class="massages">
                        <div style="margin-top:26px;display:flex;">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>教职编号：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>学院：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                         <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>姓名：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>专业：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                         <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>性别：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>国籍：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                         <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>出生日期：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>省份：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                        <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>民族：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>政治面貌：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                        <div style="margin-top:22px">
                            添加照片：<Button type="info" style="width:284px;height:33px;background:rgba(136,171,218,1);">点击上传证件照</Button>
                        </div>
                    </div>
                    <div style="margin-top:93px;">
                        教职拓展信息
                    </div>
                    <div class="linetz"></div>
                    <div class="massages">
                        <div style="margin-top:22px;display:flex;">
                            <div style="width:90px;line-height:33px"><span>入职年份：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span>最高学历：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                        <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span>学科：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span>财务名称：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                        <div class="massagesbox">
                            <div style="width:90px;line-height:33px"><span>行政管理：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                        <div style="margin-top:22px;display:flex;">
                            资格证书：
                            <CheckboxGroup v-model="fruit">
                                <Checkbox label="教师资格证"></Checkbox>
                                <Checkbox label="注册会计师"></Checkbox>
                                <Checkbox label="其他"></Checkbox>
                            </CheckboxGroup>
                        </div>
                    </div>
                    <div style="margin-top:83px;">
                        职责/工作评估标准
                    </div>
                    <div class="massages">
                        <div style="margin-top:22px;display:flex;">
                            <div style="width:90px;line-height:33px"><span>上传：</span></div><Input v-model="value" placeholder="" style="width:286px;height:33px" disabled/>
                           <Button type="info" style="width:122px;height:33px;background:rgba(111,179,224,1);">上传文件</Button>
                        </div>
                        <div style="display:flex;margin-top:28px;margin-left:149px;color:#3D568D;">
                            <span>工作评估标准</span><div class="edit"></div><div class="del"></div>
                        </div>
                    </div>
                    <div style="margin-top:30px:">
                        教职账号信息
                    </div>
                    <div class="linetz">
                    </div>
                    <div class="massages">
                        <div style="margin-top:32px;display:flex;">
                            <div style="width:90px;line-height:33px"><span class="red">*</span><span>登录账号：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                            <div style="width:90px;line-height:33px;margin-left:137px;"><span class="red">*</span><span>初始密码：</span></div><Input v-model="value" placeholder="请输入" style="width:248px;height:33px" />
                        </div>
                    </div>
                    <Button style="width:84px;margin-top:50px" @click="back">取消</Button>
                    <Button type="success" style="margin-left:28px;width:84px;margin-top:50px">保存</Button>
                </div>
            </div>
        </div>
        <div v-show="therd">
            <div class="chazj">
                教职基本信息
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
                            <span>政治面貌：</span><span>党员</span>
                        </div>
                        <div style="width:244px">
                            <span>民族：</span><span>汉</span>
                        </div>
                    </div>
                </div>
                <div style="width:120px;height:147px;background:#333;margin-right:20px">
                    <img src="" alt="">
                </div>
            </div>
            <div class="chazj" style="margin-top:44px">
                教职拓展信息
            </div>
            <div class="lineck">
            </div>
            <div style="margin-top:31px;">
                <div style="display:flex;">
                    <div style="width:244px">
                            <span>入职年份：</span><span>2017年</span>
                        </div>
                        <div style="width:244px">
                            <span>最高学历：</span><span>本科</span>
                        </div>
                        <div style="width:244px">
                            <span>学科：</span><span>软件</span>
                    </div>
                </div>
                <div style="display:flex;margin-top:41px;">
                    <div style="width:244px">
                        <span>职务名称：</span><span>教师</span>
                    </div>
                    <div style="width:244px">
                        <span>行政管理：</span><span>计算机学院</span>
                    </div>
                </div>
                <div style="display:flex;margin-top:40px;">
                    <div style="width:244px">
                        <span>资格证书：</span><span>注册会计师</span>
                    </div>
                </div>
            </div>
             <div class="chazj" style="margin-top:35px">
                教职拓展信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;margin-top:27px">
                <div>工作评估标准</div>
                <div class="edit"></div>
                <div class="del"></div>
            </div>
             <div class="chazj" style="margin-top:39px">
                教职账号信息
            </div>
            <div class="lineck">
            </div>
            <div style="display:flex;margin-top:27px;margin-bottom:220px">
                <div style="width:267px">登陆账户：wangyouasdasd</div>
                <div style="width:267px">初始密码：*************</div>
            </div>
        </div>
        <div v-show="fouth">
            <Row style="height:41px">
                <Col span="11">
                <button style="height:30px;width:90px;background:#6FB3E0;color:#fff">教职统计</button>
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
                    <Button type="warning" style="height:30px;width:90px;width:62px;margin-left:17px" @click="back">统计</Button>
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
    name: 'FacultyMange',
    data() {
        return {
            delModal: false,
            content : '删除数据将无法恢复',
            fruit:[],
            changeData:'添加教职',
            first :true,
            second: false,
            therd: false,
            fouth: false,
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
                    title: "编号",
                    align: "center",
                    key: "number",
                    width: 80
                },
                {
                    title: "学院名称",
                    width: 292,
                    align: "center",
                    key: "name"
                },
                {
                    title: "名称",
                    width: 84,
                    align: "center",
                    key: "zhuanye"
                },
                {
                    title: "性别",
                    width: 84,
                    align: "center",
                    key: "fuzr"
                },
                {
                    title: "状态",
                    width: 84,
                    align: "center",
                    key: "sex"
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
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                },
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                },
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                },
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                },
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                },
                {
                    number: 100021,
                    name: "财经学院",
                    time: "2019-09-09",
                    fuzr: "女",
                    status: "创建",
                    sex: "在职",
                    zhuanye: "周青玲"
                }
            ]
        }
    },
    methods: {
        newsteacher(){
            this.first = false;
            this.second = true;
            this.therd = false;
            this.fouth = false;
        },
        back(){
            this.first = true;
            this.second = false;
            this.therd = false;
            this.fouth = false;
        },
        look(){
            this.first = false;
            this.second = false;
            this.therd = true;
            this.fouth = false;
        },
        tongji(){
            this.first = false;
            this.second = false;
            this.therd = false;
            this.fouth = true;
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
@import '../../../utils/styl/mixin.styl';
    #FacultyMange
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
        .edit
            width 14px
            height 14px
            bgImg('../../../assets/img/edit.png', cover)
            margin-left 26px
            cursor:pointer
        .del
            width 14px
            height 14px
            margin-left 10px
            cursor:pointer
            bgImg('../../../assets/img/del.png', cover)
        .red
            color red
        .redm
            color red
            margin-left 135px
        .centers
            display flex
            justify-content center
            margin-top 45px
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
            justify-content flex-end
        .line
            width:998px;
            height:2px;
            background:rgba(158,170,198,1);
            border:1px solid rgba(206,216,237,1);
        .box
            width 998px
            height 1282px
            background-color #FAFAFA
            margin-bottom 77px
            overflow hidden
            .box1
                width 860px
                margin auto
                overflow hidden
                .linejz
                    width:860px;
                    height:1px;
                    background:rgba(238,238,238,1);
                    margin-top: 15px;
                .massages
                    color #333
                    margin-top 10px
                    .massagesbox
                        margin-top 17px
                        display flex
                .linetz
                    margin-top 15px
                    margin-bottom 10px
                    width:860px;
                    height:1px;
                    background:rgba(238,238,238,1);
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

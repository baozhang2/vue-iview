<template>
<div>
    <!-- 认证报告 -->
   <div class="tableUp">
       <div v-show="first">
           <Button type="primary" style="height:30px;width:90px;background:#6FB3E0;" @click="scbg">上传报告</Button>
            <div style="float:right">
                <Input v-model="value" placeholder="请输入关键字" style="width: 102px;height:30px;margin-left:10px;" />
                <Button type="warning" style="width: 62px;height:30px;margin-left:17px;">查询</Button>
            </div>
            <div class="line">
            </div>
            <div style="margin-top:5px;">
                <Table border ref="selection" :columns="columns1" :data="data1">
                    <template slot-scope="{ row }" slot="name">
                        <strong>{{ row.name }}</strong>
                    </template>
                    <template slot-scope="{ row}" slot="action">
                        <a style="margin-left:33px" @click="scbg">编辑</a>
                        <a style="margin-left:33px">下载</a>
                        <a @click="deleteLable(row)" style="margin-left:33px">删除</a>
                    </template>
                </Table>
                <div class="centers">
                    <Page :total="100" show-sizer />
                </div>
            </div>
       </div>
       <div v-show="second" style="width:500px;margin:auto">
           <div>
               <span style="color:red">* </span><span>样本名称：</span><Input v-model="value" placeholder="" style="width: 140px;height:30px;margin-left:10px;"/>
           </div>
            <div style="margin-top:30px">
                <span style="color:red">* </span><span>学年：</span>
                <Select v-model="model1" style="width: 140px;height:30px;margin-left:42px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
           </div>
           <div style="margin-top:30px">
               <span style="color:red">* </span><span>文件类别：</span>
               <Select v-model="model1" style="width: 140px;height:30px;margin-left:10px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
           </div>
           <div style="margin-top:30px">
               <span style="color:red">* </span><span>上传文件：</span><Input v-model="value" placeholder="" style="width: 140px;height:30px;margin-left:10px;"/><Button style="height:30px;margin-left:20px;">上传文件</Button>
           </div>
           <div style="margin-top:30px">
                <Button type="primary" style="width: 102px;" @click="back">取消</Button> <Button type="primary" style="width: 102px;margin-left:60px">确认</Button>
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
    data(){
        return {
            first: true,
            second:false,
            value:'',
            delModal:false,
            content:'删除数据将无法恢复',
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
                    title: "学年",
                    width: 120,
                    align: "center",
                    key: "time"
                },
                {
                    title: "名称",
                    width: 120,
                    align: "center",
                    key: "zhuanye"
                },
                {
                    title: "类别",
                    width: 120,
                    align: "center",
                    key: "zhuanye"
                },
                {
                    title: "上传时间",
                    width: 142,
                    align: "center",
                    key: "time"
                },
                {
                    title: "上传人",
                    width: 120,
                    align: "center",
                    key: "fuzr"
                },
                {
                    title: "操作",
                    slot: 'action',
                    width: 242,
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
    methods:{
        scbg(){
            this.first = false;
            this.second = true;
        },
        back(){
             this.first = true;
            this.second = false;
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
.tableUp
    width 998px
    margin 75px auto 0
    .line
        margin-top 15px
        width:998px;
        height:2px;
        background:rgba(158,170,198,1);
        border:1px solid rgba(206,216,237,1)
    .centers
            display flex
            justify-content center
            margin-top 45px
</style>

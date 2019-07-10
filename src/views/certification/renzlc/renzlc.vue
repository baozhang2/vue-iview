<template>
<!-- 认证流程 -->
    <div id="renzlc" class="container">
        <div v-show="first">
            <div>
                    <div class="mg_t">
                        <div class="line">
                            <button class="beauty">认证标准</button>
                        </div>
                    </div>
                </div>
                <div id="vision" class="container">
            <!-- tab栏 -->
                <ul>
                    <li v-for="(item, index) in visionList" :key="index">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
                <!-- 三级路由展示 -->
                <router-view></router-view>
            </div>
            <div class="wendang">
                <div>
                    <div class="mg_t">
                        <div class="line">
                            <button class="beauty">相关文档</button>
                            <button class="edit" @click="upload" style="background:rgba(135,184,127,1);">上传</button>
                        </div>
                    </div>
                </div>
            <Table :columns="columns1" :data="data1">
                <template slot-scope="{ row }" slot="name">
                        <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row}" slot="action">
                    <a style="margin-left:33px" @click="download(row)">下载</a>
                    <a @click="deleteLable(row)" style="margin-left:20px">删除</a>
                </template>
            </Table>
            </div>
        </div>
        <div v-show="second" style="width:800px;height:600px;margin:45px auto 0;background-color:#FAFAFA;overflow:hidden">
            <div style="margin:45px auto 0;width:600px">
                <span style="color:red">*</span><span>标准名称：</span><Input v-model="value"  style="width: 300px;margin-left:45px" />
            </div>
            <div style="margin:45px auto 0;width:600px">
                <span style="color:red">*</span><span>描述：</span><Input type="textarea"  v-model="value"  style="width: 300px;margin-left:77px" :autosize="{minRows: 6,maxRows: 6}" />
            </div>
            <div style="margin:45px auto 0;width:600px">
                <span style="color:red">*</span><span>文档：</span><Input   v-model="value"  style="width: 300px;margin-left:77px" /><Button type="primary" @click="back" style="margin-left:30px">选择文件</Button>
            </div>
            <div style="margin:45px auto 0;width:600px">
                <Button type="primary" @click="back" style="width:120px;margin-left:100px">取消</Button> <Button type="primary" style="width:120px;margin-left:77px">确定</Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "renzlc",
    data () {
        return {
            value:'',
            sd:'asdasdas',
            first: true,
            second: false,
            visionList:[
                {
                    name:'中文版',
                    path:'/certification/renzlc'
                },
                {
                    name:'英文版',
                    path:'/certification/renzlc/english'
                }
            ],
            columns1: [
                {
                    title: "文档名称",
                    align: "center",
                    key: "standards_name"
                },
                {
                    title: "描述",
                    width: 428,
                    align: "center",
                    key: "standards_desc"
                },
                {
                title: "操作",
                width: 200,
                slot: 'action',
                align: "center"
            }
        ],
        data1: []
        }
    },
    methods: {
        queryList(){
            this.$post('/certificationStandardsFile/listCertificationStandardsFile', {}).then(
                result => {
                    if (result.code == '100'){
                        result.data = this.data1
                    }
                    console.log('result', result)
                }
            )
        },
        edit () {
        },
        upload (e){
            this.first = false;
            this.second = true;
        },
        downLoad(item){
             window.location.href = item.uploader;
        },
        back(){
            this.first = true;
            this.second = false;
        },
        deleteLable(row){
            console.log('row', row);
        }
    },
    mounted(){
        this.queryList();
    }
}
</script>
<style lang="stylus" scoped>
    @import '../../../utils/styl/mixin.styl';
    #renzlc
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
#vision
  ul
    display flex
    justify-content flex-start
    border-bottom 1px solid $navCol
    padding-bottom 1px
    li
      width 88px
      line-height 30px
      text-align center
      cursor pointer
      a
        width 100%
        display block
        border-top-right-radius 20px
        border 1px solid rgba(175,78,150,1);
        color $navCol
        font-size $font14
  .router-link-exact-active
    background:rgba(175,78,150,1);
    color $white !important
.wendang
    margin-top : 75px
</style>

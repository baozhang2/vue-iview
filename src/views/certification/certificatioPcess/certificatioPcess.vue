<template>
<div>
    <!-- 认证流程 -->
   <div style="width:80%;margin:45px auto 0;">
        <div style="text-align:center;line-height:30px" v-show="first">
            <div v-for="item in list" :key='item.id'>
                {{item.fileName}}<Icon type="md-download" style="margin-left:15px;color:blue" @click="load(item)"/>
            </div>
            <div>
                <Button type="primary" style="width:102px;margin-top:15px" @click="biaji()">编辑</Button>
            </div>
        </div>
        <div v-show="second">
            <div style="width:80%;margin:45px auto 0;">
                <div style="line-height:30px;display:flex;">
                    <span style="color:red;margin-left:160px">*</span><span>上传</span> <Input v-model="value" placeholder="" style="width: 120px;margin-left:5px" />
                    <Upload
                    :before-upload="handleUpload"
                    action="http://rz.talkingcake.cn/certificationProcess/addCertificationProcess" style="width: 120px;margin-left:20px">
                        <Button>选择文件</Button>
                    </Upload>
                </div>
                <div>
                    <Button type="primary" style="width:102px;margin-top:15px;margin-left:160px" @click="upload">取消</Button>
                    <Button type="primary" style="width:102px;margin-top:15px;margin-left:40px" @click="upload">确定</Button>
                </div>
            </div>
        </div>
   </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    "fileName":"新建文本文档.txt",
                    "uploader":"http://rz.talkingcake.cn/file/20190530161518/f03aebf1-1540-42a7-af02-f26a3b4872de.txt",
                    "id":"1"
                },
                {
                    "fileName":"新建文本文1档.txt",
                    "uploader":"http://rz.talkingcake.cn/file/20190530154913/f4b94330-0fbb-4248-af3e-1b0c6e17e7df.txt",
                    "id":"2"
                }
            ],
            file: null,
            click:{},
            first:true,
            second:false,
            value:''
        }
    },
    methods:{
        load(item){
             window.location.href = item.uploader;
        },
        upload(){
            console.log("this.file = file;", this.file)
        },
        biaji(){
            this.second = true;
            this.first = false
        },
        back() {
            this.second = false;
            this.first = true
        },
        queryList(){
            this.$post('/certificationProcess/listCertificationProcess', {}).then(
                result => {
                    if (result.code == '100'){
                        this.list = result.data;
                    }
                }
            )
        },
        handleUpload(file){
            this.file = file;
            this.value = file.name;
            console.log('file', file)
            return false;
        }
    },
    mounted() {
        this.queryList();
    }
}
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';
.dara
    text-align center
</style>

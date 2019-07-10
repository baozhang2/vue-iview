<template>
<!-- 人员管理界面 -->
   <div id="personnelManagement">
       <div class="title">
           <div class="box">
                <div class="xsgi wey"  @click="scgl($event,'xsgi wey')">学生管理</div>
                <div  class="jzgl wey" @click="scgl($event,'jzgl wey')">教职管理</div>
           </div>
       </div>
       <div v-if="type == 'xsgi wey'">
           <stu-Mange></stu-Mange>
       </div>
       <div v-else-if="type == 'jzgl wey'">
           <faculty-Mange></faculty-Mange>
       </div>
   </div>
</template>
<script>
import StuMange from "./studentManagement/stuMange";
import FacultyMange from "./facultyMange/facultyMange";
export default {
    data () {
        return {
            cscolor: 'xsgi wey',
            type: 'xsgi wey'
        }
    },
    methods: {
        scgl(e, data){
            if (data != this.cscolor){
                document.getElementsByClassName(this.cscolor)[0].style.color = '#666666'
                e.target.style.color = '#3D568D'
                this.cscolor = e.target.className;
                this.type = data;
            }
        }
    },
    components: {
        StuMange, FacultyMange
    }
}
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';
    #personnelManagement
        width 100%
        .title
            height 48px
            background:rgba(250,250,250,1);
            border:1px solid rgba(238,238,238,1);
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(102,102,102,1);
            .xsgi
                color #3D568D
            .box
                height 48px
                width 992px
                margin auto
                display flex
                align-items center
                .wey
                    cursor:pointer
                .jzgl
                    margin-left 80px

</style>

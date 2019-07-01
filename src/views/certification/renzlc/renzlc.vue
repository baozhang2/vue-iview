<template>
<!-- 认证流程 -->
    <div id="renzlc" class="container">
        <div>
            <div class="mg_t">
                <div class="line">
                    <button class="beauty">认证标准</button>
                    <button class="edit" @click="edit">编辑</button>
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
      <Table :columns="columns1" :data="data1"></Table>
    </div>
    </div>
</template>
<script>
export default {
    name: "renzlc",
    data () {
        return {
            sd:'asdasdas',
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
                    key: "number"
                },
                {
                    title: "描述",
                    width: 428,
                    align: "center",
                    key: "name"
                },
                {
                title: "操作",
                width: 200,
                align: "center",
                render: function(h, params) {
                    return h("span", {}, [
                    h(
                        "a",
                        {
                        style: {
                            color: "#00C1DE",
                            marginRight: "31px"
                        },
                        on: {
                            click: () => {
                            console.log('params', params)
                            }
                        }
                        },
                        "下载"
                    ),
                    h(
                        "a",
                        {
                        style: {
                            color: "#00C1DE"
                        },
                        on: {
                            click: () => {
                            self.$axios
                                .post("/api/banner/delete", { bannerId: params.row.id })
                                .then(res => {
                                if (res.data.code == 100) {
                                    self.$Message.success({
                                    content: "删除成功！"
                                    });
                                    self.getData();
                                } else {
                                    self.$Message.error(res.data.msg);
                                }
                                });
                            }
                        }
                        },
                        "删除"
                    )
                    ]);
                }
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
        edit () {
        },
        upload (e){
        }
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

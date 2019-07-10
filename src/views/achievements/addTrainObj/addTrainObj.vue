<template>
  <div class="cont_box container">
    <!--表格-->
    <div class="addAndEdit" >
      <!-- 添加/编辑区 -->
      <h5 class="title">{{descTitle}}</h5>
      <div class="bg">
        <i-form :model="formLeft" label-position="left" :label-width="140">
            <Form-item label="目标简述:">
                <i-input :value.sync="formLeft.intrdu"></i-input>
            </Form-item>
            <Form-item label="目标英文简述:">
                <i-input :value.sync="formLeft.enintrdu"></i-input>
            </Form-item>
            <Form-item label="目标描述" >
                <i-input :value.sync="formLeft.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入..."></i-input>
            </Form-item>
            <Form-item label="目标英文描述" >
                <i-input :value.sync="formLeft.endesc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入..."></i-input>
            </Form-item>
        </i-form>
        <button class="cancel" @click="cancel">取消</button>
        <button class="save" @click="save">保存</button>
        <button class="saveAndAdd" @click="saveAndAdd" v-if="type=='add'">保存并添加一条</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
    type: '',
    formLeft: {
                intrdu: '',
                enintrdu: '',
                desc: '',
                endesc: ''
            },
      showTable: true,
      descTitle: '添加培养目标'
    };
  },
  methods: {
      cancel () {
          this.$router.replace('/achievements/outcome')
      },
      save () {
          this.$router.push('/achievements/outcome')
      },
      saveAndAdd () {
      }
  },
  mounted () {
      this.type = this.$route.query.type || 'add'
  }
};
</script>
<style>
.addAndEdit .ivu-form .ivu-form-item-label {
    font-size: 14px !important;
    color:rgba(51,51,51,1);
}
</style>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin';
.cont_box {

  .addAndEdit {
    .title {
        font-size $font16
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:48px;
    }
    .bg {
        background:rgba(250,250,250,1);
        width:892px;
        padding: 40px 50px
        button {
            padding 1px 20px;
            border-radius:4px;
            font-size:14px;
            font-weight:500;
            line-height:38px;
            margin-right:29px;
            cursor pointer
        }
        .cancel {
            background:rgba(255,255,255,1);
            border:1px solid rgba(135,184,127,1);
            color:rgba(135,184,127,1)
        }
        .save {
            background:rgba(135,184,127,1);
            color:rgba(255,255,255,1)
        }
        .saveAndAdd {
            width:151px;
            background:rgba(255,183,82,1);;
            color:rgba(255,255,255,1)
        }
    }
  }
}
</style>

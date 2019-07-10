<template>
  <div class="modal-backdrop">
    <div class="modal">
      <i class="icon" @click="close"></i>
      <div class="modal-header">{{title}}</div>
      <div class="modal-body">
        <label for="" style="font-size:14px">文件类别：</label>
        <i-select :model.sync="formItem.select" placeholder="请选择" style="width:200px" @on-change='onChange'>
                <i-option value="word文档">word文档</i-option>
                <i-option value="图片">图片</i-option>
                <i-option value="pdf">pdf</i-option>
        </i-select>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn-close"
          @click="cancel"
          v-if="showCancle"
        >{{cancleText?cancleText : '取消'}}</button>
        <button
          type="button"
          class="btn-confirm"
          @click="confirm"
        >{{confirmText ? confirmText : '确定'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    // midal标题
    title: {
      type: String,
      default: "提示"
    },
    // modal内容
    content: {
      type: String,
      default: ""
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 是否显示取消按钮
    showCancle: {
      type: Boolean,
      default: true
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // 取消按钮文字
    cancleText: {
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
      formItem: {
        select: ''
      }
    };
  },
  methods: {
    // 关闭按钮事件
    onChange (value) {
      this.$emit("on-change", value)
    },
    close() {
      this.$emit("on-close");
    },
    cancel() {
      this.$emit("on-cancel");
    },
    // 确定按钮事件
    confirm() {
      this.$emit("on-confirm");
    }
  }
};
</script>
<style scoped>
.modal .icon {
  background: url('../../assets/img/close.png') no-repeat center;
  width: 16px;
  height: 16px;
  background-size: cover;
  position: absolute;
  right: 15px;
  top: 12px;
  cursor: pointer;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:rgba(61,86,141,.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  position: relative;
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width:420px;
  min-height: 230px;
  padding: 40px 35px 0
}
.modal-header {
  border-bottom: 1px solid rgba(108,131,180,1);
  color: rgba(108,131,180,1);
  padding-bottom: 10px;
  font-size: 16px;
}
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
}
.modal-body {
  position: relative;
  padding: 20px;
  font-size: 28px;
  text-align: center;
}
.btn-close,
.btn-confirm {
  width:74px;
height:32px;
background:rgba(255,255,255,1);
border-radius:4px;
cursor: pointer;
}
.btn-close {
  color:rgba(108,131,180,1);
border:1px solid rgba(108,131,180,1);
}
.btn-confirm {
  color: #fff;
  /* background-color: #2d8cf0; */
  background:rgba(108,131,180,1);
}
</style>

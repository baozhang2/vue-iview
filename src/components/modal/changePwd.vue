<template>
  <div class="modal-backdrop">
    <div class="modal">
      <i class="icon" @click="close"></i>
      <div class="modal-header">{{title}}</div>
      <div class="modal-body">
        <i-form :model="formItem" label-position="left" :label-width="80">
        <Form-item label="当前密码：">
            <i-input :value.sync="formItem.oldPwd" type='password'></i-input>
        </Form-item>
        <Form-item label="设置密码：">
            <i-input :value.sync="formItem.newPwd" type='password'></i-input>
        </Form-item>
        <Form-item label="确认密码：">
            <i-input :value.sync="formItem.confirmNewPwd" type='password'></i-input>
        </Form-item>
    </i-form>
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
  name: "delModal",
  props: {
    // midal标题
    title: {
      type: String,
      default: "修改密码"
    },
    formItem: {
      type: Object,
      default() {
        return {
          oldPwd: '',
          newPwd: '',
          confirmNewPwd: ''
        }
      }
    },
    // modal内容
    content: {
      type: String,
      default: "内容"
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
      default: "保存"
    },
    // 取消按钮文字
    cancleText: {
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
    };
  },
  methods: {
    // 关闭按钮事件
    onChange(value) {
      this.$emit("on-change", value);
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
  background: url("../../assets/img/close.png") no-repeat center;
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
  background: rgba(61, 86, 141, 0.5);
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
  /* box-shadow: 2px 2px 20px 1px; */
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 350px;
  min-height: 160px;
  padding: 40px 35px 0;
}
.modal-header {
  border-bottom: 01px solid rgba(158,170,198,1);
  font-weight: 700;
  color: #000;
  padding-bottom: 10px;
  font-size: 18px;
  text-align: center;
}
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 10px;
}
.modal-body {
  position: relative;
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
  color:rgba(102,102,102,1);
}
.btn-close,
.btn-confirm {
  width: 74px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  cursor: pointer;
}
.btn-close {
  color: rgba(108, 131, 180, 1);
  border: 1px solid rgba(108, 131, 180, 1);
}
.btn-confirm {
  color: #fff;
  /* background-color: #2d8cf0; */
  background: rgba(108, 131, 180, 1);
}
</style>

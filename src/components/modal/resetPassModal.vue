<template>
  <div class="modal-backdrop">
    <div class="modal">
      <i class="icon" @click="close"></i>
      <div class="modal-header">{{title}}</div>
      <div class="modal-body">
        <div>
          <input class="resetPassInput" type="text" placeholder="请输入为员工设置的新密码" />
        </div>
        <p>重置密码后请将新密码告知员工，确保其正常使用</p>
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
  name: "resetPassModal",
  props: {
    // midal标题
    title: {
      type: String,
      default: "重置密码"
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
        select: ""
      }
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
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 400px;
  min-height: 30px;
  padding: 40px 35px 0;
}
.modal-header {
  border-bottom: 0;
  color: #6c83b4;
  padding-bottom: 10px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
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
  color: #6c83b4;
}
.modal-body > p {
  font-size: 12px;
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

.resetPassInput {
  height: 35px;
  width: 300px;
  border: 1px solid #6c83b4;
  border-radius: 5px;
  padding-left: 15px;
  background-color: #e2e6f0;
  margin-bottom: 10px;
}

input::-webkit-input-placeholder {
  color: #6c83b4;
}
</style>

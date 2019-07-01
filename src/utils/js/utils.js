
// 右侧提示框
export const msg = (_this, type, title, duration = 5) => _this.$Notice[type]({ title, duration })

// 信息通知框
export const dailog = (_this, type, title = '消息', content) => _this.$Modal[type]({ title, content })

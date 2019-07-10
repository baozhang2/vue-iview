import modal from "./modal.vue";
import delModal from "./delModal.vue";
import changePwd from "./changePwd.vue";
import resetPassModal from "./resetPassModal.vue";
export default {
    install: function (Vue) {
        Vue.component("modal", modal)
        Vue.component("delModal", delModal)
        Vue.component("resetPassModal", resetPassModal)
        Vue.component("changePwd", changePwd)
    }
}

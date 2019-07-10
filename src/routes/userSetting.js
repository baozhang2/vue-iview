/**
 * 用户信息 路由配置文件
 * /userInfo
 */

export default {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import("views/userSetting/userInfo.vue"),
    meta: {
        title: '用户信息'
    }
}

/**
 * 管理设置 路由配置文件
 * /manageSetting
 */

export default {
    path: '/manageSetting',
    name: 'manageSetting',
    component: () => import("views/certification/certification.vue"),
    redirect:'/certification/outcome',
    meta: {
        title: '认证'
    }
}

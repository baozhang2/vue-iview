/**
 * 组织机构 路由配置文件
 * /organization
 */

export default {
    path: '/achievements',
    name: 'achievements',
    component: () => import("views/achievements/achievements.vue"),
    redirect:'/achievements/outcome',
    meta: {
        title: '成果'
    },
    children: [
        {
            path: '/achievements/outcome',
            name:'outcome',
            component: () => import('../views/achievements/outcome/outcome.vue'),
            meta: {
                title: '商学院'
            }
        }
    ]
}

/**
 * 认证 路由配置文件
 * /organization
 */

export default {
    path: '/certification',
    name: 'certification',
    component: () => import("views/certification/certification.vue"),
    redirect:'/certification/outcome',
    meta: {
        title: '认证'
    },
    children: [
        {
            path: '/certification/outcome',
            name:'outcome',
            component: () => import('../views/certification/outcome/outcome.vue'),
            meta: {
                title: '认证进度'
            }
        },
        {
            path: '/certification/renzlc',
            name:'renzlc',
            redirect:'/certification/renzlc',
            component: () => import('../views/certification/renzlc/renzlc.vue'),
            meta: {
                title: '认证流程'
            },
            children: [
                {
                    path: '/certification/renzlc',
                    component: () => import("views/certification/renzlc/chinas.vue"),
                    meta: {
                        title: "中文版"
                    }
                },
                {
                    path: '/certification/renzlc/english',
                    component: () => import("views/certification/renzlc/english.vue"),
                    meta: {
                        title: "英文版"
                    }
                }
            ]
        }
    ]
}

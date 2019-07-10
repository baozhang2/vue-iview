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
            name:'ceroutcome',
            component: () => import('../views/certification/outcome/outcome.vue'),
            meta: {
                title: '认证进度'
            }
        },
        {
            path: '/certification/certificatioPcess',
            name:'certificatioPcess',
            component: () => import('../views/certification/certificatioPcess/certificatioPcess.vue'),
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
                title: '认证标准'
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
        },
        {
            path: '/certification/crtificationRport',
            name:'crtificationRport',
            component: () => import('../views/certification/crtificationRport/crtificationRport.vue'),
            meta: {
                title: '认证报告'
            }
        },
        {
            path: '/certification/frmSmple',
            name:'frmSmple',
            component: () => import('../views/certification/frmSmple/frmSmple.vue'),
            meta: {
                title: '表格样本'
            }
        }
    ]
}

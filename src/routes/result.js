/**
 * 组织机构 路由配置文件
 * /organization
 */

export default {
    path: '/result',
    name: 'result',
    component: () => import("views/organization/Organization.vue"),
    redirect: '/organization/desc',
    meta: {
        title: '组织机构'
    },
    children: [
        // 描述
        {
            path: '/organization/desc',
            name: 'desc',
            component: () => import("views/organization/desc/Desc.vue"),
            meta: {
                title: '描述'
            }
        },
        // 愿景
        {
            path: '/organization/vision',
            name: 'vision',
            redirect: '/organization/vision',
            component: () => import("views/organization/vision/Vision.vue"),
            meta: {
                title: "愿景"
            },
            // 愿景tab栏
            children: [
                // 愿景
                {
                    path: '/organization/vision',
                    name: 'vision',
                    component: () => import("views/organization/vision/Index.vue"),
                    meta: {
                        title: "愿景"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/vision/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/vision/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/vision/report',
                    name: 'report',
                    component: () => import("views/organization/vision/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 使命
        {
            path: '/organization/shiming',
            name: 'shiming',
            redirect: '/organization/shiming',
            component: () => import("views/organization/shiming/Vision.vue"),
            meta: {
                title: "使命"
            },
            // 使命tab栏
            children: [
                // 使命
                {
                    path: '/organization/shiming',
                    name: 'shiming',
                    component: () => import("views/organization/shiming/Index.vue"),
                    meta: {
                        title: "使命"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shiming/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/shiming/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shiming/report',
                    name: 'report',
                    component: () => import("views/organization/shiming/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 价值观
        {
            path: '/organization/jiazhiguan',
            name: 'jiazhiguan',
            redirect: '/organization/jiazhiguan',
            component: () => import("views/organization/jiazhiguan/Vision.vue"),
            meta: {
                title: "价值观"
            },
            // 价值观tab栏
            children: [
                // 价值观
                {
                    path: '/organization/jiazhiguan',
                    name: 'jiazhiguan',
                    component: () => import("views/organization/jiazhiguan/Index.vue"),
                    meta: {
                        title: "价值观"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/jiazhiguan/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/jiazhiguan/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/jiazhiguan/report',
                    name: 'report',
                    component: () => import("views/organization/jiazhiguan/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 战略
        {
            path: '/organization/zhanlue',
            name: 'zhanlue',
            redirect: '/organization/zhanlue',
            component: () => import("views/organization/zhanlue/Vision.vue"),
            meta: {
                title: "战略"
            },
            // 战略tab栏
            children: [
                // 战略
                {
                    path: '/organization/zhanlue',
                    name: 'zhanlue',
                    component: () => import("views/organization/zhanlue/Index.vue"),
                    meta: {
                        title: "战略"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/zhanlue/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/zhanlue/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/zhanlue/report',
                    name: 'report',
                    component: () => import("views/organization/zhanlue/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 社会责任
        {
            path: '/organization/shehuizeren',
            name: 'shehuizeren',
            redirect: '/organization/shehuizeren',
            component: () => import("views/organization/shehuizeren/Vision.vue"),
            meta: {
                title: "社会责任"
            },
            // 社会责任tab栏
            children: [
                // 社会责任
                {
                    path: '/organization/shehuizeren',
                    name: 'shehuizeren',
                    component: () => import("views/organization/shehuizeren/Index.vue"),
                    meta: {
                        title: "社会责任"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shehuizeren/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/shehuizeren/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shehuizeren/report',
                    name: 'report',
                    component: () => import("views/organization/shehuizeren/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 社会影响力
        {
            path: '/organization/shehuiyingxiangli',
            name: 'shehuiyingxiangli',
            redirect: '/organization/shehuiyingxiangli',
            component: () => import("views/organization/shehuiyingxiangli/Vision.vue"),
            meta: {
                title: "社会影响力"
            },
            // 社会影响力tab栏
            children: [
                // 社会影响力
                {
                    path: '/organization/shehuiyingxiangli',
                    name: 'shehuiyingxiangli',
                    component: () => import("views/organization/shehuiyingxiangli/Index.vue"),
                    meta: {
                        title: "社会影响力"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shehuiyingxiangli/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/shehuiyingxiangli/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shehuiyingxiangli/report',
                    name: 'report',
                    component: () => import("views/organization/shehuiyingxiangli/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                }
            ]
        },
        // 绩效指标
        {
            path: '/organization/jixiaozhibiao',
            name: 'jixiaozhibiao',
            redirect: '/organization/jixiaozhibiao',
            component: () => import("views/organization/jixiaozhibiao/Vision.vue"),
            meta: {
                title: "绩效指标"
            },
            // 绩效指标tab栏
            children: [
                // 绩效指标
                {
                    path: '/organization/jixiaozhibiao',
                    name: 'jixiaozhibiao',
                    component: () => import("views/organization/jixiaozhibiao/Index.vue"),
                    meta: {
                        title: "绩效指标"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/jixiaozhibiao/minutes',
                    name: 'minutes',
                    component: () => import("views/organization/jixiaozhibiao/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/jixiaozhibiao/report',
                    name: 'report',
                    component: () => import("views/organization/jixiaozhibiao/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                },
                // 问卷调查
                {
                    path: '/organization/jixiaozhibiao/questionnaire',
                    name: 'questionnaire',
                    component: () => import("views/organization/jixiaozhibiao/Questionnaire.vue"),
                    meta: {
                        title: "问卷调查"
                    }
                }
            ]
        },
        // 查看会议纪要
        {
            path: '/organization/chakanhuiyijiyao',
            name: 'Chakanhuiyijiyao',
            component: () => import("views/organization/Chakanhuiyijiyao.vue"),
            meta: {
                title: '描述'
            }
        },
        // 行政管理
        {
            path: '/organization/xingzhengguanli',
            name: 'xingzhengguanli',
            component: () => import("views/organization/xingzhengguanli/Xingzhengguanli.vue"),
            meta: {
                title: '描述'
            }
        }
    ]
}

/**
 * 组织机构 路由配置文件
 * /organization
 */

 export default {
    path: '/organization',
    component: () => import("views/organization/Organization.vue"),
    redirect: '/organization/desc',
    meta: {
        title: '组织机构'
    },
    children: [
        // 描述
        {
            path: '/organization/desc',
            component: () => import("views/organization/desc/Desc.vue"),
            meta: {
                title: '描述'
            }
        },
        // 愿景
        {
            path: '/organization/vision',
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
                    component: () => import("views/organization/vision/Index.vue"),
                    meta: {
                        title: "愿景"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/vision/minutes',
                    component: () => import("views/organization/vision/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/vision/report',
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
                    component: () => import("views/organization/shiming/Index.vue"),
                    meta: {
                        title: "使命"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shiming/minutes',
                    component: () => import("views/organization/shiming/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shiming/report',
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
                    component: () => import("views/organization/jiazhiguan/Index.vue"),
                    meta: {
                        title: "价值观"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/jiazhiguan/minutes',
                    component: () => import("views/organization/jiazhiguan/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/jiazhiguan/report',
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
                    component: () => import("views/organization/zhanlue/Index.vue"),
                    meta: {
                        title: "战略"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/zhanlue/minutes',
                    component: () => import("views/organization/zhanlue/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/zhanlue/report',
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
                    component: () => import("views/organization/shehuizeren/Index.vue"),
                    meta: {
                        title: "社会责任"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shehuizeren/minutes',
                    component: () => import("views/organization/shehuizeren/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shehuizeren/report',
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
                    component: () => import("views/organization/shehuiyingxiangli/Index.vue"),
                    meta: {
                        title: "社会影响力"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/shehuiyingxiangli/minutes',
                    component: () => import("views/organization/shehuiyingxiangli/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/shehuiyingxiangli/report',
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
                    component: () => import("views/organization/jixiaozhibiao/Index.vue"),
                    meta: {
                        title: "绩效指标"
                    }
                },
                // 会议纪要
                {
                    path: '/organization/jixiaozhibiao/minutes',
                    component: () => import("views/organization/jixiaozhibiao/Minutes.vue"),
                    meta: {
                        title: "会议纪要"
                    }
                },
                // 报告
                {
                    path: '/organization/jixiaozhibiao/report',
                    component: () => import("views/organization/jixiaozhibiao/Report.vue"),
                    meta: {
                        title: "报告"
                    }
                },
                // 问卷调查
                {
                    path: '/organization/jixiaozhibiao/questionnaire',
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
            component: () => import("views/organization/Chakanhuiyijiyao.vue"),
            meta: {
                title: '描述'
            }
        },
        // 行政管理
        {
            path: '/organization/xingzhengguanli',
            component: () => import("views/organization/xingzhengguanli/Xingzhengguanli.vue"),
            meta: {
                title: '描述'
            }
        },
        // 学生管理
        {
            path: '/organization/studentManage',
            name: 'studentManage',
            component: () => import("views/organization/studentManage/studentManage.vue"),
            meta: {
                title: '学生管理'
            }
        },
        // 查看学生信息
        {
            path: '/organization/studentManage/studentDetail',
            component: () => import("views/organization/studentManage/studentDetail.vue"),
            meta: {
                title: "查看学生信息"
            }
        },
        // 查看学生分析
        {
            path: '/organization/studentManage/lookStuFx',
            component: () => import("views/organization/studentManage/lookStuFx.vue"),
            meta: {
                title: "查看学生信息"
            }
        },
        // 教职管理
        {
            path: '/organization/teacherManage',
            component: () => import("views/organization/teacherManage/teacherManage.vue"),
            meta: {
                title: "教职管理"
            }
        }
    ]
}

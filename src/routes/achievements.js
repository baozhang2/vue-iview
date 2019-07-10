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
        },
        {
            path: '/achievements/desc',
            name:'desc',
            component: () => import('../views/achievements/desc/Desc.vue'),
            meta: {
                title: '描述'
            }
        },
        {
            path: '/achievements/addTrainObj',
            name:'addTrainObj',
            component: () => import('../views/achievements/addTrainObj/addTrainObj.vue'),
            meta: {
                title: '新增培养目标'
            }
        },
        {
            path: '/achievements/viewResult',
            name:'viewResult',
            component: () => import('../views/achievements/viewResult/viewResult.vue'),
            meta: {
                title: '查看成果'
            }
        },
        {
            path: '/achievements/viewResult/detail',
            name:'analyEva',
            component: () => import('../views/achievements/analyEva/analyEva.vue'),
            meta: {
                title: '达成度分析与评价'
            }
        },
        {
            path: '/achievements/professional',
            name:'professional',
            component: () => import('../views/achievements/professional/professional.vue'),
            redirect:'/achievements/professional/desc',
            meta: {
                title: '专业'
            },
            children: [
                {
                    path: '/achievements/professional/desc',
                    name:'basedesc',
                    component: () => import('../views/achievements/professional/desc.vue'),
                    meta: {
                        title: '基本描述'
                    }
                },
                {
                    path: '/achievements/professional/viewReview',
                    name:'viewReview',
                    component: () => import('../views/achievements/professional/viewReview/viewReview.vue'),
                    meta: {
                        title: '查看评价'
                    },
                    redirect:'/achievements/professional/viewReview/baseInfo',
                    children: [
                        {
                            path: '/achievements/professional/viewReview/baseInfo',
                            name:'baseInfo',
                            component: () => import('../views/achievements/professional/viewReview/baseInfo.vue'),
                            meta: {
                                title: '基础信息'
                            }
                        },
                        {
                            path: '/achievements/professional/viewReview/testBluep',
                            name:'testBluep',
                            component: () => import('../views/achievements/professional/viewReview/testBluep.vue'),
                            meta: {
                                title: '测验蓝图'
                            }
                        },
                        {
                            path: '/achievements/professional/viewReview/EvaResult',
                            name:'EvaResult',
                            component: () => import('../views/achievements/professional/viewReview/EvaResult.vue'),
                            meta: {
                                title: '评价成绩'
                            }
                        },
                        {
                            path: '/achievements/professional/viewReview/EvaAnaly',
                            name:'EvaAnaly',
                            component: () => import('../views/achievements/professional/viewReview/EvaAnaly.vue'),
                            meta: {
                                title: '评价分析'
                            }
                        },
                        {
                            path: '/achievements/professional/viewReview/gridList',
                            name:'changeplan',
                            component: () => import('../views/achievements/professional/viewReview/gridList.vue'),
                            meta: {
                                title: '查看成绩单'
                            }
                        }
                    ]
                },
                {
                    path: '/achievements/professional/editdesc',
                    name:'editdesc',
                    component: () => import('../views/achievements/professional/editdesc/editdesc.vue'),
                    meta: {
                        title: '编辑基本描述'
                    }
                },
                {
                    path: '/achievements/professional/addGraduate',
                    name:'addGraduate',
                    component: () => import('../views/achievements/professional/addGraduate/addGraduate.vue'),
                    meta: {
                        title: '新增毕业要求'
                    }
                },
                {
                    path: '/achievements/professional/stuList',
                    name:'stuList',
                    component: () => import('../views/achievements/professional/stuList.vue'),
                    meta: {
                        title: '学生列表'
                    }
                },
                {
                    path: '/achievements/professional/coursemap',
                    name:'coursemap',
                    component: () => import('../views/achievements/professional/coursemap.vue'),
                    meta: {
                        title: '课程地图'
                    }
                },
                {
                    path: '/achievements/professional/evaluateplan',
                    name:'evaluateplan',
                    component: () => import('../views/achievements/professional/evaluateplan.vue'),
                    meta: {
                        title: '评价计划'
                    }
                },
                {
                    path: '/achievements/professional/analy',
                    name:'analy',
                    component: () => import('../views/achievements/professional/analy.vue'),
                    meta: {
                        title: '毕业要求达成度分析'
                    }
                },
                {
                    path: '/achievements/professional/summaryreport',
                    name:'summaryreport',
                    component: () => import('../views/achievements/professional/summaryreport.vue'),
                    meta: {
                        title: '教学质量总结报告'
                    }
                },
                {
                    path: '/achievements/professional/changeplan',
                    name:'changeplan',
                    component: () => import('../views/achievements/professional/changeplan.vue'),
                    meta: {
                        title: '改进计划'
                    }
                }
            ]
        },
        {
            path: '/achievements/course',
            name:'course',
            component: () => import('../views/achievements/course/professional.vue'),
            redirect:'/achievements/course/desc',
            meta: {
                title: '课程'
            },
            children: [
                {
                    path: '/achievements/course/desc',
                    name:'coursebasedesc',
                    component: () => import('../views/achievements/course/desc.vue'),
                    meta: {
                        title: '基本描述'
                    }
                },
                {
                    path: '/achievements/course/viewReview',
                    name:'courseviewReview',
                    component: () => import('../views/achievements/course/viewReview/viewReview.vue'),
                    meta: {
                        title: '查看评价'
                    },
                    redirect:'/achievements/course/viewReview/baseInfo',
                    children: [
                        {
                            path: '/achievements/course/viewReview/baseInfo',
                            name:'coursebaseInfo',
                            component: () => import('../views/achievements/course/viewReview/baseInfo.vue'),
                            meta: {
                                title: '基础信息'
                            }
                        },
                        {
                            path: '/achievements/course/viewReview/testBluep',
                            name:'coursetestBluep',
                            component: () => import('../views/achievements/course/viewReview/testBluep.vue'),
                            meta: {
                                title: '测验蓝图'
                            }
                        },
                        {
                            path: '/achievements/course/viewReview/EvaResult',
                            name:'courseEvaResult',
                            component: () => import('../views/achievements/course/viewReview/EvaResult.vue'),
                            meta: {
                                title: '评价成绩'
                            }
                        },
                        {
                            path: '/achievements/course/viewReview/EvaAnaly',
                            name:'courseEvaAnaly',
                            component: () => import('../views/achievements/course/viewReview/EvaAnaly.vue'),
                            meta: {
                                title: '评价分析'
                            }
                        },
                        {
                            path: '/achievements/course/viewReview/gridList',
                            name:'coursechangeplan',
                            component: () => import('../views/achievements/course/viewReview/gridList.vue'),
                            meta: {
                                title: '查看成绩单'
                            }
                        }
                    ]
                },
                {
                    path: '/achievements/course/editdesc',
                    name:'courseeditdesc',
                    component: () => import('../views/achievements/course/editdesc/editdesc.vue'),
                    meta: {
                        title: '编辑基本描述'
                    }
                },
                {
                    path: '/achievements/course/addGraduate',
                    name:'courseaddGraduate',
                    component: () => import('../views/achievements/course/addGraduate/addGraduate.vue'),
                    meta: {
                        title: '新增毕业要求'
                    }
                },
                {
                    path: '/achievements/course/stuList',
                    name:'coursestuList',
                    component: () => import('../views/achievements/course/stuList.vue'),
                    meta: {
                        title: '学生列表'
                    }
                },
                {
                    path: '/achievements/course/evaluateList',
                    name:'evaluateList',
                    component: () => import('../views/achievements/course/evaluateList.vue'),
                    meta: {
                        title: '评价列表'
                    }
                },
                {
                    path: '/achievements/course/Cognitive_dimension',
                    name:'courseevaluateplan',
                    component: () => import('../views/achievements/course/Cognitive_dimension.vue'),
                    meta: {
                        title: '认知维度'
                    }
                },
                {
                    path: '/achievements/course/addtestBlue',
                    name:'addtestBlue',
                    component: () => import('../views/achievements/course/addtestBlue.vue'),
                    meta: {
                        title: '添加测试蓝图'
                    }
                },
                {
                    path: '/achievements/course/analy',
                    name:'courseanaly',
                    component: () => import('../views/achievements/course/analy.vue'),
                    meta: {
                        title: '毕业要求达成度分析'
                    }
                },
                {
                    path: '/achievements/course/summaryreport',
                    name:'coursesummaryreport',
                    component: () => import('../views/achievements/course/summaryreport.vue'),
                    meta: {
                        title: '教学质量总结报告'
                    }
                },
                {
                    path: '/achievements/course/changeplan',
                    name:'coursechangeplan',
                    component: () => import('../views/achievements/course/changeplan.vue'),
                    meta: {
                        title: '改进计划'
                    }
                }
            ]
        }
    ]
}

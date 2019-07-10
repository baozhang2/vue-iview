
const symbolSize = 10;
const borderWidth = 3;

// 认证进度
export const schedule = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [200, 180, 140, 80, 70, 40, 10],
        type: 'line',
        symbolSize: symbolSize,
        lineStyle: {
            normal: {
                color: '#EFBC3F',
                width: borderWidth,
                type: 'solid'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: borderWidth,
                borderColor: '#EFBC3F',
                color: '#fff'
            }
        }
    }]
}

// 上传数量

export const count = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        symbolSize: symbolSize,
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        lineStyle: {
            normal: {
                color: '#73BFF9',
                width: borderWidth,
                type: 'solid'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: borderWidth,
                borderColor: '#73BFF9',
                color: 'rgba(158, 170, 198, .2)'
            }
        }
    }]
};

// 个人趋势
export const tendency = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        symbolSize: symbolSize,
        data: [820, 732, 601, 534, 490, 730, 220],
        type: 'line',
        areaStyle: {},
        lineStyle: {
            normal: {
                color: '#499FF7',
                width: borderWidth,
                type: 'solid'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: borderWidth,
                borderColor: '#499FF7',
                color: 'rgba(158, 170, 198, .2)'
            }
        }
    }]
};

// 学生分数
export const studentGrade = {
    title: {
        text: '2016-2017学年上学期',
        x: 'left',
        textStyle: {
            fontSize: 12
        }
    },
    legend: {
        left: 'center',
        bottom: 0,
        data: ["男", "女"]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        top: '10%',
        left: '5%',
        bottom: '20%',
        right: '5%'
    },
    series: [{
        name: "男",
        symbolSize: 10,
        data: [
            [120, 63],
            [160, 80],
            [165, 70],
            [174, 81],
            [183, 95],
            [200, 43]
        ],
        type: 'scatter'
    },
    {
        name: "女",
        symbolSize: 10,
        data: [
            [10, 70],
            [30, 80],
            [53, 50],
            [68, 81],
            [100, 95],
            [133, 43]
        ],
        type: 'scatter'
    }
    ]
}

// 查看学生分析饼图
export const stuFxPie = {
    title: {
        text: '男女比例',
        x: 'center',
        textStyle: {
            color: "#666",
            fontSize: 16
        }
    },
    legend: {
        data: ["男生人数", "女生人数"],
        top: 30
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '男生人数' },
                { value: 80, name: '女生人数' }
            ],
            color: ["#4d73bd", "#dd8143"]
        }
    ]
}

// 查看学生分析树状图
export const stuFxBar = {
    title: {
        text: '地区分布',
        x: 'center',
        textStyle: {
            color: "#999",
            fontSize: 16
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        data: ['巴西', '印尼', '美国', '印度', '中国']
    },
    series: [
        {
            name: '地区分布',
            type: 'bar',
            data: [183, 489, 234, 744, 230],
            color: ["#4d73be"]
        }
    ]
}

// 评价分析树状图1
export const pjfxBarOne = {
    title: {
        text: '世界人口总量'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20
    }, {
        data: [20, 20, 50, 40, 50, 10, 60],
        type: 'bar',
        barWidth: 20
    }, {
        data: [80, 100, 100, 70, 10, 11, 30],
        type: 'bar',
        barWidth: 20
    }],
    color: ["#4d73be", "#df8244", "#a5a5a5"]
}

// 查看学生分析树状图
export const pjfxBarTwo = {
    title: {
        text: '世界人口总量'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisTick: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 30
    }],
    color: ["#4d73be"]
}

// 查看学生分析饼图
export const pjfxPie = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    legend: {
        orient: 'vertical',
        left: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 80, name: '邮件营销' }
            ],
            color: ["#4d73bd", "#dd8143"]
        }
    ]
}

// 认知维度饼图
export const rzwdPie = {
    legend: {
        data: ["111", "222", "333", "444", "555"],
        left: "10%",
        bottom: 80
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['25%', '40%'],
            data: [
                { value: 335, name: '111' },
                { value: 80, name: '222' },
                { value: 335, name: '333' },
                { value: 80, name: '444' },
                { value: 335, name: '555' }
            ],
            color: ["#f47a8f", "#fad955", "#68d387", "#8ae1e1", "#57adff"]
        }
    ]
}

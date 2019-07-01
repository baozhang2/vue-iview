
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
export const studentGrade = {
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
		top: '5%',
		left: '5%',
		bottom: '10%',
		right: '5%'
	},
	series: [{
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

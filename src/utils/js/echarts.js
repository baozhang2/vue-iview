// 引入 echarts 主模块。
import * as echarts from 'echarts/lib/echarts'

const echart = (dom, options) => {
    // 基于准备好的dom，初始化 echarts 实例并绘制图表。
    return echarts.init(dom).setOption(options);
}

export default echart

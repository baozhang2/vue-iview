<template>
    <div id="analyEva" class="container">
        <div class="flex_r">
          <i-select :model.sync="type" style="width:200px">
                <i-option v-for="(item,key) in typeList" :value="item.value" :key="key">{{ item.label }}</i-option>
            </i-select>
          <div>
            <i-select :model.sync="model1" style="width:200px">
                <i-option v-for="(item,key) in cityList" :value="item.value" :key="key">{{ item.label }}</i-option>
            </i-select>
            <i-input :value.sync="value" icon="ios-search" placeholder="搜索分析名称" style="width: 180px;margin-left:30px"></i-input>
            <button class="search">查询</button>
          </div>
        </div>
        <i-table border :columns="columns1" :data="data1" style="margin-top:15px"></i-table>
    </div>
</template>
<script>
export default {
    data () {
        let self = this;
        return {
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
            typeList: [
                {
                    value: 'districtEvaluate',
                    label: '直接评价'
                },
                {
                    value: 'innerEvaluate',
                    label: '内部+间接评价'
                },
                {
                    value: 'outerEvaluate',
                    label: '外部+直接评价'
                },
                {
                    value: 'outer_Evaluate',
                    label: '外部+间接评价'
                }
            ],
            columns1: [
                    {
                        title: '编号',
                        key: 'number',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '名称',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '评价类型',
                        key: 'eva_type',
                        align: 'center'
                    },
                    {
                        title: '图例',
                        key: 'pic',
                        align: 'center',
                        render: (h, params) => {
                                return h('div', [
                                    h('img', {
                                        attrs: {
                                            src:require('../../../assets/img/table.png')
                                        },
                                        style: {
                                            height: '140px'
                                        }
                                    })]
                                );
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (h, columns) {
                            return h("span", {}, [
                                h(
                                    "a",
                                    {
                                    style: {
                                        color: "rgba(61,86,141,1)",
                                        marginRight: "31px",
                                        textDecoration: 'underline'
                                    },
                                    on: {
                                        click: () => {
                                            alert('暂时不知道跳到哪里')
                                        }
                                    }
                                    },
                                    "查看"
                                )
                                ]);
                        }
                    }
                ],
                data1: [
                    {
                        number: 100021,
                        name: '关于2020年发展及招生计划',
                        eva_type: '直接评价'
                    },
                    {
                        number: 100021,
                        name: '关于2020年发展及招生计划',
                        eva_type: '直接评价'
                    },
                    {
                        number: 100021,
                        name: '关于2020年发展及招生计划',
                        eva_type: '直接评价'
                    }
                ],
            model1: '',
            type: '',
            value: ''
        }
    }
}
</script>
<style lang="stylus" scoped>
.flex_r
    display flex
    justify-content space-between
    .search
        width:62px;
        line-height:30px;
        background:rgba(255,183,82,1);
        border-radius:2px;
        color #fff
        font-size 14px
        text-align center
        margin-left 30px
        cursor pointer
</style>

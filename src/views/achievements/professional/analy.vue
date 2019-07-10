<template>
  <div id="analyEva" class="container">
    <div v-show="!innerEvaluate&&!district&&!outerEvaluate&&!outer_Evaluate">
      <div class="flex_r">
        <i-select
          :model.sync="type"
          style="width:200px"
          @on-change="selectType"
          placeholder="按评价类型添加"
        >
          <i-option
            v-for="(item,key) in typeList"
            :value="item.value"
            placeholder="123"
            :key="key"
          >{{ item.label }}</i-option>
        </i-select>
        <div>
          <i-select
            :model.sync="model1"
            style="width:200px;background:rgba(135,184,127,1);border-radius:2px;"
          >
            <i-option v-for="(item,key) in cityList" :value="item.value" :key="key">{{ item.label }}</i-option>
          </i-select>
          <i-input
            :value.sync="value"
            icon="ios-search"
            placeholder="搜索分析名称"
            style="width: 180px;margin-left:30px"
          ></i-input>
          <button class="search">查询</button>
        </div>
      </div>
      <i-table border :columns="columns1" :data="data1" style="margin-top:15px"></i-table>
    </div>
    <div class="addContent" v-show="innerEvaluate&&!district&&!outer_Evaluate&&!outerEvaluate">
      <div class="line">
        <button class="beauty">基本信息</button>
      </div>
      <div class="cont">
        <span class="lable">评价分析名称:</span>
        <input class="input" v-model="data1.number" type="text" />
      </div>
      <div class="line">
        <button class="beauty">毕业要求选择</button>
      </div>
      <div class="checkbox">
        <input type="checkbox" v-model="checkbox.a" class="boxInput" />
        <label for>理解计算机的基本原理</label>
        <br />
        <br />
        <input type="checkbox" v-model="checkbox.b" class="boxInput" />
        <label for>掌握几门计算机语言</label>
        <br />
        <br />
        <input type="checkbox" v-model="checkbox.c" class="boxInput" />
        <label for>理解计算机的基本原理</label>
        <br />
        <br />
        <input type="checkbox" v-model="checkbox.d" class="boxInput" />
        <label for>掌握几门计算机语言</label>
      </div>
      <div class="line">
        <button class="beauty">会议纪要</button>
        <button class="add">+添加</button>
      </div>
      <i-table border :columns="columns" :data="data" style="margin-top:15px;"></i-table>
      <div class="line">
        <button class="beauty">报告</button>
        <button class="upload">上传</button>
      </div>
      <i-table border :columns="columns" :data="data" style="margin-top:15px"></i-table>
      <div class="line">
        <button class="beauty">总结</button>
      </div>
      <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin-top:20px"></i-input>
      <br />
      <br />
      <span class="lable">上传文件:</span>
      <input class="file" v-model="report.file" type="text" />
      <button class="file_btn">选择文件</button>
      <input type="file" class="hide" />
      <div class="line">
        <button class="beauty">改进计划</button>
      </div>
      <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin-top:20px"></i-input>
      <br />
      <br />
      <span class="lable">上传文件:</span>
      <input class="file" v-model="report.file" type="text" />
      <button class="file_btn">选择文件</button>
      <input type="file" class="hide" />
      <br />
      <br />
      <br />
      <button class="cancel" @click="cancel">返回</button>
      <button class="save" @click="save">保存</button>
    </div>
    <div class="addContent" v-show="district&&!innerEvaluate&&!outerEvaluate&&!outer_Evaluate">
      <div class="line">
        <button class="beauty">基本信息</button>
      </div>
      <div class="cont">
        <span class="lable">评价分析名称:</span>
        <input class="input" v-model="data1.number" type="text" />
      </div>
      <div class="line">
        <button class="beauty">达成度分析</button>
      </div>
      <div class="cont">
        <span class="lable">毕业要求:</span>
        <i-select :model.sync="model1" style="width:200px">
            <i-option v-for="(item,key) in cityList" :key="key" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-table border :columns="columns4" :data="data4" style="margin: 10px 0"></i-table>
      </div>
      <div class="line">
        <button class="beauty">经典测量分析法</button>
        <button class="add">+添加</button>
      </div>
      <div class="cont">
        <span class="lable">数量:</span>
        <input class="input" v-model="data1.number" type="text" />
      </div>
      <div class="cont">
        <span class="lable">说明:</span>
        <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin-top:20px;width:80%"></i-input>
      </div>
      <div class="line">
        <button class="beauty">标准参考测量分析法</button>
      </div>
      <div class="cont">
        <span class="lable">阈值:</span>
        <span style="display:inline-block;width:205px;height:40px;background:rgba(104,164,248,1);vertical-align:middle"></span>
      </div>
      <div class="cont">
        <span class="lable">说明:</span>
        <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin-top:20px;width:80%"></i-input>
      </div>
      <br />
      <br />
      <button class="cancel" @click="cancel">取消</button>
      <button class="save" @click="save">保存</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let self = this;
    return {
      report: { file: "" },
      innerEvaluate: false,
      district: false,
      outerEvaluate: false,
      outer_Evaluate: false,
      checkbox: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      formItem: {
        input: ""
      },
      cityList: [
        {
          value: "beijing",
          label: "北京市"
        },
        {
          value: "shanghai",
          label: "上海市"
        },
        {
          value: "shenzhen",
          label: "深圳市"
        },
        {
          value: "hangzhou",
          label: "杭州市"
        },
        {
          value: "nanjing",
          label: "南京市"
        },
        {
          value: "chongqing",
          label: "重庆市"
        }
      ],
      typeList: [
        {
          value: "districtEvaluate",
          label: "直接评价"
        },
        {
          value: "innerEvaluate",
          label: "内部+间接评价"
        },
        {
          value: "outerEvaluate",
          label: "外部+直接评价"
        },
        {
          value: "outer_Evaluate",
          label: "外部+间接评价"
        }
      ],
      columns: [
        {
          title: "编号",
          key: "code"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "上传时间",
          key: "uploadTime"
        },
        {
          title: "上传人",
          key: "uploadMan"
        },
        {
          title: "操作",
          key: "operation"
        }
      ],
      data: [],
      columns1: [
        {
          title: "编号",
          key: "number",
          width: 100,
          align: "center"
        },
        {
          title: "名称",
          key: "name",
          align: "center"
        },
        {
          title: "评价类型",
          key: "eva_type",
          align: "center"
        },
        {
          title: "图例",
          key: "pic",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("img", {
                attrs: {
                  src: require("../../../assets/img/table.png")
                },
                style: {
                  height: "140px"
                }
              })
            ]);
          }
        },
        {
          title: "操作",
          key: "action",
          width: 70,
          align: "center",
          render(h, columns) {
            return h("span", {}, [
              h(
                "a",
                {
                  style: {
                    color: "rgba(61,86,141,1)",
                    // marginRight: "31px",
                    textDecoration: "underline"
                  },
                  on: {
                    click: () => {
                      alert("暂时不知道跳到哪里");
                    }
                  }
                },
                "查看"
              ),
              h(
                "a",
                {
                  style: {
                    color: "rgba(61,86,141,1)",
                    textDecoration: "underline",
                    display: "block",
                    margin: " 10px 0"
                  },
                  on: {
                    click: () => {
                      // self.$router.push({
                      //     path: "/banneredit",
                      //     query: { id: params.row.id }
                      // });
                    }
                  }
                },
                "删除"
              ),
              h(
                "a",
                {
                  style: {
                    color: "rgba(61,86,141,1)",
                    textDecoration: "underline",
                    display: "block"
                  },
                  on: {
                    click: () => {
                      // self.$axios
                      //     .post("/api/banner/delete", { bannerId: params.row.id })
                      //     .then(res => {
                      //     if (res.data.code == 100) {
                      //         self.$Message.success({
                      //         content: "删除成功！"
                      //         });
                      //         self.getData();
                      //     } else {
                      //         self.$Message.error(res.data.msg);
                      //     }
                      //     });
                    }
                  }
                },
                "编辑"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          number: 100021,
          name: "关于2020年发展及招生计划",
          eva_type: "直接评价"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生计划",
          eva_type: "直接评价"
        },
        {
          number: 100021,
          name: "关于2020年发展及招生计划",
          eva_type: "直接评价"
        }
      ],
      columns4: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: '姓名',
                key: 'name'
            },
            {
                title: '年龄',
                key: 'age'
            },
            {
                title: '地址',
                key: 'address'
            }
        ],
      data4: [
            {
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            },
            {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            },
            {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道'
            },
            {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道'
            }
        ],
      model1: "",
      type: "",
      value: ""
    };
  },
  methods: {
    cancel() {},
    save() {},
    selectType(value) {
        console.log(value)
        switch (value) {
            case 'innerEvaluate':
                this.innerEvaluate = true;
                this.district = false;
                this.outerEvaluate = false;
                this.outer_Evaluate = false;
                break
            case 'districtEvaluate':
                this.district = true;
                this.innerEvaluate = false;
                this.outerEvaluate = false;
                this.outer_Evaluate = false;
                break
            case 'outerEvaluate':
                this.outerEvaluate = true;
                this.district = false;
                this.innerEvaluate = false;
                this.outer_Evaluate = false;
                break;
            case 'outer_Evaluate':
                this.outer_Evaluate = true;
                this.outerEvaluate = false;
                this.district = false;
                this.innerEvaluate = false;
                break
        }
    }
  },
  mounted() {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#FAFAFA";
  }
};
</script>
<style lang="stylus" scoped>
.flex_r {
  display: flex;
  justify-content: space-between;

  .search {
    width: 62px;
    line-height: 30px;
    background: rgba(255, 183, 82, 1);
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-left: 30px;
    cursor: pointer;
  }
}

.addContent {
  .line {
    margin-top: 20px;
    border-bottom: 1px solid rgba(108, 131, 180, 1);
    padding-bottom: 2px;
    display: flex;
    justify-content: space-between;

    button {
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .beauty {
      width: 92px;
      height: 36px;
      background: rgba(108, 131, 180, 1);
      font-size: $font16;
      line-height: 36px;
    }

    .edit {
      width: 60px;
      height: 30px;
      background: rgba(209, 91, 71, 1);
      border-radius: 4px;
      font-size: $font14;
      line-height: 30px;
      cursor: pointer;
    }

    .add {
      width: 60px;
      height: 30px;
      background: rgba(243, 152, 0, 1);
      border-radius: 4px;
      font-size: $font14;
      color: #fff;
      line-height: 30px;
      cursor: pointer;
    }

    .upload {
      width: 60px;
      height: 30px;
      border-radius: 4px;
      font-size: $font14;
      color: #fff;
      line-height: 30px;
      cursor: pointer;
      background: rgba(209, 91, 71, 1);
    }
  }

  .lable {
    margin-right: 8px;
  }

  .input {
    font-size: $font14;
    width: 420px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 5px 25px;
    border: 1px solid $eee;
    margin: 10px 0 10px;
  }

  .file {
    font-size: $font14;
    width: 286px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 5px 25px;
    border: 1px solid $eee;
    margin: 10px 0 10px;
  }

  .hide {
    position: relative;
    right: 122px;
    opacity: 0;
    z-index: 50;
    width: 122px;
    height: 33px;
  }

  .file_btn {
    width: 122px;
    height: 33px;
    background: #6FB3E0;
    margin-left: 12px;
  }

  .checkbox {
    margin-top: 20px;

    .boxInput {
      margin-right: 10px;
      width: 16px;
      height: 16px;
      border: none;
      outline: none;
      border: 1px solid rgba(160, 160, 160, 1);
    }
  }

  .cont {
    background: #FAFAFA;
    padding-top: 16px;

    .lable {
      margin-right: 10px;
    }

    .input {
      font-size: $font14;
      width: 420px;
      background-color: #FFFFFF;
      box-sizing: border-box;
      padding: 5px 25px;
      border: 1px solid $eee;
      margin: 10px 0 10px;
    }
  }

  button {
    padding 1px 20px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    margin-right: 29px;
    cursor: pointer;
  }

  .cancel {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(135, 184, 127, 1);
    color: rgba(135, 184, 127, 1);
  }

  .save {
    background: rgba(135, 184, 127, 1);
    color: rgba(255, 255, 255, 1);
  }
}
</style>

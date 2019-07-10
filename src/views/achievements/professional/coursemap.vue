<template>
  <div id="gridList" class="container">
    <div v-show="!tableIsShow">
      <Row>
        <Col>
          <span>
            课程名称：
            <span v-text="kcmc"></span>
          </span>
        </Col>
      </Row>
      <table border="1" cellpadding="0" cellspacing="0" class="table">
        <thead>
          <tr>
            <th>毕业要求</th>
            <th>关系</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>理解计算机运行原理</td>
            <td>
              <Checkbox :checked.sync="introduced">introduced</Checkbox>
              <Checkbox :checked.sync="emphasized">emphasized</Checkbox>
            </td>
          </tr>
          <tr>
            <td>具有计算机思维</td>
            <td>
              <Checkbox :checked.sync="introduced">introduced</Checkbox>
            </td>
          </tr>
          <tr>
            <td>具有对外交流能力</td>
            <td>
              <Checkbox :checked.sync="general">general</Checkbox>
              <Checkbox :checked.sync="introduced">introduced</Checkbox>
              <Checkbox :checked.sync="emphasized">emphasized</Checkbox>
            </td>
          </tr>
          <tr>
            <td>具有一定学习能力</td>
            <td>
              <Checkbox :checked.sync="introduced">introduced</Checkbox>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="cancel listbtn" @click="cancel">返回</button>
      <button class="save listbtn" @click="save">保存</button>
    </div>
    <div v-show="tableIsShow">
      <div class="wzkcdt-down">
        <span>完整课程地图：</span>
        <a href="#">我是一个完整课程地图.pdf</a>
      </div>
      <Button type="error" class="manageBtn" @click="manageClick">管理</Button>
      <Button type="success" class="cxUploadBtn" @click="manageClick">重新上传</Button>
      <Table
        highlight-row
        ref="currentRowTable"
        @on-current-change="currentRow"
        :columns="columns11"
        :data="data10"
        border
      ></Table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: "",
      single: true,
      emphasized: false,
      general: true,
      introduced: false,
      tableIsShow: true,
      kcmc: "",
      tempData: {},
      columns11: [
        {
          title: "课程",
          key: "kecheng",
          align: "center"
        },
        {
          title: "理解计算机原理",
          align: "center",
          children: [
            {
              title: "通用",
              align: "center",
              children: [
                {
                  title: "G",
                  key: "age",
                  align: "center"
                }
              ]
            },
            {
              title: "专业",
              align: "center",
              children: [
                {
                  title: "专业1",
                  key: "street",
                  align: "center"
                },
                {
                  title: "专业2",
                  key: "building",
                  align: "center"
                }
              ]
            }
          ]
        },
        {
          title: "具有计算机思维",
          align: "center",
          children: [
            {
              title: "通用",
              align: "center",
              children: [
                {
                  title: "G",
                  key: "age",
                  align: "center"
                }
              ]
            },
            {
              title: "专业",
              align: "center",
              children: [
                {
                  title: "专业1",
                  key: "street",
                  align: "center"
                },
                {
                  title: "专业2",
                  key: "building",
                  align: "center"
                }
              ]
            }
          ]
        },
        {
          title: "具有一定的学习能力",
          align: "center",
          children: [
            {
              title: "通用",
              align: "center",
              children: [
                {
                  title: "G",
                  key: "age",
                  align: "center"
                }
              ]
            },
            {
              title: "专业",
              align: "center",
              children: [
                {
                  title: "专业1",
                  key: "street",
                  align: "center"
                },
                {
                  title: "专业2",
                  key: "building",
                  align: "center"
                }
              ]
            }
          ]
        }
      ],
      data10: [
        {
          kecheng: "计算机原理",
          key: 1,
          age: 1,
          street: "Lake Park",
          building: "C"
        },
        {
          kecheng: "编译原理",
          key: 1,
          age: 1,
          street: "Lake Park",
          building: "C"
        },
        {
          kecheng: "线性代数",
          key: 1,
          age: 1,
          street: "Lake Park",
          building: "C"
        }
      ]
    };
  },
  methods: {
    cancel() {
      // this.$router.replace('/achievements/outcome')
      this.tableIsShow = true;
    },
    save() {
      // this.$router.push('/achievements/outcome')
    },
    manageClick() {
      this.tempData.age == undefined
        ? this.$Message.info("您还没选择表格数据")
        : (this.tableIsShow = false);
      this.kcmc = this.tempData.kecheng;
    },
    currentRow(e) {
      this.tempData = e;
      debugger;
    }
  }
};
</script>
<style lang="stylus" scoped>
#gridList {
  .table {
    width: 100%;
    margin: 20px 0;

    th, td {
      border: 1px solid #000;
      height: 60px;
      text-align: center;
      vertical-align: middle;
    }
  }

  .listbtn {
    width: 84px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
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

  .wzkcdt-down {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    width: 792px;
  }

  .manageBtn {
    background-color: #D15B47;
    width: 60px;
    height: 30px;
  }

  .cxUploadBtn {
    background-color: #87B87F;
    width: 100px;
    height: 30px;
    margin-left: 40px;
  }
}
</style>

<template>
  <!-- 组织管理界面 -->
  <div id="organizationManagement">
    <div class="top">
      <div class="scgl" @click="scgl($event)">全局设置</div>
      <div class="xsxxyj" @click="xsxxyj($event)">学校设置</div>
    </div>
    <div class="dis" v-show="datasc">
      <div class="container">
        <Table :columns="columns" :data="data"></Table>
        <div class="centers">
          <Page :total="50" show-total />
        </div>
      </div>
    </div>
    <div class="student" v-show="dataxs">
      <div class="container">
        <Row style="margin-bottom: 30px;">
          <Col class="label" span="3">Logo：</Col>
          <Col span="21">
            <img src="#" alt="#" />
          </Col>
        </Row>
        <Row class="rowMagin">
          <Col class="label" span="3">登录页背景：</Col>
          <Col span="21">
            <img src="#" alt="#" style="width:150px" />
          </Col>
        </Row>
        <Row class="rowMagin">
          <Col class="label" span="3">二维码：</Col>
          <Col span="21">
            <img src="#" alt="#" />
          </Col>
        </Row>
        <Row class="rowMagin wblj">
          <Col class="label" span="3">外部链接：</Col>
          <Col span="21">
            <p>
              1、学校官网地址：
              <a href="www.baidu.com">www.baidu.com</a>
            </p>
            <p>
              2、学校官网地址：
              <a href="www.baidu.com">www.baidu.com</a>
            </p>
          </Col>
        </Row>
        <Row class="rowMagin">
          <Col class="label" span="3">认知维度：</Col>
          <Col span="21">
            <img src="#" alt="#" style="width:200px;height:200px" />
          </Col>
        </Row>
        <Row class="rowMagin">
          <Col class="label" span="3">联系电话：</Col>
          <Col span="21">
            <span>010-1234567</span>
            <Button type="text">编辑：</Button>
          </Col>
        </Row>
        <Row class="rowMagin">
          <Col class="label" span="3">默认语言：</Col>
          <Col span="21">
            <Select v-model="defultLanguage" style="width:200px">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </div>
    <div class="dis-edit" v-show="disEdit">
      <div class="container">
        <p>编辑</p>
        <div class="edit-content">
          <div class="edit-top">
            <div class="edit-top-left">
              <span>模块：</span>
              <span v-text="itemDetail.name"></span>
            </div>
            <div class="edit-top-right">
              <span>下拉菜单：</span>
              <span v-text="itemDetail.age"></span>
            </div>
          </div>
          <div class="edit-middle">
            <span class="edit-kx">可用选项：</span>
            <CheckboxGroup v-model="itemDetail.add">
              <Checkbox v-for="item in itemDetail.address" :label="item.id" :key="item.id">
                {{item.name}}
                <!-- <a class="add-btn" v-if="index == itemDetail.address.length-1">+添加</a> -->
              </Checkbox>
            </CheckboxGroup>
          </div>
          <div class="edit-foot">
            <Button @click="scgl($event)">取消</Button>
            <Button type="primary">确定</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { debuglog } from "util";
import { truncate } from "fs";
export default {
  data() {
    let self = this;
    return {
      datasc: true,
      dataxs: false,
      disEdit: false,
      itemDetail: {
        name: "",
        age: "",
        add: [],
        address: []
      },
      columns: [
        {
          title: "可用选项",
          key: "name"
        },
        {
          title: "模块",
          key: "age"
        },
        {
          title: "可用选项",
          // key: "address",
          render: (h, params) => {
            var str = "";
            for (var i = 0, len = params.row.address.length; i < len; i++) {
              if (i == len - 1) {
                str += params.row.address[i].name;
              } else {
                str += params.row.address[i].name + ",";
              }
            }
            return h("span", {}, str);
          }
        },
        {
          title: "操作",
          width: 200,
          align: "center",
          render: function(h, params) {
            return h("span", {}, [
              h(
                "a",
                {
                  style: {
                    color: "#00C1DE",
                    marginRight: "31px"
                  },
                  on: {
                    click: () => {
                      self.editEvt(params.row);
                    }
                  }
                },
                "编辑"
              )
            ]);
          }
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: [{ id: "1", name: "2" }, { id: "2", name: "3" }]
        },
        {
          name: "Jim Green",
          age: 24,
          address: [{ id: "3", name: "2" }, { id: "4", name: "4" }]
        },
        {
          name: "Joe Black",
          age: 30,
          address: [{ id: "5", name: "2" }, { id: "6", name: "5" }]
        },
        {
          name: "Jon Snow",
          age: 26,
          address: [{ id: "7", name: "6" }]
        }
      ],
      defultLanguage: "",
      cityList: [
        {
          value: "中文",
          label: "中文"
        },
        {
          value: "英文",
          label: "英文"
        }
      ]
    };
  },
  methods: {
    /**
     * 编辑事件
     *  */
    editEvt(item) {
      this.itemDetail.name = item.name;
      this.itemDetail.age = item.age;
      this.itemDetail.address = item.address;
      this.dataxs = this.datasc = false;
      this.disEdit = true;
    },
    scgl(event) {
      event.target.style.color = "#3D568D";
      document.getElementsByClassName("xsxxyj")[0].style.color = "#333";
      this.dataxs = this.disEdit = false;
      this.datasc = true;
    },
    xsxxyj(event) {
      event.target.style.color = "#3D568D";
      document.getElementsByClassName("scgl")[0].style.color = "#333";
      this.dataxs = true;
      this.datasc = this.disEdit = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../utils/styl/mixin.styl';

#organizationManagement {
  .centers {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }

  .top {
    display: flex;
    width: 100%;
    height: 48px;
    background: #EEEEEE;

    .scgl {
      margin-left: 130px;
      font-size: 14px;
      line-height: 48px;
      color: #3D568D;
      cursor: pointer;
    }

    .xsxxyj {
      margin-left: 66px;
      font-size: 14px;
      line-height: 48px;
      cursor: pointer;
    }
  }

  .dis {
    margin-top: 38px;
    display: flex;
  }

  .edit-content {
    height: 400px;
    margin-top: 10px;
    background-color: #fafafa;
    padding: 50px;
    position: relative;

    .edit-top {
      display: flex;
      justify-content: space-between;
    }

    .edit-middle {
      margin-top: 20px;

      .edit-kx {
        display: inline-block;
      }

      .ivu-checkbox-group {
        margin-left: 6%;
        border: 1;
        display: inline-block;
        width: 84%;

        .add-btn {
          margin-left: 15px;
          color: red;
        }
      }
    }

    .edit-foot {
      position: absolute;
      bottom: 30px;
      left: 40px;

      Button {
        margin-right: 15px;
      }
    }
  }

  .student {
    margin-bottom: 80px;

    .rowMagin {
      margin-bottom: 30px;
    }

    .wblj {
      p {
        margin-bottom: 20px;
      }
    }

    img {
      width: 100px;
      display: inline-block;
      height: 100px;
      background-color: #bababa;
    }
  }
}
</style>

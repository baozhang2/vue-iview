<template>
  <div class="container">
    <div class="outer">
      <div class="outer_content" v-show="!addExamine&&!isnextStep">
        <h4 style="font-size:16px;font-weight:bold;color:rgba(51,51,51,1);line-height:24px;">理解计算机运行原理</h4>
        <br />
        <div class="box">
          <div class="subject">
            <div class="issue">1.理解计算及的运行原理</div>
            <div style="display:flex;">
              <Radio v-model="single1"></Radio>
            </div>
          </div>
          <div class="line1"></div>
          <div class="subject">
            <div class="issue">2.至少掌握一门编程技术</div>
            <div style="display:flex;">
              <Radio v-model="single2"></Radio>
            </div>
          </div>
        </div>
        <div style="margin:50px 0">
          <button class="button cancel" >取消</button>
          <button class="button save" @click="toAddExamine">下一步</button>
        </div>
      </div>
      <div class="nextContent" v-show="addExamine">
      <h4 style="font-size:16px;font-weight:bold;color:rgba(51,51,51,1);line-height:24px;">考核内容设定</h4>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">考核内容：</span>
      <i-input style="width:90%"></i-input>
      <br>
      <br>
      <div class="xiahuaxian" style="justify-content:flex-start">
          <img class="icon" src="../../../assets/img/icon.png" style="width: 23px;height: 18px;margin-right:10px;" />
          量规设定
      </div>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">总分：</span>
      <i-input style="width:20%" value='5'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">优秀：</span>
      <i-input style="width:20%" value='5'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">达标</span>
      <i-input style="width:20%"></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">及格：</span>
      <i-input style="width:20%"></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">不及格：</span>
      <i-input style="width:20%"></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <div style="margin:50px 0">
          <button class="button cancel" >取消</button>
          <button class="button save">保存</button>
          <button class="button saveAndAdd" @click="nextStep">保存并添加一条</button>
        </div>
      </div>
      <div class="nextThenContent" v-show="isnextStep">
        <h4 style="font-size:16px;font-weight:bold;color:rgba(51,51,51,1);line-height:24px;">课程大纲：理解计算机的基本原理</h4>
      <br>
      <br>
      <div class="xiahuaxian" style="justify-content:flex-start" >
          <img class="icon" src="../../../assets/img/icon.png" style="width: 23px;height: 18px;margin-right:10px;" />
          题形信息
      </div>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">单选题：</span>
      <i-input style="width:15%;" value='5'></i-input>
      <span style="font-size:16px;color:rgba(51,51,51,1);">多选题：</span>
      <i-input style="width:15%" value=''></i-input>
      <span style="font-size:16px;color:rgba(51,51,51,1);">判断：</span>
      <i-input style="width:15%" value=''></i-input>
      <span style="font-size:16px;color:rgba(51,51,51,1);">填空：</span>
      <i-input style="width:15%" value=''></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">单选题：</span>
      <i-input style="width:15%" value='5'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">案例分析：</span>
      <i-input style="width:20%"></i-input>
      <br>
      <br>
      <span style="font-size:16px;color:rgba(51,51,51,1);">打分标准：</span>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <br>
      <br>
      <div class="xiahuaxian" style="justify-content:flex-start">
          <img class="icon" src="../../../assets/img/icon.png" style="width: 23px;height: 18px;margin-right:10px;" />
          评价量规
      </div>
      <br>
      <i-input style="width:80%" :rows='3' type='textarea'></i-input>
      <div style="margin:50px 0">
          <button class="button lastStep" @click="backStep">上一步</button>
          <button class="button save" >确定</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      single2: "",
      single1: true,
      addExamine: false,
      isnextStep: false
    };
  },
  methods: {
    toAddExamine () {
      this.addExamine = true
    },
    nextStep () {
      this.isnextStep = true
      this.addExamine = false
    },
    backStep () {
      this.isnextStep = false
      this.addExamine = true
    }
  }
};
</script>

<style lang="stylus" scoped>
span {
  display:inline-block;
  width:80px;
  color:rgba(51,51,51,1);
  text-align center
}
.xiahuaxian {
  text-align center;
  color:rgba(108,131,180,1);
  font-size:16px;
      width: 100%;
      border-bottom: 1px solid rgba(136,171,218,1);
      padding-bottom: 1px;
      display: flex;
      .title {
        width: 88px;
        height: 30px;
        line-height: 30px;
        background-color: rgba(136, 171, 218, 1);
        border: 1px solid $navCol;
        color: #ffffff;
        text-align: center;
        font-size: $font14;
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
    }
.outer {
  width: 950px;
  padding: 44px 22px 44px 26px;
  background: rgba(250, 250, 250, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.button {
      padding 1px 20px;
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
      color: rgba(255, 255, 255, 1);
      background:rgba(135,184,127,1);
    }
    .saveAndAdd {
      background:rgba(243,152,0,1);
      color: rgba(255, 255, 255, 1);
    }
    .lastStep {
      border:1px solid rgba(243,152,0,1);
      color rgba(243,152,0,1)
    }
.box {
  width: 911px;
  border: 1px solid rgba(238, 238, 238, 1);
  padding: 10px 70px 10px 16px;

  .subject {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 30px;

    .report {
      text-decoration: underline;
      color: rgba(108, 131, 180, 1);
      cursor: pointer;
      letter-spacing: 1px;
    }

    .mg_r {
      margin-right: 20px;
    }
  }

  .line1 {
    margin: 7px 0;
    height: 1px;
    background: rgba(238, 238, 238, 1);
  }
}
</style>

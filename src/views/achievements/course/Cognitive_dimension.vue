<template>
  <div id="content" class="container">
    <div>
      <div class="title">
        <Button class="titleBtn" type="primary">认知维度介绍</Button>
      </div>
      <Row class="wdjs">
        <Col span="16">
          <img class="wdjsImg" src="#" alt="#" />
        </Col>
        <Col span="8">
          <div class="wdjs-text">
            <p>认知维度说明</p>
            <div>
              adasbfbadasdsaddddddddddddsssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssssssss
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div>
      <div class="title">
        <Button class="titleBtn" type="primary">认知维度统计</Button>
      </div>
      <div class="wdtjTu" ref="rzwdPie"></div>
    </div>
  </div>
</template>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import { rzwdPie } from "utils/js/echar_options";
export default {
  mounted() {
    this.$nextTick(e => {
      this.$echarts(this.$refs.rzwdPie, rzwdPie);
    });
  }
};
</script>
<style lang="stylus" scoped>
#content {
  .wdjs {
    .wdjsImg {
      display: inline-block;
      width: 442px;
      height: 433px;
      background-color: #bababa;
      margin: 15px 0;
    }

    .wdjs-text {
      p {
        margin: 15px 0;
      }

      div {
        width: 100%;
        height: 100px;
        word-wrap: break-word;
      }
    }
  }

  .title {
    border-bottom: 1px solid #6C83B4;

    .titleBtn {
      width: 122px;
      height: 36px;
      background-color: #6C83B4;
    }
  }

  .wdtjTu {
    width: 100%;
    height: 500px;
  }
}
</style>

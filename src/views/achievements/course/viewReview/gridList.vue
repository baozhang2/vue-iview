<template>
  <div id="gridList" class="container">
    <Row>
      <Col span="6">
        <span>姓名：李萌</span>
      </Col>
      <Col span="18">学号：9000000001</Col>
    </Row>
    <table border="1" cellpadding="0" cellspacing="0" class="table">
      <thead>
        <tr>
          <th>毕业要求</th>
          <th>课程目标</th>
          <th>题型</th>
          <th>分值</th>
          <th>分数明细</th>
          <th>得分</th>
          <th>评价</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3">毕业要求1</td>
          <td rowspan="3">课程目标1（总分:30）</td>
          <td>单选</td>
          <td>10分</td>
          <td>5</td>
          <td rowspan="3">20</td>
          <td rowspan="3">及格</td>
        </tr>
        <tr>
          <td>多选</td>
          <td>5分</td>
          <td>3</td>
        </tr>
        <tr>
          <td>判断</td>
          <td>15分</td>
          <td>12</td>
        </tr>
        <tr>
          <td rowspan="3">毕业要求2</td>
          <td rowspan="3">课程目标2（总分:70）</td>
          <td>单选</td>
          <td>20分</td>
          <td>12</td>
          <td rowspan="3">48</td>
          <td rowspan="3">及格</td>
        </tr>
        <tr>
          <td>多选</td>
          <td>20分</td>
          <td>18</td>
        </tr>
        <tr>
          <td>案例分析</td>
          <td>15分</td>
          <td>12</td>
        </tr>
        <tr>
          <td>总分</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>68</td>
          <td>及格</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: ""
    };
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
}
</style>

<template>
  <div class="cmt-container">
    <h3>comment</h3>
    <hr>
    <textarea placeholder="pls say something no more than 100 words" maxlength="100" v-model="msg"></textarea>

    <mt-button type="primary" size="large">POST</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          1.&nbsp;&nbsp;username：asdasd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;published:  2019-12-12 10:58
        </div>
        <div class="cmt-body">
          asdasdasdadsa
        </div>
      </div>
            <div class="cmt-item">
        <div class="cmt-title">
          2.&nbsp;&nbsp;username：asdasd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;published:  2019-12-12 10:58
        </div>
        <div class="cmt-body">
          asdasdasdadsa
        </div>
      </div>
            <div class="cmt-item">
        <div class="cmt-title">
          3.&nbsp;&nbsp;username：asdasd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;published:  2019-12-12 10:58
        </div>
        <div class="cmt-body">
          asdasdasdadsa
        </div>
      </div>
            <div class="cmt-item">
        <div class="cmt-title">
          4.&nbsp;&nbsp;username：asdasd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;published:  2019-12-12 10:58
        </div>
        <div class="cmt-body">
          asdasdasdadsa
        </div>
      </div>
            <div class="cmt-item">
        <div class="cmt-title">
          5.&nbsp;&nbsp;username：asdasd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;published:  2019-12-12 10:58
        </div>
        <div class="cmt-body">
          asdasdasdadsa
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cmt-container h3 {
    font-size: 18px;
  }
.cmt-container textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

.cmt-container .cmt-list {
    margin: 5px 0;
    }
.cmt-item {
      font-size: 13px;
    }

.cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
</style>
<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">wawawawa</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>published：2019-12-12</span>
      <span>like：20 times</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="'asdasdadasda'"></div>
    <comment></comment>
  </div>
  
</template>

<script>
// 1. 导入 评论子组件
import comment from "../subcomponents/comments.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
    };
  },
  components:{
      comment
  }
};
</script>

<style scoped>
.newsinfo-container {
  padding: 0 4px;
}
.title {
font-size: 16px;
text-align: center;
margin: 15px 0;
color: red;
}
.subtitle {
font-size: 13px;
color: #226aff;
display: flex;
justify-content: space-between;
}

</style>
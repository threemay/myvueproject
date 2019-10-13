<template>

  <div>  
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="" class="img-grid">
                <div class="mui-media-body">news</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="" class="img-grid">
                <div class="mui-media-body">photo</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu3.png" alt="" class="img-grid">
                <div class="mui-media-body">Chat</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu4.png" alt="" class="img-grid">
                <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu5.png" alt="" class="img-grid">
                <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../images/menu6.png" alt="" class="img-grid">
                <div class="mui-media-body">Phone</div></a></li>
           

		  </ul>


    
    
    
    <h3>home</h3>
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
    },
  created(){
    this.getLunbotu
  },
  methods: {
    getLunbotu(){
      this.$http.get("http://vue.studyit.io/api/getlunbo")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1){
      background-color: red;
}
.mint-swipe-item:nth-child(2){
      background-color: green;
}
.mint-swipe-item:nth-child(3){
      background-color: yellow;
}

.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.img-grid{
  height: 60px;
  width: 60px;
}

</style>
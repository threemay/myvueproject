<template>
  <div>
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
						<a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item mui-active" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>

			<ul class="photolist">
				<li v-for="item in list" :key="item">
					<img v-lazy="item">
				</li>
			</ul>
  </div>
</template>

<script>
import mui from '../../../lib/js/mui.min.js'
// import mui from './mui.min.js'



export default {
  name: 'HelloWorld',
  data () {
    return {
	  msg: 'Welcome to Your Vue.js App',
	  list: ['https://files.ozbargain.com.au/n/84/489284.jpg?h=da24a640','https://files.ozbargain.com.au/n/76/489276.jpg?h=e72a5bb8',3,4,5]
    }
  },
  mounted() {
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
  },
  methods: {
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* { touch-action: pan-y; } 

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

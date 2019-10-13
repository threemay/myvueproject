// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem,Button } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'



Vue.config.productionTip = false

Vue.use(VueResource)

import moment from 'moment'

Vue.filter('dataformat',function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

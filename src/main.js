import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router"
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg',
  error:'/imgs/loading-svg/loading-spin.svg',
  attempt: 2
})
Vue.use(VueCookie);


Vue.config.productionTip = false
//根据前端跨域方式做出调整
axios.defaults.baseURL="http://mall-pre.springboot.cn"
//超时
axios.defaults.timeout=8000;
//拦截
axios.interceptors.response.use(
  function(response){
    let res=response.data;
    let path=location.hash;
    if(res.status == 0){
      return res.data;
    }else if(res.status == 10){
      if(path!='#/index ')
      window.location.href='/#/login';
    }else{
      alert(res.status.msg);
      return Promise.reject(res);
    }
  }
)

Vue.prototype.axios=axios;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

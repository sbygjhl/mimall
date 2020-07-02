import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router"
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'




Vue.config.productionTip = false
//根据前端跨域方式做出调整
axios.defaults.baseURL="http://mall-pre.springboot.cn"
//超时
axios.defaults.timeout=8000;
//拦截
axios.interceptors.response.use(
  function(response){
    let res=response.data;
    if(res.status == 0){
      return res.data;
    }else if(res.status == 10){
      window.location.href='/#/login';
    }else{
      alert(res.status.msg);
    }
  }
)

Vue.prototype.axios=axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

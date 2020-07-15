import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router"
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import {Message} from 'element-ui'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg',
  error:'/imgs/loading-svg/loading-spin.svg',
  attempt: 2
})
Vue.use(VueCookie);
Vue.component(Message.name, Message)

import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$message = Message;

Vue.config.productionTip = false
//根据前端跨域方式做出调整
axios.defaults.baseURL="http://localhost:9090/api"
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
      if(path!='#/index'){
        window.location.href='/#/login';
      }
      Message({
        message: '请登陆',
        type: 'warning'
      });
      return Promise.reject(res);
    }else{
      return Promise.reject(res);
    }
  },
  err=>{
    Message.error(err.response.data.message);
    return Promise.reject(err.response.data.message);
  }
)

Vue.prototype.axios=axios;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

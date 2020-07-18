import Vue from "vue"
import router from "vue-router"

import Home from "./pages/home"
// import Index from "./pages/index"
// import Cart from './pages/cart'
// import Login from './pages/login'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Order from './pages/order'

// import Confirm from './pages/confirm'
// import List from './pages/list'
// import Pay from './pages/pay'
// import AliPay from './pages/alipay'
Vue.use(router);


export default new router({
    routes:[
        {
            path:"/",
            name:"home",
            component:Home,
            children:[
                {
                    path:"index",
                    name:"index",
                    component:resolve=>require(['./pages/index.vue'],resolve)
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:resolve=>require(['./pages/product.vue'],resolve)
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:resolve=>require(['./pages/detail.vue'],resolve)
                }
            ],
            redirect:"/index"
        },
        {
            path:'/login',
            name:'login',
            component:resolve=>require(['./pages/login.vue'],resolve)
        },
        {
            path:'/cart',
            name:'cart',
            component:resolve=>require(['./pages/cart.vue'],resolve)
        },
        {
            path:'/order',
            name:'order',
            component:resolve=>require(['./pages/order.vue'],resolve),
            children:[
                {
                    path:'confirm',
                    name:'confirm',
                    component:resolve=>require(['./pages/confirm.vue'],resolve),
                },
                {
                    path:'list',
                    name:'list',
                    component:resolve=>require(['./pages/list.vue'],resolve),
                },
                {
                    path:'pay',
                    name:'pay',
                    component:resolve=>require(['./pages/pay.vue'],resolve),
                },
                {
                    path:'aliPay',
                    name:'aliPay',
                    component:resolve=>require(['./pages/alipay.vue'],resolve),
                }
            ]
        }
        
    ]
})
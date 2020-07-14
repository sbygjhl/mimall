import Vue from "vue"
import router from "vue-router"

import Home from "./pages/home"
import Index from "./pages/index"
import Cart from './pages/cart'
import Login from './pages/login'
import Product from './pages/product'
import Detail from './pages/detail'
import Order from './pages/order'

import Confirm from './pages/confirm'
import List from './pages/list'
import Pay from './pages/pay'
import AliPay from './pages/alipay'
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
                    component:Index
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:Product
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:Detail
                }
            ],
            redirect:"/index"
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'confirm',
                    name:'confirm',
                    component:Confirm,
                },
                {
                    path:'list',
                    name:'list',
                    component:List,
                },
                {
                    path:'pay',
                    name:'pay',
                    component:Pay,
                },
                {
                    path:'aliPay',
                    name:'aliPay',
                    component:AliPay,
                }
            ]
        }
        
    ]
})
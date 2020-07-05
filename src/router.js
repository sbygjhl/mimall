import Vue from "vue"
import router from "vue-router"

import Home from "./pages/home"
import Index from "./pages/index"
import Cart from './pages/cart'
import Login from './pages/login'

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
        }
    ]
})
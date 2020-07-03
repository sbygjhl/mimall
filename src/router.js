import Vue from "vue"
import router from "vue-router"

import Home from "./pages/home"
import Index from "./pages/index"
import Cart from './pages/cart'

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
            path:'/cart',
            name:'cart',
            component:Cart
        }
    ]
})
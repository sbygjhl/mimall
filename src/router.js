import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home"
import Index from "./pages/index"
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home,
            children:[
                {
                    path:'index',
                    name:"index",
                    component:Index
                }
            ],
            redirect:'/index',
        }
    ]
})